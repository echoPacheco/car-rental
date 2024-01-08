<!-- App.vue -->
<template>
  <div id="app">
    <header>
      <h1>{{ title }}</h1>
      <nav>
        <router-link to="/">CarHome</router-link>
        <router-link to="/BookingCar">BookingCar</router-link>
        <!-- Add more navigation links as needed -->
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Car Rental App',
    };
  },
};
</script>

<style>
/* Add global styles here */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #3498db;
  color: #fff;
  padding: 1em;
}

nav {
  display: flex;
  gap: 1em;
}

main {
  padding: 1em;
}
</style>
