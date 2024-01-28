<template>
  <div v-if="carsInfo" class="row row-cols-1 row-cols-md-6 g-2 ms-2">
    <div v-for="car in carsInfo" :key="car.make + '-' + car.model + '-' + car.year" class="col">
      <div class="card text-white bg-dark mb-3 mt-3 p-3">
        <h5 class="card-title fs-4" style="max-width: 200px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;" :title="formatName(car.make) + ' ' + formatName(car.model)">
          {{ formatName(car.make) }} {{ formatName(car.model) }}
        </h5>
        <p class="flex mt-6 fs-4">
          <span class="self-start fs-6 ">$</span> {{ calculateCarRent(car.city_mpg, car.year) }}
          <span class="self-end fs-6 fw-medium">/day</span>
        </p>

        <img :src="generateCarImageUrl(car.make, car.model, car.year)" class="card-img-top">
        <div class="card-body d-flex justify-content-between">
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
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { fetchCars } from '..\\utils\\api.js'

export default {
  props: {
    searchParams: Object
  },
  setup(props) {
    const carsInfo = ref([]);

    const loadCars = async () => {
      try {
        const filters = {
          manufacturer: props.searchParams.manufacturer,
          year: props.searchParams.year,
          model: props.searchParams.model,
          fuel_type: props.searchParams.fuel_type,
        };
        carsInfo.value = await fetchCars(filters);
        console.log(carsInfo.value);
      } catch (error) {
        console.error('Error loading cars:', error);
      }
    };

    const generateCarImageUrl = (manufacturer, model, year) => {
      const url = new URL("https://cdn.imagin.studio/getimage");

      url.searchParams.append(
        "customer",
        process.env.VUE_APP_PUBLIC_IMAGIN_API_KEY || ""
      );
      url.searchParams.append("make", manufacturer);
      url.searchParams.append("modelFamily", model);
      url.searchParams.append("zoomType", "fullscreen");
      url.searchParams.append("modelYear", `${year}`);
      // url.searchParams.append('angle', `${angle}`);

      return `${url}`;
    };

    onMounted(() => {
      loadCars();
    });

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

    return {
      carsInfo,
      loadCars,
      generateCarImageUrl,
      formatName,
      calculateCarRent,
    };
  },
};
</script>