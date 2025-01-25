<script setup lang="ts">
const authStore = useAuthStore();
</script>

<template>
  <NuxtLink :to="$localePath('/app')">App</NuxtLink>
  <NuxtLayout name="authorization" :roles="['ADMIN']">
    <code>{{ authStore.user }}</code>
  </NuxtLayout>
</template>

<style scoped lang="sass"></style>
