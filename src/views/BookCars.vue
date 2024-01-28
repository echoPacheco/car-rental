<template>
  <div class="row mt-4">
    <div class="col-md-1">
    </div>
    <div class="col-md-3 card text-white bg-dark ">
      <FilterComponent v-model="searchParams" @applyFilters="applyFilters" />
    </div>

    <div class="col-md-7">
      <div class="ms-4 me-4">
        <CarCard :searchParams="searchParams" />
      </div>
    </div>
    <div class="col-md-1">
    </div>
  </div>
</template>

<script>
import CarCard from "@/components/CarCard.vue";
import FilterComponent from "@/components/FilterComponent.vue";

export default {
  components: {
    CarCard,
    FilterComponent,
  },

  data() {
    return {
      searchParams: {
        manufacturer: "audi",
        year: 2023,
        model: "",
        fuel_type: "",
      },
    };
  },

  methods: {
    applyFilters(searchParams) {
      this.searchParams = { ...searchParams };
    },
  },
};
</script>

<style scoped>
/* Se necessário, adicione estilos específicos para este componente aqui */
</style>