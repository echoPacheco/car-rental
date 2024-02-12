<template>
  <div v-if="paginatedCars" class="row row-cols-1 row-cols-md-3 g-4">
    <div v-for="(car, index) in paginatedCars" :key="index" class="col mb-4">
      <router-link :to="{ name: 'CheckoutDetail', params: { carData: JSON.stringify(car), carImage: generateCarImageUrl(car.make, car.model, car.year) } }">
        <div class="card text-white bg-dark p-3" @mouseover="hoveredCar = car" @mouseout="hoveredCar = null"
          :class="{ 'brighten': car === hoveredCar }">
          <template v-if="car.make && car.model && car.year">
            <div v-if="!imageLoaded[index]" class="text-center">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <h5 class="card-title fs-4"
              style="max-width: 200px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;"
              :title="formatName(car.make) + ' ' + formatName(car.model)">
              {{ formatName(car.make) }} {{ formatName(car.model) }}
            </h5>
            <p class="flex mt-6 fs-4">
              <span class="self-start fs-6 ">$</span> {{ calculateCarRent(car.city_mpg, car.year) }}
              <span class="self-end fs-6 fw-medium">/day</span>
            </p>

            <img :ref="carImageRef(index)" :src="generateCarImageUrl(car.make, car.model, car.year)"
              class="card-img-top img-fluid" style="max-height: 250px; object-fit: cover;" @load="onImageLoad(index)">

            <div v-if="imageLoaded[index]" class="d-flex justify-content-between">
              <div class="col-4 text-center">
                <img src="@/assets/steering-wheel.svg" width="20" height="20" alt="steering wheel" />
                <p>{{ car.transmission === 'a' ? 'Automatic' : 'Manual' }}</p>
              </div>
              <div class="col-4 text-center">
                <img src="@/assets/tire.svg" width="20" height="20" alt="tire" />
                <p>{{ car.drive.toUpperCase() }}</p>
              </div>
              <div class="col-4 text-center">
                <img src="@/assets/gas.svg" width="20" height="20" alt="gas" />
                <p>{{ car.combination_mpg + "MPG" }}</p>
              </div>
            </div>
          </template>
          <div v-else>
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </router-link>
    </div>
  </div>
  <div v-else class="d-flex align-items-center justify-content-center" style="min-height: 300px;">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <pagination-model :currentPage="currentPage" :totalPages="totalPages" @goToPage="goToPage" />
</template>

<script>
import { ref, onMounted, computed, watch } from "vue";
import PaginationModel from "@/components/PaginationModel.vue";
import { fetchCars } from "../../utils/api.js";

export default {
  props: {
    searchParams: Object
  },
  components: {
    PaginationModel,
  },
  setup(props) {
    const carsInfo = ref([]);
    const hoveredCar = ref(null);
    const itemsPerPage = 12;
    const currentPage = ref(1);
    const imageLoaded = ref({});

    const loadCars = async () => {
      try {
        imageLoaded.value = {};
        const filters = {
          manufacturer: props.searchParams.manufacturer,
          year: props.searchParams.year,
          model: props.searchParams.model,
          fuel_type: props.searchParams.fuel_type,
        };
        carsInfo.value = await fetchCars(filters);
      } catch (error) {
        console.error('Error loading cars:', error);
      }
    };

    const generateCarImageUrl = (manufacturer, model, year) => {
      const url = new URL("https://cdn.imagin.studio/getimage");
      url.searchParams.append("customer", process.env.VUE_APP_PUBLIC_IMAGIN_API_KEY || "");
      url.searchParams.append("make", manufacturer);
      url.searchParams.append("modelFamily", model);
      url.searchParams.append("zoomType", "fullscreen");
      url.searchParams.append("modelYear", `${year}`);
      return `${url}`;
    };

    const formatName = (str) => {
      return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    const calculateCarRent = (city_mpg, year) => {
      const basePricePerDay = 50;
      const mileageFactor = 1.50;
      const ageFactor = 0.55;
      const mileageRate = city_mpg * mileageFactor;
      const ageRate = (year - new Date().getFullYear()) * ageFactor;
      const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
      return rentalRatePerDay.toFixed(0);
    };

    const carImageRef = (index) => `carImage-${index}`;

    const onImageLoad = (index) => {
      imageLoaded.value = { ...imageLoaded.value, [index]: true };
    };

    const paginatedCars = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return carsInfo.value.slice(startIndex, endIndex);
    });

    const totalPages = computed(() => Math.ceil(carsInfo.value.length / itemsPerPage));

    const goToPage = (page) => {
      currentPage.value = page;
    };

    onMounted(() => {
      loadCars();
    });

    watch(() => props.searchParams, () => {
      loadCars();
      goToPage(1);
    });

    return {
      carsInfo,
      hoveredCar,
      loadCars,
      generateCarImageUrl,
      formatName,
      calculateCarRent,
      imageLoaded,
      paginatedCars,
      currentPage,
      totalPages,
      goToPage,
      onImageLoad,
      carImageRef,
    };
  },
};
</script>

<style>
.brighten {
  filter: brightness(1.2);
}

a {
  text-decoration: none !important;
}
</style>