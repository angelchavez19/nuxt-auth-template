<script setup lang="ts">
import { BACKEND_URL } from "~/config/api";

const { t } = useI18n();

const route = useRoute();

const isVerified = ref<boolean>();
const message = ref<string>();
const description = ref<string>();

onMounted(async () => {
  const token = route.query.token;

  if (!token) {
    message.value = t("page.auth.confirm.content.no-token.message");
    description.value = t("page.auth.confirm.content.no-token.description");
    return;
  }

  const response = await fetch(`${BACKEND_URL}/auth/account/confirm?token=${token}`);

  if (response.status === 200) {
    message.value = t("page.auth.confirm.content.success.message");
    description.value = t("page.auth.confirm.content.success.description");
    isVerified.value = true;
    return;
  }

  message.value = t("page.auth.confirm.content.error.message");
  description.value = t("page.auth.confirm.content.error.description");
  isVerified.value = false;
});
</script>

<template>
  <NuxtLayout name="auth-base">
    <template #title>{{ message }}</template>

    <p>{{ description }}</p>

    <LayoutComponentsFooter
      v-if="isVerified"
      :text="$t('page.auth.confirm.footer.link1.text')"
      :link-text="$t('page.auth.confirm.footer.link1.link-text')"
      link="/auth/login"
    />
    <LayoutComponentsFooter
      v-if="isVerified === false"
      :text="$t('page.auth.confirm.footer.link2.text')"
      :link-text="$t('page.auth.confirm.footer.link2.link-text')"
      link="/auth/account/refresh-email-verification"
    />
  </NuxtLayout>
</template>

<style scoped lang="sass"></style>
