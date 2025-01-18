<script setup lang="ts">
import { BACKEND_URL } from "~/config/api";

const route = useRoute();

const isVerified = ref<boolean>();
const message = ref<string>();
const description = ref<string>();

onMounted(async () => {
  const token = route.query.token;

  if (!token) {
    message.value = "No token has been provided for verification.";
    description.value = "Please check the link in your email.";
    return;
  }

  const response = await fetch(`${BACKEND_URL}/auth/account/confirm?token=${token}`);

  if (response.status === 200) {
    message.value = "Account verified!";
    description.value =
      "Verification completed successfully. Your account is ready to use.";
    isVerified.value = true;
    return;
  }
  message.value = "Verification error.";
  description.value = "The token is invalid or has expired.";
  isVerified.value = false;
});
</script>

<template>
  <LayoutAuthBase>
    <template #title>{{ message }}</template>

    <p>{{ description }}</p>

    <LayoutComponentsFooter
      v-if="isVerified"
      text="Your account has been verified"
      link-text="log In"
      link="/auth/login"
    />
    <LayoutComponentsFooter
      v-if="isVerified === false"
      text="There was an error"
      link-text="Request a new verification email."
      link="/auth/account/refresh-email-verification"
    />
  </LayoutAuthBase>
</template>

<style scoped lang="sass"></style>
