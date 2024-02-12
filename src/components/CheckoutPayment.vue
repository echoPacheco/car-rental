<template>
  <div class="payment-container">
    <div class="car-container col-8">
      <div class="car-content car-content-form">
        <el-form label-width="130px">
          <div>
            <h2>Credit or debit card information</h2>
            <hr>
            <el-form-item label="Name on card:">
              <el-input v-model="cardName" required />
            </el-form-item>
            <el-form-item label="Card number:">
              <el-input v-model="cardNumber" disabled placeholder="**** **** **** ****">
              </el-input>
            </el-form-item>
            <el-form-item label="Expire Date:">
              <el-col :span="9">
                <el-date-picker v-model="expireDate" required type="month" placeholder="Pick a date" />
              </el-col>
              <el-col :span="6" class="ms-3">
                <span style="color: #606266;">Security code:</span>
              </el-col>
              <el-col :span="3" class="ms-3">
                <el-input v-model="cardSecCode" type="number" disabled placeholder="***" class="ms-2"
                  style="display: inline;">
                </el-input>
              </el-col>
            </el-form-item>
          </div>

          <div>
            <h2>Billing information</h2>
            <hr>
            <el-form-item label="First name:">
              <el-col :span="8">
                <el-input v-model="firstName" required label="Name on card:" />
              </el-col>
              <el-col :span="8" class="">
                <span style="color: #606266;">Last name:</span>
              </el-col>
              <el-col :span="8">
                <el-input v-model="lastName" required label="Name on card:" />
              </el-col>
            </el-form-item>

            <el-form-item label="Address line 1:">
              <el-input v-model="addressLine1" required />
            </el-form-item>

            <el-form-item label="Address line 2:">
              <el-input v-model="addressLine2" placeholder="(optional)" />
            </el-form-item>

            <el-form-item label="City:">
              <el-col :span="8">
                <el-input v-model="city" required />
              </el-col>
              <el-col :span="8" class="">
                <span style="color: #606266;">Postal code:</span>
              </el-col>
              <el-col :span="8">
                <el-input v-model="postalCode" required label="Postal code:" />
              </el-col>
            </el-form-item>

            <el-form-item label="Province:">
              <el-select v-model="province" required placeholder="British Columbia" style="width: 240px">
                <el-option v-for="province in provinces" :key="province.value" :label="province.label"
                  :value="province.value" />
              </el-select>
            </el-form-item>

            <el-form-item label="Phone number:">
              <el-input v-model="phoneNumber" required type="tel" @input="formatPhoneNumber" placeholder="(111) 111-1111">
              </el-input>
            </el-form-item>

          </div>
        </el-form>
      </div>
    </div>
    <div class="summary-container">
      <div class="summary-content">
        <h2>Pick up and Drop off</h2>
        <hr>
        <el-date-picker v-model="rentDays" :disabledDate="disabledDate" type="daterange" unlink-panels
          range-separator="To" start-placeholder="Start date" end-placeholder="End date" :shortcuts="shortcuts" />
      </div>
      <div class="summary-content">
        <h2>Summary</h2>
        <hr>
        <table class="summary-table">
          <tr>
            <td>Pickup Date:</td>
            <td class="value">{{ rentDays[0] ? rentDays[0].toLocaleDateString() : '-' }}</td>
          </tr>
          <tr>
            <td>Return Date:</td>
            <td class="value">{{ rentDays[1] ? rentDays[1].toLocaleDateString() : '-' }}</td>
          </tr>
          <tr>
            <td>Daily Price:</td>
            <td class="value">$ {{ dailyPrice }}</td>
          </tr>
          <tr>
            <td>Delivery Fee:</td>
            <td class="value">$ 0</td>
          </tr>
          <tr>
            <td>Duration:</td>
            <td class="value">{{ calculateDateDifference() }} days</td>
          </tr>
          <tr>
            <td>Tax:</td>
            <td class="value">$ {{ taxPrice }}</td>
          </tr>
        </table>
        <hr>
        <h5>Total Value: $ {{ totalPrice }}</h5>
      </div>
      <div class="summary-content">
        <button :disabled="!daysDiff" @click="createNewOrder" class="btn btn-outline-light me-2">
          Submit Order
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/main"
import { getAuth } from "firebase/auth";
import { useRouter } from 'vue-router';
import { ElMessage, ElMessageBox } from 'element-plus'

export default {
  props: {
    carData: Object,
    carImage: String,
  },
  data() {
    return {
      cardName: "",
      cardNumber: "**** **** **** ****",
      expireDate: "",
      cardSecCode: "",
      firstName: "",
      lastName: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      postalCode: "",
      province: "",
    };
  },
  setup(props, context) {
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user !== null ? user.uid : null;
    const router = useRouter();
    const rentDays = ref([])
    const phoneNumber = ref(null);
    const dailyPrice = ref(null);
    const taxPrice = ref(0);
    const totalPrice = ref(0);
    const daysDiff = ref(null)

    const provinces = ref([
      {
        value: 'Alberta',
        label: 'Alberta',
      },
      {
        value: 'British Columbia',
        label: 'British Columbia',
      },
      {
        value: 'Manitoba',
        label: 'Manitoba',
      },
      {
        value: 'New Brunswick',
        label: 'New Brunswick',
      },
      {
        value: 'Newfoundland and Labrador',
        label: 'Newfoundland and Labrador',
      },
      {
        value: 'Northwest Territories',
        label: 'Northwest Territories',
      },
      {
        value: 'Nova Scotia',
        label: 'Nova Scotia',
      },
      {
        value: 'Nunavut',
        label: 'Nunavut',
      },
      {
        value: 'Ontario',
        label: 'Ontario',
      },
      {
        value: 'Prince Edward Island',
        label: 'Prince Edward Island',
      },
      {
        value: 'Quebec',
        label: 'Quebec',
      },
      {
        value: 'Saskatchewan',
        label: 'Saskatchewan',
      },
      {
        value: 'Yukon',
        label: 'Yukon',
      },
    ]);

    const shortcuts = [
      {
        text: 'Week',
        value: () => {
          const end = new Date()
          const start = new Date()
          end.setTime(start.getTime() + 3600 * 1000 * 24 * 7)
          return [start, end]
        },
      },
      {
        text: 'Month',
        value: () => {
          const end = new Date()
          const start = new Date()
          end.setTime(start.getTime() + 3600 * 1000 * 24 * 30)
          return [start, end]
        },
      },
    ]

    const formatName = (str) => {
      return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    const formatFuel = (fuel_type) => {
      if (fuel_type === 'gas') {
        return 'Gasoline'
      } else if (fuel_type === 'electric') {
        return 'Electric'
      } else return 'Diesel'

    };

    const formatPhoneNumber = (value) => {
      var x = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      phoneNumber.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    };

    const calculateDateDifference = () => {
      if (rentDays.value.length === 2) {
        const startDate = rentDays.value[0];
        const endDate = rentDays.value[1];
        const timeDiff = endDate.getTime() - startDate.getTime();
        daysDiff.value = Math.ceil(timeDiff / (1000 * 3600 * 24));
        taxPrice.value = parseFloat((Number(dailyPrice.value) * 0.12) * daysDiff.value).toFixed(2);
        totalPrice.value = parseFloat(Number(dailyPrice.value) * daysDiff.value + Number(taxPrice.value)).toFixed(2);
        return daysDiff.value
      }
      return 0;
    };

    const disabledDate = (time) => {
      const date = new Date();
      const previousDate = date.setDate(date.getDate() - 1);
      return time.getTime() < previousDate;
    };

    const calculateCarRent = () => {
      const basePricePerDay = 50;
      const mileageFactor = 1.50;
      const ageFactor = 0.55;
      const mileageRate = props.carData.city_mpg * mileageFactor;
      const ageRate = (props.carData.year - new Date().getFullYear()) * ageFactor;
      dailyPrice.value = basePricePerDay + mileageRate + ageRate;
    };

    onMounted(() => {
      calculateCarRent()
    })

    const createNewOrder = async () => {
      if (!user) {
        open()
        return;
      }
      const rentedCar = {
        price: totalPrice.value,
        startDate: rentDays.value[0],
        endDate: rentDays.value[1],
        carImg: props.carImage,
        carData: props.carData,
      };

      const res = await addDoc(collection(db, "rents", uid, "rentedCars"), rentedCar)
      context.emit('increaseStep', res.data);
    }
    const open = () => {
      ElMessageBox.confirm(
        'You need to sign in before checkout. Continue?',
        'Info',
        {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning',
        }
      )
        .then(() => {
          router.push('/sign-in');
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: 'Order canceled',
          })
        })
    }

    return {
      formatName,
      formatFuel,
      formatPhoneNumber,
      calculateDateDifference,
      disabledDate,
      calculateCarRent,
      createNewOrder,
      shortcuts,
      rentDays,
      provinces,
      phoneNumber,
      dailyPrice,
      taxPrice,
      daysDiff,
      totalPrice,
    }
  },
};
</script>

<style scoped>
.payment-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.car-container {
  display: flex;
  justify-content: center;
  border-radius: 25px;
  background: #222529;
  padding: 20px;
}

.summary-content {
  border-radius: 25px;
  background: #222529;
  padding: 20px;
  margin-bottom: 40px;
}

.car-content img {
  max-height: 250px;
  max-width: fit-content;
  object-fit: cover;
}

.car-content-form {
  display: flex;
  flex-direction: column;
  font-size: 30px;
  font-weight: bold;
  padding: 20px;
}

.summary-table {
  width: 100%;
  border-collapse: collapse;
}

.summary-table td {
  text-align: left;
}

.summary-table td.value {
  text-align: right;
}

.error {
  border-color: red;
}
</style>