<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  IndexPage
  <NuxtLink :to="localePath('/auth/account/register')">Register</NuxtLink>
</template>

<style scoped lang="sass"></style>
