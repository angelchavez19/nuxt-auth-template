<script setup lang="ts">
const theme = ref<"light" | "dark">("light");

const handleToogle = () => {
  theme.value = theme.value === "light" ? "dark" : "light";

  document.body.setAttribute("data-theme", theme.value);
};
</script>

<template>
  <button @click="handleToogle">Estado: {{ theme }}</button>
</template>

<style scoped lang="sass"></style>
