<template>
    <div>Historic</div>
    <div v-if="rentedCars.length > 0">{{ this.rentedCars }}</div>
    <button @click="createNewRent">criar</button>
</template>
  
<script>
import { ref, onMounted } from "vue";
import { addDoc, Timestamp, collection, getDocs } from "firebase/firestore";
import { db } from "@/main"
import { getAuth } from "firebase/auth";

export default {

    components: {},
    // data() {
    //     return {
    //         rentedCars: []
    //     };
    // },
    setup() {
        const auth = getAuth();
        const user = auth.currentUser;
        const uid = user !== null ? user.uid : null;
        const rentedCars = ref([])

        const createNewRent = async () => {
            const rentedCar = {
                price: 300.50,
                startDate: Timestamp.fromDate(new Date("December 10, 2024")),
                endDate: Timestamp.fromDate(new Date("December 20, 2024")),
                carImg: "https://cdn.imagin.studio/getimage?customer=hrjavascript-mastery&make=audi&modelFamily=a3&zoomType=fullscreen&modelYear=2023",
                carData: {
                    "city_mpg": 112,
                    "class": "two seater",
                    "combination_mpg": 116,
                    "cylinders": 10,
                    "displacement": 5.2,
                    "drive": "awd",
                    "fuel_type": "gas",
                    "highway_mpg": 20,
                    "make": "audi",
                    "model": "r8 awd",
                    "transmission": "a",
                    "year": 2023
                }
            };
            const carRef = await addDoc(collection(db, "rents", uid, "rentedCars"), rentedCar)
            console.log("rodou", carRef.id);
        }

        onMounted(async () => {
            const querySnapshot = await getDocs(collection(db, "rents", uid, "rentedCars"))
            let resRentedCars = []
            querySnapshot.forEach((doc) => {
                const rentedCar = {
                    id: doc.id,
                    carData: doc.data().carData,
                    carImg: doc.data().carImg
                }
                resRentedCars.push(rentedCar)
            })
            rentedCars.value = [...resRentedCars]
            console.log(rentedCars);
        })

        return {
            createNewRent,
            rentedCars,
        };
    },
};
</script>