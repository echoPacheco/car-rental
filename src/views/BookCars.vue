<template>
    <CarCard :searchParams="searchParams" />
</template>
<script>
import CarCard from '@/components/CarCard.vue';

export default {
  components: { CarCard },



  data() {
    return {
      headersList: {
        "X-RapidAPI-Key": "06d7fdc0e9mshe9f97a1386a3867p149972jsnff19005f5513",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com"
      },
      searchParams: {
          "manufacturer": "audi",
          "year": 2020,
          "model": "",
          "fuel_type": "",
      },
    };
  },
  methods: {

  },
  //   mounted() {
  //     axios
  //       .get('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
  //         headers: {
  //           'X-RapidAPI-Key': '06d7fdc0e9mshe9f97a1386a3867p149972jsnff19005f5513',
  //           'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  //         },
  //         params: {
  //           model: 'corolla'
  //         }
  //       })
  //       .then((response) => console.log(response))
  //       .catch((error) => console.error(error));
  //   }
}


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
  