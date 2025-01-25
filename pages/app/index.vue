<script setup lang="ts">
const authStore = useAuthStore();
</script>

<template>
  <NuxtLayout name="authorization">
    App
    <Logout />

    <NuxtLink :to="$localePath('/app/profile/settings')">User settings</NuxtLink>

    <code>{{ authStore.user }}</code>

    <NuxtLink :to="$localePath('/admin')">Admin Dashboard</NuxtLink>
  </NuxtLayout>
</template>

<style scoped lang="sass"></style>
