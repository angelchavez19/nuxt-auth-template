<script setup lang="ts">
const authStore = useAuthStore();
</script>

<template>
  <NuxtLayout name="authorization">
    App
    <Logout />

    <NuxtLink :to="$localePath('/app/profile/settings')">User settings</NuxtLink>

    <code>{{ authStore.user }}</code>

    <UserBased :roles="['ADMIN']">
      <NuxtLink :to="$localePath('/admin')">Admin Dashboard</NuxtLink>
    </UserBased>
  </NuxtLayout>
</template>

<style scoped lang="sass"></style>
