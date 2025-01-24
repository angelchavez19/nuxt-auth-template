<script setup lang="ts">
const localePath = useLocalePath();

const authStore = useAuthStore();
</script>

<template>
  <NuxtLayout name="protect">
    App
    <Logout />

    <NuxtLink :to="localePath('/app/profile/settings')">User settings</NuxtLink>

    <code>{{ authStore.user }}</code>
  </NuxtLayout>
</template>

<style scoped lang="sass"></style>
