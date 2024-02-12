<template>
    <div>Historic</div>
    <div v-if="rentedCars.length > 0">{{ this.rentedCars }}</div>
</template>
  
<script>
import { ref, onMounted } from "vue";
import { collection, getDocs } from "firebase/firestore";
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
        })

        return {
            rentedCars,
        };
    },
};
</script>