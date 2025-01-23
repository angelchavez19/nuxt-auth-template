<script setup lang="ts">
import { BACKEND_URL } from "~/config/api";

const { locale } = useI18n();
const totpCode = ref("");

const loginWithTotp = async () => {
  window.location.href = `${BACKEND_URL}/auth/twofa/authenticate?totpCode=${totpCode.value}&lang=${locale.value}`;
};
</script>

<template>
  <input type="text" v-model="totpCode" />
  <button @click="loginWithTotp">Login</button>
</template>

<style scoped lang="sass"></style>
