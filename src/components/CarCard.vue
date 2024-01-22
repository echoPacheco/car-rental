<template>
  <div class="row row-cols-1 row-cols-md-6 g-3">
    <div class="col">
      <div class="card text-white bg-dark mb-3 mt-3 p-3">
        <h5 class="card-title fs-4">{Audi} {R8 Coupe}</h5>
        <p class="flex mt-6 fs-4">
          <span class="self-start fs-6 ">$</span> <!-- {{ carRent }} --> {56}
          <span class="self-end fs-6 fw-medium">/day</span>
        </p>

        <img src="@/assets/car_exemplo.webp" class="card-img-top" alt="...">
        <div class="card-body d-flex justify-content-between">
          <div class="col-4 text-center">
            <img src="@/assets/steering-wheel.svg" width="20" height="20" alt="steering wheel" />
            <p>
              <!-- {{ car.transmission === 'a' ? 'Automatic' : 'Manual' }}  -->Automatic
            </p>
          </div>
          <div class="col-4 text-center">
            <img src="@/assets/tire.svg" width="20" height="20" alt="seat" />
            <p class="">
              <!-- {{ car.drive.toUpperCase() }} --> FWD
            </p>
          </div>
          <div class="col-4 text-center">
            <img src="@/assets/gas.svg" width="20" height="20" alt="seat" />
            <p class="">
              <!-- {{ car.drive.toUpperCase() MPG }} --> 19 MPG
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card text-white bg-dark mb-3 mt-3 p-3">
        <h5 class="card-title fs-4">{Audi} {R8 Coupe}</h5>
        <p class="flex mt-6 fs-4">
          <span class="self-start fs-6 ">$</span> <!-- {{ carRent }} --> {56}
          <span class="self-end fs-6 fw-medium">/day</span>
        </p>

        <img src="@/assets/car_exemplo.webp" class="card-img-top" alt="...">
        <div class="card-body d-flex justify-content-between">
          <div class="col-4 text-center">
            <img src="@/assets/steering-wheel.svg" width="20" height="20" alt="steering wheel" />
            <p>
              <!-- {{ car.transmission === 'a' ? 'Automatic' : 'Manual' }}  -->Automatic
            </p>
          </div>
          <div class="col-4 text-center">
            <img src="@/assets/tire.svg" width="20" height="20" alt="seat" />
            <p class="">
              <!-- {{ car.drive.toUpperCase() }} --> FWD
            </p>
          </div>
          <div class="col-4 text-center">
            <img src="@/assets/gas.svg" width="20" height="20" alt="seat" />
            <p class="">
              <!-- {{ car.drive.toUpperCase() MPG }} --> 19 MPG
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="col">
      <div class="card h-100">
        <img src="@/assets/car_exemplo.webp" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a short card.</p>
        </div>
      </div>
    </div> -->
</template>

<script>
import { ref } from "vue";
// import { computed } from "vue";
// import CarDetails from "./CarDetails.vue"; // assuming the file is named CarDetails.vue

export default {
  // props: {
  //   // car: Object,
  // },
  components: {
    // CarDetails,
  },
  // setup(props) {
  setup() {
    const isOpen = ref(false);

    // const carRent = computed(() => calculateCarRent(props.car.city_mpg, props.car.year));

    const generateCarImageUrl = () => {
      return "car_exemplo.webp"
      // const generateCarImageUrl = (car) => {
      // Implement your generateCarImageUrl function
    };

    const openModal = () => {
      isOpen.value = true;
    };

    const closeModal = () => {
      isOpen.value = false;
    };

    return {
      // carRent,
      isOpen,
      openModal,
      closeModal,
      generateCarImageUrl,
    };
  },
};
</script>

<style scoped>
.card-body {}
</style>
