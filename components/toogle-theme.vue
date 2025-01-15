<script setup lang="ts">
const theme = ref<"light" | "dark">("light");

const handleToogle = () => {
  theme.value = theme.value === "light" ? "dark" : "light";

  document.body.setAttribute("data-theme", theme.value);
};
</script>

<template>
  <button @click="handleToogle">Toogle</button>
</template>

<style scoped lang="sass">
button
  position: fixed
  bottom: 0
  left: 0
</style>
