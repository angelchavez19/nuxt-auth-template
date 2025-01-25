<script setup lang="ts">
import axios from "axios";
import { toast } from "vue-sonner";
import type { SchemaForm } from "~/components/form/interface";
import { useFormSubmit } from "~/components/form/use-form";
import { BACKEND_URL } from "~/config/api";

const { t } = useI18n();

const { loading, handleSubmit } = useFormSubmit();

const schema: SchemaForm = {
  fields: [
    {
      label: t("page.auth.refreshEmailVerification.form.email"),
      name: "email",
      as: "input",
      rules: "required|email",
      type: "email",
      autocomplete: "email",
    },
  ],
};

const submit = (data: any, actions: any) =>
  handleSubmit(
    async (data, actions) => {
      try {
        const response = await axios.post(
          `${BACKEND_URL}/auth/account/refresh-token`,
          data
        );
        if (response.status === 200) {
          toast.success(t("page.auth.refreshEmailVerification.toast.200"));
          actions.resetForm();
        }
      } catch (error: any) {
        if (error.response) {
          if (error.response.status === 404) {
            toast.error(t("page.auth.refreshEmailVerification.toast.404"));
          } else if (error.response.status === 409) {
            toast.error(t("page.auth.refreshEmailVerification.toast.409"));
          } else {
            toast.error(t("page.auth.refreshEmailVerification.toast._"));
          }
        }
        actions.resetForm({
          values: {
            ...data,
            password: "",
          },
        });
      }
    },
    data,
    actions
  );
</script>

<template>
  <NuxtLayout name="auth-base">
    <template #title>{{ $t("page.auth.refreshEmailVerification.title") }}</template>

    <FormBuilder
      :schema="schema"
      :loading="loading"
      :submit="submit"
      :submit-button-text="$t('page.auth.refreshEmailVerification.form.submitButton')"
    />

    <Separator />

    <LayoutComponentsFooter
      :text="$t('page.auth.refreshEmailVerification.footer.link1.text')"
      :link-text="$t('page.auth.refreshEmailVerification.footer.link1.link-text')"
      link="/auth/login"
    />
  </NuxtLayout>
</template>

<style scoped lang="sass"></style>
