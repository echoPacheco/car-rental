<template>
  <section style="margin-bottom: 15px;">
    <img src="@/assets/home_screen.jpg" class="home-img">
    <div class="home-content">
      Drive in style with our premium car rentals, where luxury meets the open road.
      <router-link to="/cars" type="button" class="btn btn-outline-light mt-4" style="width: 30%;">Book</router-link>
    </div>
  </section>

  <section class="box">
    <div id="popularCars" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#popularCars" data-bs-slide-to="0" class="active" aria-current="true"
          aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#popularCars" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#popularCars" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/popular2.jpg" class="carousel-img" alt="...">
          <div class="carousel-content">
            <h1>{{ this.popularCars[0].name }}</h1>
            <p>{{ this.popularCars[0].type + " " + this.popularCars[0].price }}</p>
            <router-link to="/cars" type="button" class="btn btn-outline-light mt-4"
              style="width: 30%;">Book</router-link>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/range_rover.jpg" class="carousel-img" alt="...">
          <div class="carousel-content">
            <h1>{{ this.popularCars[1].name }}</h1>
            <p>{{ this.popularCars[1].type + " " + this.popularCars[1].price }}</p>
            <router-link to="/cars" type="button" class="btn btn-outline-light mt-4"
              style="width: 30%;">Book</router-link>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/popular3.jpg" class="carousel-img" alt="...">
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
  </section>

  <section class="box">
    <div class="company">
      <div class="company-img-container">
        <img src="@/assets/company.jpg" class="company-img">
      </div>
      <div class="company-info">
        <h1 style="padding: 10px;">Why choose us?</h1>
        <div class="company-txt-columns">
          <div class="company-column">
            <div class="company-txt">
              <h4><strong>Diverse Fleet of Vehicles</strong></h4>
              Whether you're cruising solo, traveling with family, or planning a group adventure, we've got the perfect
              vehicle for you. Our diverse fleet includes sleek sedans, spacious SUVs, and even fuel-efficient hybrids,
              ensuring you find the ideal ride for every occasion.
            </div>
            <div class="company-txt">
              <h4><strong>Easy Booking Process</strong></h4>
              Say goodbye to complicated booking procedures! Our user-friendly online platform lets you reserve your dream
              car
              in just a few clicks. Need assistance? Our dedicated customer support team is always ready to help, ensuring
              a
              smooth booking experience from start to finish.
            </div>
          </div>
          <div class="company-column">
            <div class="company-txt">
              <h4><strong>Transparent Pricing</strong></h4>
              No hidden fees, no surprises – just transparent pricing. We believe in providing our customers with clear
              and
              competitive rates, so you can plan your journey without any budgetary concerns. What you see is what you
              pay!
            </div>
            <div class="company-txt">
              <h4><strong>Convenient Pickup and Drop-off</strong></h4>
              Your convenience is our priority. Choose from multiple pickup and drop-off locations to suit your schedule.
              Whether it's at the airport, your hotel, or any other specified location, we make it easy for you to start
              and
              end your rental with ease.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
          img: "@/assets/popular2.jpg"
        },
        {
          name: "Range Rover",
          type: "Hatchback",
          price: "80,00",
          img: "@/assets/popular2.jpg"
        },
        {
          name: "C 63 S Coupe",
          type: "Sedan",
          price: "120,00",
          img: "@/assets/popular2.jpg"
        }
      ],
    };
  },
  methods: {

  },
};

</script>
  
<style scoped>
@import "@/styles/CarHome.css";
</style>