<template>
  <div class="car-container">
    <div class="car-content car-content-text">
      {{ formatName(carData.make) + " " + formatName(carData.model) }}
      <img :src="carImage" />
    </div>
    <div class="car-infos">
      <div class="info-column">
        <div class="row">
          <div>
            <strong>Make</strong>: {{ carData.make }}
          </div>
          <div>
            <strong>Model</strong>: {{ carData.model }}
          </div>
          <div>
            <strong>Year</strong>: {{ carData.year }}
          </div>
          <div>
            <strong>Class</strong>: {{ formatName(carData.class) }}
          </div>
          <div>
            <strong>Transmission</strong>: {{ carData.transmission === 'a' ? "Automatic" : "Manual" }}
          </div>
          <div>
            <strong>Fuel Type</strong>: {{ formatFuel(carData.fuel_type) }}

          </div>
        </div>
      </div>
      <div class="info-column">
        <div class="row">
          <div>
            <strong>Drive</strong>: {{ carData.drive.toUpperCase() }}
          </div>
          <div>
            <strong>City MPG</strong>: {{ carData.city_mpg }}
          </div>
          <div>
            <strong>Highway MPG</strong>: {{ carData.highway_mpg }}
          </div>
          <div>
            <strong>Combination MPG</strong>: {{ carData.combination_mpg }}
          </div>
          <div>
            <strong>Cylinders</strong>: {{ carData.cylinders }}
          </div>
          <div>
            <strong>Displacement</strong>: {{ carData.displacement }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    carData: Object,
    carImage: String,
  },
  setup() {
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
    return {
      formatName,
      formatFuel,
    }
  },
  methods: {
  },
};
</script>

<style scoped>
.car-container {
  display: flex;
  justify-content: center;
  border-radius: 25px;
  background: #222529;
  padding: 20px;
  width: 100%;
}

.car-content img {
  max-height: 250px;
  max-width: fit-content;
  object-fit: cover;
}

.car-content-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 30px;
  font-weight: bold;
  padding: 20px;
}

.car-infos {
  text-align: start;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}

.info-column {
  padding: 20px;
}

.row {
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
}

.row div {
  margin-bottom: 5px;
}

.car-info {
  text-align: start;
}
</style>