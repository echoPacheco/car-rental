<template>
    <section class="container">
        <div class="row mt-4">
            <div class="col-md-12">
                <h2 style="margin-bottom: 20px;">Previous Bookings</h2>
                <input type="text" v-model="searchQuery" class="form-control text-white bg-dark search-input"
                    placeholder="Search by Car Make or Model...">

                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Car</th>
                            <th scope="col">Details</th>
                            <th scope="col">Price</th>
                            <th scope="col">Pick Up Date</th>
                            <th scope="col">Return Date</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="car in filteredCars" :key="car.id">
                            <th scope="row">{{ car.id }}</th>
                            <td>{{ formatName(car.carData.make) }} {{ formatName(car.carData.model) }}</td>
                            <td>
                                <button type="button" class="btn btn-outline-light" data-bs-toggle="modal"
                                    :data-bs-target="'#carDetailsModal' + car.id" @click="selectedCar = car">
                                    Show Details
                                </button>
                            </td>
                            <td>${{ car.price }}</td>
                            <td>{{ formatDate(car.startDate) }}</td>
                            <td>{{ formatDate(car.endDate) }}</td>
                            <td>{{ getStatus(car) }}</td>
                        </tr>
                    </tbody>
                </table>

                <div v-for="car in rentedCars" :key="car.id">
                    <div class="modal fade" :id="'carDetailsModal' + car.id" tabindex="-1" role="dialog"
                        aria-labelledby="carDetailsModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg custom-modal" role="document">
                            <div class="modal-content bg-dark text-light">
                                <div class="modal-header">
                                    <h2 class="modal-title" id="carDetailsModalLabel">Car Details</h2>
                                </div>
                                <div class="modal-body">
                                    <div v-if="selectedCar">
                                        <carDetailsModal :carData="selectedCar.carData" :carImage="selectedCar.carImg">
                                        </carDetailsModal>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-outline-light"
                                        data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/main";
import { getAuth } from "firebase/auth";
import carDetailsModal from "@/components/CheckoutCar.vue";

export default {
    components: { carDetailsModal },
    setup() {
        const auth = getAuth();
        const user = auth.currentUser;
        const uid = user !== null ? user.uid : null;
        const rentedCars = ref([]);
        const selectedCar = ref(null);
        const searchQuery = ref('');

        onMounted(async () => {
            const querySnapshot = await getDocs(collection(db, "rents", uid, "rentedCars"));
            let resRentedCars = [];
            querySnapshot.forEach((doc) => {
                const rentedCar = {
                    id: doc.id,
                    carData: doc.data().carData,
                    carImg: doc.data().carImg,
                    price: doc.data().price,
                    startDate: doc.data().startDate,
                    endDate: doc.data().endDate,
                };
                resRentedCars.push(rentedCar);
            });
            rentedCars.value = [...resRentedCars];
        });

        const formatName = (str) => {
            return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        };

        const formatDate = (date) => {
            return new Date(date.seconds * 1000).toLocaleDateString();
        };

        const getStatus = (car) => {
            const currentDate = new Date();
            const startDate = new Date(car.startDate.seconds * 1000);
            const endDate = new Date(car.endDate.seconds * 1000);

            if (currentDate < startDate) {
                return "Incoming";
            } else if (currentDate >= startDate && currentDate <= endDate) {
                return "Active";
            } else {
                return "Finished";
            }
        };

        // Crie uma computed property para filtrar os resultados com base na consulta de pesquisa
        const filteredCars = computed(() => {
            return rentedCars.value.filter(car => {
                const searchString = searchQuery.value.toLowerCase();
                const carMake = car.carData.make.toLowerCase();
                const carModel = car.carData.model.toLowerCase();

                return carMake.includes(searchString) || carModel.includes(searchString);
            });
        });

        return {
            rentedCars,
            formatName,
            formatDate,
            getStatus,
            selectedCar,
            searchQuery,
            filteredCars,
        };
    },
};
</script>

<style>
.search-input {
    max-width: 400px;
    margin-block: 20px;
}

.search-input::placeholder {
    color: rgb(148, 147, 147);
}
</style>