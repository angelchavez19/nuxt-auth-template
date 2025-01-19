<script setup lang="ts">
import axios from "axios";
import { toast } from "vue-sonner";
import type { SchemaForm } from "~/components/form/interface";
import { useFormSubmit } from "~/components/form/use-form";
import { BACKEND_URL } from "~/config/api";

const localePath = useLocalePath();
const { t } = useI18n();

const { loading, handleSubmit } = useFormSubmit();
const router = useRouter();

const schema: SchemaForm = {
  fields: [
    {
      label: t("page.auth.login.form.email"),
      name: "email",
      as: "input",
      rules: "required|email",
      type: "email",
      autocomplete: "email",
    },
    {
      label: t("page.auth.login.form.password"),
      name: "password",
      as: "input",
      rules: "required",
      type: "password",
    },
  ],
};

const submit = (data: any, actions: any) =>
  handleSubmit(
    async (data, actions) => {
      try {
        const response = await axios.post(`${BACKEND_URL}/auth/login`, data, {
          withCredentials: true,
        });
        if (response.status === 200) router.push(localePath("/app"));
      } catch (error: any) {
        if (error.response) {
          if (
            error.response.status === 401 &&
            error.response.data.message === "Invalid credentials"
          ) {
            toast.error(t("page.auth.login.toast.submitLogin.401Credentials"));
          } else if (
            error.response.status === 401 &&
            error.response.data.message === "2fa_required"
          ) {
            router.push(localePath("/auth/two-factor"));
          } else if (
            error.response.status === 404 &&
            error.response.data.message === "User not found"
          ) {
            toast.error(t("page.auth.login.toast.submitLogin.404NotFound"));
          } else if (
            error.response.status === 404 &&
            error.response.data.message === "User unverified"
          ) {
            toast.error(t("page.auth.login.toast.submitLogin.404Unverified"));
          } else {
            toast.error(t("page.auth.login.toast.submitLogin._"));
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
  <LayoutAuth>
    <template #title>{{ $t("page.auth.login.title") }}</template>

    <FormBuilder
      :schema="schema"
      :loading="loading"
      :submit="submit"
      :submit-button-text="$t('page.auth.login.form.submitButton')"
    />

    <template #footer>
      <LayoutComponentsFooter
        :text="$t('page.auth.login.footer.link1.text')"
        :link-text="$t('page.auth.login.footer.link1.link-text')"
        link="/auth/account/register"
      />
    </template>
  </LayoutAuth>
</template>

<style scoped lang="sass"></style>
