<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <NuxtLayout name="protect">
    Settings

    <NuxtLink :to="localePath('/app/profile/settings/mfa')">
      Multifactor authentication
    </NuxtLink>
  </NuxtLayout>
</template>

<style scoped lang="sass"></style>
