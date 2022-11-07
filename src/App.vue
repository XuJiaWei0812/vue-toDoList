<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
const isLoading = ref(true);
const fullPage = ref(false);
setTimeout(() => {
  isLoading.value = false;
}, 1000);
</script>

<template>
  <loading :active="isLoading" opacity="1" background-color="#89B5AF"></loading>
  <RouterView v-if="!isLoading" />
</template>

<style scoped></style>
