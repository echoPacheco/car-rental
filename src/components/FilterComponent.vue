<template>
    <div>
        <div>Make: </div>
        <select v-model="make">
            <option disabled value="">Please select one</option>
            <option v-for="(make, index) in manufacturers" :key="index">{{ make }}</option>
        </select>

        <div>Car: </div>
        <input v-model="model" placeholder="Corolla" />

        <div>Year: </div>
        <select v-model="year">
            <option disabled value="">Please select one</option>
            <option v-for="(year, index) in years" :key="index">{{ year }}</option>
        </select>

        <div>Fuel: </div>

        <input type="radio" id="one" value="gasoline" v-model="fuel_type" />
        <label for="one">Gasoline</label>

        <input type="radio" id="two" value="electric" v-model="fuel_type" />
        <label for="two">Electric</label>

        <input type="radio" id="three" value="diesel" v-model="fuel_type" />
        <label for="three">Diesel</label>

        <button class="btn btn-outline-light me-2" @click="applyFilters()">Search</button>
        <button class="btn btn-outline-light me-2" @click="reset()">Clear</button>

    </div>
</template>
  
<script>

export default {
    data() {
        return {
            make: "audi",
            model: "",
            year: "2020",
            fuel_type: "",
            manufacturers: [
                "Acura",
                "Alfa Romeo",
                "Aston Martin",
                "Audi",
                "Bentley",
                "BMW",
                "Buick",
                "Cadillac",
                "Chevrolet",
                "Chrysler",
                "Citroen",
                "Dodge",
                "Ferrari",
                "Fiat",
                "Ford",
                "GMC",
                "Honda",
                "Hyundai",
                "Infiniti",
                "Jaguar",
                "Jeep",
                "Kia",
                "Lamborghini",
                "Land Rover",
                "Lexus",
                "Lincoln",
                "Maserati",
                "Mazda",
                "McLaren",
                "Mercedes-Benz",
                "MINI",
                "Mitsubishi",
                "Nissan",
                "Porsche",
                "Ram",
                "Rolls-Royce",
                "Subaru",
                "Tesla",
                "Toyota",
                "Volkswagen",
                "Volvo",
            ],
            years: [
                2010,
                2011,
                2012,
                2013,
                2014,
                2015,
                2016,
                2017,
                2018,
                2019,
                2020,
                2021,
                2022,
                2023,
            ]
        };
    },

    methods: {
        applyFilters() {
            this.$emit("applyFilters", {
                manufacturer: this.make,
                model: this.model,
                year: this.year,
                fuel_type: this.fuel_type,
            });
        },
        reset() {
            // Reset the filters and emit an event to notify the parent component
            this.searchParams = {
                manufacturer: "",
                year: "",
                model: "",
                fuel_type: "",
            };
            this.$emit("applyFilters", { ...this.searchParams });
        },
    },
};
</script>
  
<style>
.brighten {
    filter: brightness(1.2);
}

.pagination {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.pagination button {
    margin: 0 5px;
    cursor: pointer;
}
</style>
  