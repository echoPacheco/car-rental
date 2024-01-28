// import axios from "axios";

// const infoCarsBaseURL = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars";

export async function fetchCars(filters) {
  if (filters) console.log(filters);

  let cars = [{
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

  return cars
  // const { manufacturer, year, model, fuel_type } = filters;

  // const headers = {
  //   "X-RapidAPI-Key": process.env.VUE_APP_RAPID_API_KEY || "",
  //   "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  // };
  // try {
  //   const response = await axios.get(`${infoCarsBaseURL}`, {
  //     params: {
  //       make: manufacturer,
  //       year: year,
  //       model: model,
  //       fuel_type: fuel_type,
  //       limit: 30,
  //     },
  //     headers: headers,
  //   });
  //   return response.data;
  // } catch (error) {
  //   console.error("Error fetching cars:", error);
  //   throw error;
  // }
}

export const generateCarImageUrl = (manufacturer, model, year) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  url.searchParams.append(
    "customer",
    process.env.VUE_APP_PUBLIC_IMAGIN_API_KEY || ""
  );
  url.searchParams.append("make", manufacturer);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  // url.searchParams.append('angle', `${angle}`);

  return `${url}`;
};
