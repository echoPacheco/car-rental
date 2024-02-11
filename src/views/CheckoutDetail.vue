<template>
  <div class="container">

    <div class="track-container">
      <div class="track">
        <div v-for="step in steps" :key="step" :class="{
          step: true,
          active: currentStep === step,
          completed: completedSteps.includes(step),
        }">
          <span class="icon"></span>
          <span class="text">{{ stepTitles[step - 1] }}</span>
        </div>
      </div>
    </div>

    <h1 class="p-2">Checkout</h1>
    <div class="justify-content-center ">
      <div class="text-center">

        <div v-show="currentStep === 1">
          <div v-if="parsedCarImage && parsedCarData">
            <CheckoutCar :carData="parsedCarData" :carImage="parsedCarImage" />
          </div>
        </div>

        <div v-show="currentStep === 2">
          <CheckoutPayment :carData="parsedCarData" :carImage="parsedCarImage" />
        </div>
        
        <div v-show="currentStep === 3">
          <!-- Your content for step 3 -->
        </div>
        <div v-show="currentStep === 4">
          <h2 class="text-center">Confirmar e Finalizar</h2>
          <!-- Adicione campos e lógica para confirmação final -->
          <button @click="saveCheckoutData" class="btn btn-warning">
            Confirmar e Finalizar
          </button>
        </div>
      </div>
    </div>

    <div class="row justify-content-center mt-3">
      <div class="col-md-6 text-center">
        <button @click="decreaseStep" class="btn btn-outline-light me-2" v-if="currentStep !== 1">
          Back
        </button>
        <button @click="increaseStep" class="btn btn-outline-light me-2" :disabled="currentStep === 4">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import CheckoutCar from "@/components/CheckoutCar.vue";
import CheckoutPayment from "@/components/CheckoutPayment.vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/main"

// import { getAuth } from "firebase/auth";

export default {
  props: {
    carData: String,
    carImage: String,
  },
  components: { CheckoutCar, CheckoutPayment },
  setup(props) {
    const route = useRoute();
    const parsedCarData = ref(null);
    const parsedCarImage = ref(null);
    const currentStep = ref(1);
    const completedSteps = ref([]);
    const steps = [1, 2, 3, 4];
    const stepTitles = ["Review", "Payment", "Confirm", "Ready for pickup"];
    const value = ref(null);
    const defaultTime = ref(null);
    const darkTheme = ref("dark");

    onMounted(() => {
      if (props.carData) {
        const decodedData = decodeURIComponent(props.carData);
        parsedCarData.value = JSON.parse(decodedData);
      }

      parsedCarImage.value = props.carImage || route.params.carImage;
    });

    const increaseStep = () => {
      if (currentStep.value < 4) {
        completedSteps.value.push(currentStep.value);
        currentStep.value += 1;
      }
    };

    const decreaseStep = () => {
      if (currentStep.value > 1) {
        completedSteps.value.pop();
        currentStep.value -= 1;
      }
    };

    const saveCheckoutData = async () => {
      const querySnapshot = await getDocs(collection(db, "rents"))
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
      })

    };

    // const saveCheckoutData = async () => {
    //   const user = auth.currentUser;

    //   if (!user) {
    //     console.error("Usuário não autenticado. Não é possível salvar dados do checkout.");
    //     return;
    //   }

    //   const checkoutCollection = collection(db, 'rents');

    //   const checkoutData = {
    //     make: "audi",
    //     model: "a6",
    //     img: "https://cdn.imagin.studio/getimage?customer=hrjavascript-mastery&make=audi&modelFamily=a3&zoomType=fullscreen&modelYear=2023",
    //     price: 100.50,
    //     start_date: "15/02/2024",
    //     end_date: "16/02/2024",
    //     userId: user.uid,
    //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //   };

    //   try {
    //     const docRef = await addDoc(checkoutCollection, checkoutData);
    //     console.log("Dados do checkout adicionados com sucesso! ID do documento:", docRef.id);
    //   } catch (error) {
    //     console.error("Erro ao adicionar dados do checkout:", error);
    //   }
    // };

    return {
      parsedCarData,
      parsedCarImage,
      currentStep,
      completedSteps,
      steps,
      stepTitles,
      increaseStep,
      decreaseStep,
      value,
      defaultTime,
      darkTheme,
      saveCheckoutData,
    };
  },
};
</script>


<style>
.container {
  margin-top: 50px;
  margin-bottom: 50px;
}

.track-container {
  border-top: #222529 solid 2px;
  border-bottom: #222529 solid 2px;
  margin-bottom: 30px;
}

.track {
  position: relative;
  background-color: #ddd;
  height: 7px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 60px;
  margin-top: 50px;
}

.track .step {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  width: 25%;
  margin-top: -18px;
  text-align: center;
  position: relative;
}

.track .step.active:before {
  background: #0d6efd;
}

.track .step::before {
  height: 7px;
  position: absolute;
  content: "";
  width: 100%;
  left: 0;
  top: 18px;
}

.track .step.active .icon {
  background: #0d6efd;
  color: #fff;
}

.track .icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  position: relative;
  border-radius: 100%;
  background: #ddd;
}

.track .step.active .text {
  font-weight: 400;
}

.track .text {
  display: block;
  margin-top: 7px;
}

.itemside {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}

.itemside .aside {
  position: relative;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.img-sm {
  width: 80px;
  height: 80px;
  padding: 7px;
}

ul.row,
ul.row-sm {
  list-style: none;
  padding: 0;
}

.itemside .info {
  padding-left: 15px;
  padding-right: 7px;
}

.itemside .title {
  display: block;
  margin-bottom: 5px;
  color: #212529;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

.btn-warning {
  color: #ffffff;
  background-color: #ee5435;
  border-color: #ee5435;
  border-radius: 1px;
}

.btn-warning:hover {
  color: #ffffff;
  background-color: #ff2b00;
  border-color: #ff2b00;
  border-radius: 1px;
}

.track .step.completed:before {
  background: #0d6efd;
}

.track .step.completed .icon {
  background: #0d6efd;
  color: #fff;
}

.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

/* .row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -16px;
}

.col-25 {
    flex: 25%;
}

.col-50 {
    flex: 50%;
}

.col-75 {
    flex: 75%;
}

.col-25,
.col-50,
.col-75 {
    padding: 0 16px;
}

.container {
    background-color: #f2f2f2;
    padding: 5px 20px 15px 20px;
    border: 1px solid lightgrey;
    border-radius: 3px;
}

input[type=text] {
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

label {
    margin-bottom: 10px;
    display: block;
}

.icon-container {
    margin-bottom: 20px;
    padding: 7px 0;
    font-size: 24px;
}

.btn {
    background-color: #04AA6D;
    color: white;
    padding: 12px;
    margin: 10px 0;
    border: none;
    width: 100%;
    border-radius: 3px;
    cursor: pointer;
    font-size: 17px;
}

.btn:hover {
    background-color: #45a049;
}

span.price {
    float: right;
    color: grey;
}

@media (max-width: 800px) {
    .row {
        flex-direction: column-reverse;
    }

    .col-25 {
        margin-bottom: 20px;
    }
 } */
</style>
