<template>
    <div>
      <h1>Welcome to our Car Rental Service</h1>
      <p>Explore our fleet and find the perfect car for your journey.</p>
  
      <router-link to="/cars" class="btn btn-primary">View Cars</router-link>
    </div>

    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/download.jpg" class="d-block w-100" alt="../assets/maxresdefault.jpg">
    </div>
    <div class="carousel-item">
      <img src="../assets/maxresdefault.jpg" class="d-block w-100" alt="../assets/relampago-mcqueen.png">
    </div>
    <div class="carousel-item">
      <img src="../assets/relampago-mcqueen.png" class="d-block w-100" alt="../assets/download.jpg">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
  </template>
  
  <script>
  export default {
    // You can add component-specific options here

    
  };

  
  </script>
  
  <style scoped>
  /* Add component-specific styles here */
  h1 {
    font-size: 2em;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
  </style>
  