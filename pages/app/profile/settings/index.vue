<script setup lang="ts"></script>

<template>
  <NuxtLayout name="authorization">
    Settings

    <NuxtLink :to="$localePath('/app/profile/settings/mfa')">
      Multifactor authentication
    </NuxtLink>
  </NuxtLayout>
</template>

<style scoped lang="sass"></style>
