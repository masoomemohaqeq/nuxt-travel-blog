<template>
  <div class="alert alert-danger" role="alert">
    {{ text }}
  </div>
</template>

<script setup>
defineProps(["text"]);
</script>
