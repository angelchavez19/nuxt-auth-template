<script setup lang="ts">
import axios from "axios";
import { BACKEND_URL } from "~/config/api";
import QRCode from "qrcode";

const userStore = useAuthStore();

const qr = ref<string>();

const enabledTwoFactorAuthentication = async () => {
  try {
    const response = await axios.patch(
      `${BACKEND_URL}/auth/twofa/toogle`,
      {},
      { withCredentials: true }
    );

    if (response.status === 200 && response.data.otpauth_url) {
      QRCode.toDataURL(response.data.otpauth_url, function (err, code) {
        if (err) return console.log("error occurred");
        qr.value = code;
      });
    }
  } catch (error: any) {
    if (error.response) {
      console.log(error.response);
    }
  }

  await userStore.getUser();
};

onMounted(async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/auth/twofa`, {
      withCredentials: true,
    });

    if (response.status === 200 && response.data.otpauth_url) {
      QRCode.toDataURL(response.data.otpauth_url, function (err, code) {
        if (err) return console.log("error occurred");
        qr.value = code;
      });
    }
  } catch {}
});
</script>

<template>
  <NuxtLayout name="protect">
    MFA
    <div class="">
      {{ userStore.user?.twoFactorEnabled ? "Habilitado" : "No habilitado" }}
      <div class="">
        <button @click="enabledTwoFactorAuthentication">
          {{ userStore.user?.twoFactorEnabled ? "Desabilitar" : "Habilitar" }}
        </button>
      </div>
    </div>

    <div v-show="qr">
      <img :src="qr" alt="QR code" />
    </div>
  </NuxtLayout>
</template>

<style scoped lang="sass"></style>
