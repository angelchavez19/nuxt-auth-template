<script setup lang="ts">
import axios from "axios";
import { BACKEND_URL } from "~/config/api";

const loading = ref(false);
const router = useRouter();
const localePath = useLocalePath();

const handleLogout = async () => {
  loading.value = true;

  await axios.get(`${BACKEND_URL}/auth/logout`, { withCredentials: true });
  router.push(localePath("/"));

  loading.value = false;
};
</script>

<template>
  <div class="LogoutButton">
    <ButtonPrimary
      :text="$t('components.logout.text')"
      style="padding: 0.2rem; font-size: 0.9rem; width: 90px"
      :loading="loading"
      @click="handleLogout"
    />
  </div>
</template>
