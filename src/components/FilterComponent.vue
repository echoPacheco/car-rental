<template>
  <div>
    <form class="form-inline" @submit.prevent="applyFilters">
      <div class="form-group mr-3">
        <label for="make" class="mr-2">Make:</label>
        <select v-model="make" class="form-control text-white bg-dark">
          <option value="">Please select one</option>
          <option v-for="(make, index) in manufacturers" :key="index">
            {{ make }}
          </option>
        </select>
      </div>

      <div class="form-group mr-3">
        <label for="model" class="mr-2">Model:</label>
        <input v-model="model" class="form-control form-control-sm text-white bg-dark placeholder-input" type="text"
          placeholder="Type your model here" />
      </div>

      <div class="form-group mr-3">
        <label for="year" class="mr-2">Year:</label>
        <div class="mb-3" style="display: flex; align-items: center">
          <input v-model="year" type="range" class="form-range p-3" min="2010" max="2023" />
          <span class="text-white bg-dark input-group-text">{{ year }}</span>
        </div>
      </div>

      <div class="form-group">
        <label for="fuelType" class="mr-2">Fuel Type:</label>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="gas"
            v-model="fuel_type" />
          <label class="form-check-label" for="flexRadioDefault1">Gasoline</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="electricity"
            v-model="fuel_type" />
          <label class="form-check-label" for="flexRadioDefault2">Electricity</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="diesel"
            v-model="fuel_type" />
          <label class="form-check-label" for="flexRadioDefault2">Diesel</label>
        </div>
      </div>
    </form>

    <button class="btn btn-outline-light me-2" @click="applyFilters()">
      Search
    </button>
    <button class="btn btn-outline-light me-2" @click="reset()">Clear</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      make: "",
      model: "",
      year: "2023",
      fuel_type: "",
      manufacturers: [
        "Acura",
        "Alfa Romeo",
        "Aston Martin",
        "Audi",
        "Bentley",
        "BMW",
        "Buick",
        "Cadillac",
        "Chevrolet",
        "Chrysler",
        "Citroen",
        "Dodge",
        "Ferrari",
        "Fiat",
        "Ford",
        "GMC",
        "Honda",
        "Hyundai",
        "Infiniti",
        "Jaguar",
        "Jeep",
        "Kia",
        "Lamborghini",
        "Land Rover",
        "Lexus",
        "Lincoln",
        "Maserati",
        "Mazda",
        "McLaren",
        "Mercedes-Benz",
        "MINI",
        "Mitsubishi",
        "Nissan",
        "Porsche",
        "Ram",
        "Rolls-Royce",
        "Subaru",
        "Tesla",
        "Toyota",
        "Volkswagen",
        "Volvo",
      ],
      years: [
        2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
        2022, 2023,
      ],
      prevSearchParams: null,
    };
  },

  methods: {
    applyFilters() {
      const currentSearchParams = {
        manufacturer: this.make,
        model: this.model,
        year: this.year,
        fuel_type: this.fuel_type,
      };

      if (!this.areSearchParamsEqual(currentSearchParams, this.prevSearchParams)) {
        this.$emit("applyFilters", { ...currentSearchParams });
      }

      this.prevSearchParams = { ...currentSearchParams };
    },

    areSearchParamsEqual(params1, params2) {
      if (!params1 || !params2) {
        return false;
      }

      const keys = Object.keys(params1);
      for (const key of keys) {
        if (params1[key] !== params2[key]) {
          return false;
        }
      }

      return true;
    },

    reset() {
      if (
        this.make === "" &&
        this.model === "" &&
        this.year === "2023" &&
        this.fuel_type === ""
      ) {
        return;
      }

      this.make = "";
      this.model = "";
      this.year = "2023";
      this.fuel_type = "";
      this.$emit("applyFilters", {
        manufacturer: "",
        model: "",
        year: "2023",
        fuel_type: "",
      });
    }
  },
};
</script>

<style scoped>
.placeholder-input::placeholder {
  color: gray;
}
</style>
