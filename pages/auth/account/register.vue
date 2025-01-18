<script setup lang="ts">
import axios from "axios";
import type { SchemaForm } from "~/components/form/interface";
import { useFormSubmit } from "~/components/form/use-form";
import { BACKEND_URL } from "~/config/api";
import { toast } from "vue-sonner";

const localePath = useLocalePath();
const { t } = useI18n();

const { loading, handleSubmit } = useFormSubmit();
const router = useRouter();

const schema: SchemaForm = {
  fields: [
    {
      label: t("page.register.form.name"),
      name: "firstName",
      as: "input",
      rules: "required|name",
      autocomplete: "given-name",
    },
    {
      label: t("page.register.form.lastName"),
      name: "lastName",
      as: "input",
      rules: "required|name",
      autocomplete: "family-name",
    },
    {
      label: t("page.register.form.email"),
      name: "email",
      as: "input",
      rules: "required|email",
      type: "email",
      autocomplete: "email",
    },
    {
      label: t("page.register.form.password"),
      name: "password",
      as: "input",
      rules: "required|password",
      type: "password",
    },
  ],
};

const submit = (data: any, actions: any) =>
  handleSubmit(
    async (data, actions) => {
      try {
        const response = await axios.post(`${BACKEND_URL}/auth/account`, data);

        if (response.status === 200) {
          toast.success(t("page.register.toast.submitRegister.200"));
          actions.resetForm();
          router.push("/auth/login");
        }
      } catch (error: any) {
        if (error.response) {
          if (error.response.status === 409) {
            toast.error(t("page.register.toast.submitRegister.409"));
          } else {
            toast.error(t("page.register.toast.submitRegister._"));
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
    <template #title>{{ $t("page.register.title") }}</template>

    <FormBuilder
      :schema="schema"
      :loading="loading"
      :submit="submit"
      :submit-button-text="$t('page.register.form.submitButton')"
    />

    <template #footer>
      <LayoutComponentsFooter
        :text="$t('page.register.footer.link1.text')"
        :link-text="$t('page.register.footer.link1.link-text')"
        :link="localePath('/auth/login')"
      />
      <LayoutComponentsFooter
        :text="$t('page.register.footer.link2.text')"
        :link-text="$t('page.register.footer.link2.link-text')"
        :link="localePath('/auth/account/refresh-email-verification')"
      />
    </template>
  </LayoutAuth>
</template>

<style scoped lang="sass"></style>
