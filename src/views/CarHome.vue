<template>
  <section style="margin-bottom: 15px;">
    <img src="@/assets/home_screen.jpg" class="home-img">
    <div class="home-content">
      Drive in style with our premium car rentals, where luxury meets the open road.
      <router-link to="/cars" type="button" class="btn btn-outline-light mt-4" style="width: 30%;">Book</router-link>
    </div>
  </section>

  <section class="box">
    <PopularCars :popularCars="popularCars"/>
  </section>

  <section class="box">
    <div class="company">
      <div class="company-img-container">
        <img src="@/assets/company.jpg" class="company-img">
      </div>
      <div class="company-info">
        <h1 style="padding: 10px; margin-left: 10px;">Why choose us?</h1>
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
import PopularCars from '@/components/PopularCars.vue';

export default {
  components: { PopularCars },

  data() {
    return {
      popularCars: [
        {
          name: "Audi A6",
          price: "90,00",
          gas: "12",
          doors: 4,
          seats: 5,
          transmission: "Automatic",
          img: "popular2.jpg"
        },
        {
          name: "Range Rover",
          price: "80,00",
          gas: "10",
          doors: 4,
          seats: 5,
          transmission: "Automatic",
          img: "range_rover.jpg"
        },
        {
          name: "C 63 S Coupe",
          price: "120,00",
          gas: "14",
          doors: 4,
          seats: 5,
          transmission: "Automatic",
          img: "popular3.jpg"
        }
      ],
    };
  },
  methods: {},
};

</script>
  
<style scoped>
@import "@/styles/CarHome.css";
</style>