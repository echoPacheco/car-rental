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
          "manufacturer": "tesla",
          "year": 2020,
          "model": "",
          "fuel_type": "",
      },
      carsInfo: [{
        "city_mpg": 13,
        "class": "two seater",
        "combination_mpg": 16,
        "cylinders": 10,
        "displacement": 5.2,
        "drive": "awd",
        "fuel_type": "gas",
        "highway_mpg": 20,
        "make": "audi",
        "model": "r8 awd",
        "transmission": "a",
        "year": 2010
      },
      {
        "city_mpg": 13,
        "class": "two seater",
        "combination_mpg": 16,
        "cylinders": 10,
        "displacement": 5.2,
        "drive": "awd",
        "fuel_type": "gas",
        "highway_mpg": 20,
        "make": "audi",
        "model": "r8 spyder awd",
        "transmission": "a",
        "year": 2015
      },
      {
        "city_mpg": 23,
        "class": "two seater",
        "combination_mpg": 26,
        "cylinders": 4,
        "displacement": 2.0,
        "drive": "awd",
        "fuel_type": "gas",
        "highway_mpg": 31,
        "make": "audi",
        "model": "tt roadster quattro",
        "transmission": "a",
        "year": 2020
      },{
        "city_mpg": 13,
        "class": "two seater",
        "combination_mpg": 16,
        "cylinders": 10,
        "displacement": 5.2,
        "drive": "awd",
        "fuel_type": "gas",
        "highway_mpg": 20,
        "make": "audi",
        "model": "r8 awd",
        "transmission": "a",
        "year": 2020
      },
      {
        "city_mpg": 13,
        "class": "two seater",
        "combination_mpg": 16,
        "cylinders": 10,
        "displacement": 5.2,
        "drive": "awd",
        "fuel_type": "gas",
        "highway_mpg": 20,
        "make": "audi",
        "model": "r8 spyder awd",
        "transmission": "a",
        "year": 2020
      },
      {
        "city_mpg": 23,
        "class": "two seater",
        "combination_mpg": 26,
        "cylinders": 4,
        "displacement": 2.0,
        "drive": "awd",
        "fuel_type": "gas",
        "highway_mpg": 31,
        "make": "audi",
        "model": "tt roadster quattro",
        "transmission": "a",
        "year": 2020
      },{
        "city_mpg": 13,
        "class": "two seater",
        "combination_mpg": 16,
        "cylinders": 10,
        "displacement": 5.2,
        "drive": "awd",
        "fuel_type": "gas",
        "highway_mpg": 20,
        "make": "audi",
        "model": "r8 awd",
        "transmission": "a",
        "year": 2020
      },
      {
        "city_mpg": 13,
        "class": "two seater",
        "combination_mpg": 16,
        "cylinders": 10,
        "displacement": 5.2,
        "drive": "awd",
        "fuel_type": "gas",
        "highway_mpg": 20,
        "make": "audi",
        "model": "r8 spyder awd",
        "transmission": "a",
        "year": 2020
      },
      {
        "city_mpg": 23,
        "class": "two seater",
        "combination_mpg": 26,
        "cylinders": 4,
        "displacement": 2.0,
        "drive": "awd",
        "fuel_type": "gas",
        "highway_mpg": 31,
        "make": "audi",
        "model": "tt roadster quattro",
        "transmission": "a",
        "year": 2020
      },{
        "city_mpg": 13,
        "class": "two seater",
        "combination_mpg": 16,
        "cylinders": 10,
        "displacement": 5.2,
        "drive": "awd",
        "fuel_type": "gas",
        "highway_mpg": 20,
        "make": "audi",
        "model": "r8 awd",
        "transmission": "a",
        "year": 2020
      },
      {
        "city_mpg": 13,
        "class": "two seater",
        "combination_mpg": 16,
        "cylinders": 10,
        "displacement": 5.2,
        "drive": "awd",
        "fuel_type": "gas",
        "highway_mpg": 20,
        "make": "audi",
        "model": "r8 spyder awd",
        "transmission": "a",
        "year": 2020
      },
      {
        "city_mpg": 23,
        "class": "two seater",
        "combination_mpg": 26,
        "cylinders": 4,
        "displacement": 2.0,
        "drive": "awd",
        "fuel_type": "gas",
        "highway_mpg": 31,
        "make": "audi",
        "model": "tt roadster quattro",
        "transmission": "a",
        "year": 2020
      },{
        "city_mpg": 13,
        "class": "two seater",
        "combination_mpg": 16,
        "cylinders": 10,
        "displacement": 5.2,
        "drive": "awd",
        "fuel_type": "gas",
        "highway_mpg": 20,
        "make": "audi",
        "model": "r8 awd",
        "transmission": "a",
        "year": 2020
      },
      {
        "city_mpg": 13,
        "class": "two seater",
        "combination_mpg": 16,
        "cylinders": 10,
        "displacement": 5.2,
        "drive": "awd",
        "fuel_type": "gas",
        "highway_mpg": 20,
        "make": "audi",
        "model": "r8 spyder awd",
        "transmission": "a",
        "year": 2020
      },
      {
        "city_mpg": 23,
        "class": "two seater",
        "combination_mpg": 26,
        "cylinders": 4,
        "displacement": 2.0,
        "drive": "awd",
        "fuel_type": "gas",
        "highway_mpg": 31,
        "make": "audi",
        "model": "tt roadster quattro",
        "transmission": "a",
        "year": 2020
      },]
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
  