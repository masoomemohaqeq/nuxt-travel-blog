<template>
  <div
    class="d-flex bg-primary justify-content-center align-items-center vh-100 flex-column gap-4"
  >
    <h1>Ooops....</h1>
    <div class="text-center">
      <h1 class="text-danger">{{ error.statusCode }}</h1>
      <p>{{ error.message }}</p>
    </div>
    <button class="btn btn-secondary" @click="handleError">Go back home</button>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>
