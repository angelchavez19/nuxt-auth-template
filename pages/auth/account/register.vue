<script setup lang="ts">
import axios from "axios";
import type { SchemaForm } from "~/components/form/interface";
import { useFormSubmit } from "~/components/form/use-form";
import { BACKEND_URL } from "~/config/api";
import { toast } from "vue-sonner";

const localePath = useLocalePath();
const { t, locale } = useI18n();

const { loading, handleSubmit } = useFormSubmit();
const router = useRouter();

const schema: SchemaForm = {
  fields: [
    {
      label: t("page.auth.register.form.name"),
      name: "firstName",
      as: "input",
      rules: "required|name",
      autocomplete: "given-name",
    },
    {
      label: t("page.auth.register.form.lastName"),
      name: "lastName",
      as: "input",
      rules: "required|name",
      autocomplete: "family-name",
    },
    {
      label: t("page.auth.register.form.email"),
      name: "email",
      as: "input",
      rules: "required|email",
      type: "email",
      autocomplete: "email",
    },
    {
      label: t("page.auth.register.form.password"),
      name: "password",
      as: "input",
      rules:
        "required|passwordUppercase|passwordLowercase|passwordNumber|passwordSymbol|passwordASCII|min:8|max:72",
      type: "password",
    },
  ],
};

const submit = (data: any, actions: any) =>
  handleSubmit(
    async (data, actions) => {
      try {
        const response = await axios.post(
          `${BACKEND_URL}/auth/account?lang=${locale.value}`,
          data
        );

        if (response.status === 200) {
          toast.success(t("page.auth.register.toast.submitRegister.200"));
          actions.resetForm();
          router.push(localePath("/auth/login"));
        }
      } catch (error: any) {
        if (error.response) {
          if (error.response.status === 409) {
            toast.error(t("page.auth.register.toast.submitRegister.409"));
          } else {
            toast.error(t("page.auth.register.toast.submitRegister._"));
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
  <NuxtLayout name="auth">
    <template #title>{{ $t("page.auth.register.title") }}</template>

    <FormBuilder
      :schema="schema"
      :loading="loading"
      :submit="submit"
      :submit-button-text="$t('page.auth.register.form.submitButton')"
    />

    <template #footer>
      <LayoutComponentsFooter
        :text="$t('page.auth.register.footer.link1.text')"
        :link-text="$t('page.auth.register.footer.link1.link-text')"
        link="/auth/login"
      />
      <LayoutComponentsFooter
        :text="$t('page.auth.register.footer.link2.text')"
        :link-text="$t('page.auth.register.footer.link2.link-text')"
        link="/auth/account/refresh-email-verification"
      />
    </template>
  </NuxtLayout>
</template>

<style scoped lang="sass"></style>
