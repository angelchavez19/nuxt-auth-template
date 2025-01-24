<script setup lang="ts">
const authStore = useAuthStore();

callOnce(authStore.getUser);
</script>

<template>
  <slot v-if="authStore.user !== null" />
</template>
