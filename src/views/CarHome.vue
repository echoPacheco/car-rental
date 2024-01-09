<template>
  <div>
    <h1>Welcome to our Car Rental Service</h1>
    <p>Explore our fleet and find the perfect car for your journey.</p>
    <router-link to="/cars" class="btn btn-primary">View Cars</router-link>
  </div>

  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active d-flex justify-content-between align-items-center">
        <img src="../assets/car_road.jpg" class="carousel-img" alt="Car 1">
        <div class="text-buttons">
          <h1>Car Title 1</h1>
          <p>Description for Car 1</p>
          <button class="btn btn-info">Learn More</button>
        </div>
      </div>
      <div class="carousel-item d-flex justify-content-between align-items-center">
        <img src="../assets/range_rover.jpg" class="carousel-img" alt="Car 2">
        <div class="text-buttons">
          <h1>Car Title 2</h1>
          <p>Description for Car 2</p>
          <button class="btn btn-info">Learn More</button>
        </div>
      </div>
      <div class="carousel-item d-flex justify-content-between align-items-center">
        <img src="../assets/relampago-mcqueen.png" class="carousel-img" alt="Car 3">
        <div class="text-buttons">
          <h1>Car Title 3</h1>
          <p>Description for Car 3</p>
          <button class="btn btn-info">Learn More</button>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon colors" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon colors" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      cars: [],
    };
  },
  methods: {

  },
};

</script>
  
<style scoped>
.colors {
  color: black;
  background-color: black;
}

h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

p {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.carousel {
  display: flex;
  flex-direction: row;
}

.carousel-img {
  width: 60vw;
  height: 400px;
}

.text-buttons {
  width: 40%;
  /* Adjust as needed */
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  /* Semi-transparent white background */
}

.text-buttons h1 {
  font-size: 1.5em;
}

.text-buttons p {
  font-size: 1em;
  margin-bottom: 20px;
}

.btn-info {
  background-color: #17a2b8;
  /* Bootstrap's default info color */
  color: #fff;
  border: none;
}
</style>
  