<template>
  <div class="pagination">
    <button class="btn btn-outline-light me-2" @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
    <span class="me-2">Page {{ currentPage }} of {{ totalPages }}</span>
    <button class="btn btn-outline-light me-2" @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    totalPages: Number,
  },
  methods: {
    goToPage(page) {
      this.$emit('goToPage', page);
    },
  },
};
</script>

<style scoped>
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row; /* Adicionado para ajustar a direção da flexbox */
}

.pagination button {
  margin: 0;
  cursor: pointer;
  margin-top: 4px; /* Ajuste a margem superior conforme necessário */
}
</style>
