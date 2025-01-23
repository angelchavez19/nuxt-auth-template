<script setup lang="ts">
const localePath = useLocalePath();

const userStore = useUserStore();

onMounted(async () => {
  await userStore.getUser();
});
</script>

<template>
  App
  <Logout />

  <NuxtLink :to="localePath('/app/profile/settings')">User settings</NuxtLink>

  <code>{{ userStore.user }}</code>
</template>

<style scoped lang="sass"></style>
