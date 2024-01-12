<template>
  <container>
    <img src="../assets/home_screen.jpg" class="home-img">
    <div class="home-content">
      Drive in style with our premium car rentals, where luxury meets the open road.
      <router-link to="/cars" type="button" class="btn btn-outline-light mt-4" style="width: 30%;">Book</router-link>
    </div>
  </container>

  <container class="container">
    <div id="popularCars" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#popularCars" data-bs-slide-to="0" class="active" aria-current="true"
          aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#popularCars" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#popularCars" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/popular2.jpg" class="carousel-img" alt="...">
          <div class="carousel-content">
            <h1>{{ this.popularCars[0].name }}</h1>
            <p>{{ this.popularCars[0].type + " " + this.popularCars[0].price }}</p>
            <router-link to="/cars" type="button" class="btn btn-outline-light mt-4"
              style="width: 30%;">Book</router-link>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/range_rover.jpg" class="carousel-img" alt="...">
          <div class="carousel-content">
            <h1>{{ this.popularCars[1].name }}</h1>
            <p>{{ this.popularCars[1].type + " " + this.popularCars[1].price }}</p>
            <router-link to="/cars" type="button" class="btn btn-outline-light mt-4"
              style="width: 30%;">Book</router-link>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/popular3.jpg" class="carousel-img" alt="...">
          <div class="carousel-content">
            <h1>{{ this.popularCars[2].name }}</h1>
            <p>{{ this.popularCars[2].type + " " + this.popularCars[2].price }}</p>
            <router-link to="/cars" type="button" class="btn btn-outline-light mt-4"
              style="width: 30%;">Book</router-link>
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
  </container>
</template>
  
<script>
export default {
  data() {
    return {
      popularCars: [
        {
          name: "Audi 6",
          type: "Hatchback",
          price: "90,00",
          img: "../assets/popular2.jpg"
        },
        {
          name: "Range Rover",
          type: "Hatchback",
          price: "80,00",
          img: "../assets/popular2.jpg"
        },
        {
          name: "C 63 S Coupe",
          type: "Sedan",
          price: "120,00",
          img: "../assets/popular2.jpg"
        }
      ],
    };
  },
  methods: {

  },
};

</script>
  
<style scoped>

container {
  margin-bottom: 5px;
}
.colors {
  color: black;
  background-color: black;
}

.home-img {
  width: 100%;
  max-height: 70vh;
  object-fit: cover;
  filter: brightness(40%);
}

.home-content {
  display: flex;
  flex-direction: column;
  font-size: 28pt;
  text-align: center;
  align-items: center;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
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
}

.carousel-content {
  width: 40%;
  padding: 20px;
  background-color: #222529;
}

.btn-info {
  background-color: #17a2b8;
  border: none;
}
</style>
  