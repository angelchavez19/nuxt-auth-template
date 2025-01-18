<script setup lang="ts">
import axios from "axios";
import { BACKEND_URL } from "~/config/api";

const loading = ref(false);
const router = useRouter();

const handleLogout = async () => {
  loading.value = true;

  await axios.get(`${BACKEND_URL}/auth/logout`, { withCredentials: true });
  router.push("/");

  loading.value = false;
};
</script>

<template>
  <div class="LogoutButton">
    <ButtonPrimary
      text="Log out"
      style="padding: 0.2rem; font-size: 0.9rem; width: 90px"
      :loading="loading"
      @click="handleLogout"
    />
  </div>
</template>
