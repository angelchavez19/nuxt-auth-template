<script setup lang="ts">
import axios from "axios";
import { BACKEND_URL } from "~/config/api";
import type { UserForAdminI } from "~/interfaces";

definePageMeta({ layout: "admin" });

const refreshToken = useRefreshToken();
const users = ref<UserForAdminI[]>();

onMounted(async () => {
  await refreshToken(async () => {
    const response = await axios.get(`${BACKEND_URL}/admin/users`, {
      withCredentials: true,
    });

    if (response.status === 200) {
      users.value = response.data;
    }
  });
});
</script>

<template>
  <code>{{ users }}</code>
</template>

<style scoped lang="sass"></style>
