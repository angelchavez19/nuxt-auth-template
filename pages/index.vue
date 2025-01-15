<script setup lang="ts">
useHead({ title: "Nuxt Auth Template" });
</script>

<template>
  Index Page
  <NuxtLink :to="{ name: 'auth-login' }">Login</NuxtLink>
  <NuxtLink :to="{ name: 'auth-register' }">Register</NuxtLink>
</template>

<style scoped lang="sass"></style>
