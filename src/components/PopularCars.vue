<template>
  <div id="popularCars" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#popularCars" data-bs-slide-to="0" class="active" aria-current="true"
        aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#popularCars" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#popularCars" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="require('@/assets/' + popularCars[0].img)" class="carousel-img" alt="...">
        <div class="carousel-content">
          <h5 class="card-title fs-1">{{ this.popularCars[0].name }}</h5>
          <p class="flex mt-6 fs-4">
            <span class="self-start fs-6 ">$</span> {{ this.popularCars[0].price }}
            <span class="self-end fs-6 fw-medium">/day</span>
          </p>

          <div class="carousel-icons-container">
            <div class="icon-text-container">
              <img src="@/assets/gas_pump_light.png" class="carousel-icons">

              <p>{{ this.popularCars[0].gas }}</p>
            </div>

            <div class="icon-text-container">
              <img src="@/assets/car_door.svg" class="carousel-icons">
              <p>{{ this.popularCars[0].doors }}</p>
            </div>

            <div class="icon-text-container">
              <img src="@/assets/car_seat_light.png" class="carousel-icons">
              <p>{{ this.popularCars[0].seats }}</p>
            </div>

            <div class="icon-text-container">
              <img src="@/assets/steering-wheel.svg" class="carousel-icons">
              <p>{{ this.popularCars[0].transmission }}</p>
            </div>
          </div>

          <router-link to="/cars" type="button" class="btn btn-outline-light mt-4" style="width: 30%;">Book</router-link>
        </div>
      </div>
      <div class="carousel-item">
        <img :src="require('@/assets/' + popularCars[1].img)" class="carousel-img" alt="...">
        <div class="carousel-content">
          <h5 class="card-title fs-1">{{ this.popularCars[1].name }}</h5>
          <p class="flex mt-6 fs-4">
            <span class="self-start fs-6 ">$</span> {{ this.popularCars[1].price }}
            <span class="self-end fs-6 fw-medium">/day</span>
          </p>
          <div class="carousel-icons-container">
            <div class="icon-text-container">
              <img src="@/assets/gas_pump_light.png" class="carousel-icons">

              <p>{{ this.popularCars[1].gas }}</p>
            </div>

            <div class="icon-text-container">
              <img src="@/assets/car_door.svg" class="carousel-icons">
              <p>{{ this.popularCars[1].doors }}</p>
            </div>

            <div class="icon-text-container">
              <img src="@/assets/car_seat_light.png" class="carousel-icons">
              <p>{{ this.popularCars[1].seats }}</p>
            </div>

            <div class="icon-text-container">
              <img src="@/assets/steering-wheel.svg" class="carousel-icons">
              <p>{{ this.popularCars[1].transmission }}</p>
            </div>
          </div>

          <router-link to="/cars" type="button" class="btn btn-outline-light mt-4" style="width: 30%;">Book</router-link>
        </div>
      </div>
      <div class="carousel-item">
        <img :src="require('@/assets/' + popularCars[2].img)" class="carousel-img" alt="...">
        <div class="carousel-content">
          <h5 class="card-title fs-1">{{ this.popularCars[2].name }}</h5>
          <p class="flex mt-6 fs-4">
            <span class="self-start fs-6 ">$</span> {{ this.popularCars[2].price }}
            <span class="self-end fs-6 fw-medium">/day</span>
          </p>
          <div class="carousel-icons-container">
            <div class="icon-text-container">
              <img src="@/assets/gas_pump_light.png" class="carousel-icons">

              <p>{{ this.popularCars[2].gas }}</p>
            </div>

            <div class="icon-text-container">
              <img src="@/assets/car_door.svg" class="carousel-icons">
              <p>{{ this.popularCars[2].doors }}</p>
            </div>

            <div class="icon-text-container">
              <img src="@/assets/car_seat_light.png" class="carousel-icons">
              <p>{{ this.popularCars[2].seats }}</p>
            </div>

            <div class="icon-text-container">
              <img src="@/assets/steering-wheel.svg" class="carousel-icons">
              <p>{{ this.popularCars[2].transmission }}</p>
            </div>
          </div>

          <router-link to="/cars" type="button" class="btn btn-outline-light mt-4" style="width: 30%;">Book</router-link>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#popularCars" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#popularCars" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>

export default {
  props: {
    popularCars: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {

    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin: 0px;
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: flex;
}

.carousel-img {
  width: 60vw;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
}

.carousel-content {
  width: 40%;
  padding: 20px;
  background-color: #222529;
}

.icon-text-container {
  display: flex;
  align-items: center;
  /* Centralizar verticalmente */
  margin-top: 3%;
}

.carousel-icons {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
</style>
