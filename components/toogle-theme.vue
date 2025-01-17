<script setup lang="ts">
const theme = ref<"dark" | "light">("light");

const handleToogle = () => {
  theme.value = theme.value === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", theme.value);
};
</script>

<template>
  <button @click="handleToogle">X</button>
</template>

<style scoped lang="sass">
button
    position: fixed
    bottom: 0
    right: 0
</style>
