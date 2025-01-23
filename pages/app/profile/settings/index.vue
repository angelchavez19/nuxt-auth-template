<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  Settings

  <NuxtLink :to="localePath('/app/profile/settings/mfa')">
    Multifactor authentication
  </NuxtLink>
</template>

<style scoped lang="sass"></style>
