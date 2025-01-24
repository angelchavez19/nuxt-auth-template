<script setup lang="ts">
import axios from "axios";
import { toast } from "vue-sonner";
import type { SchemaForm } from "~/components/form/interface";
import { useFormSubmit } from "~/components/form/use-form";
import { BACKEND_URL } from "~/config/api";

const { t, locale } = useI18n();

const { loading, handleSubmit } = useFormSubmit();
const router = useRouter();

const schema: SchemaForm = {
  fields: [
    {
      label: t("page.auth.requestChange.form.email"),
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
          `${BACKEND_URL}/auth/password/request-change`,
          data,
          { withCredentials: true }
        );

        if (response.status === 200)
          toast.success(
            t("page.auth.requestChange.toast.submitRequestChangePassword.200")
          );
      } catch (error: any) {
        if (error.response) {
          if (error.response.status === 404) {
            toast.error(
              t("page.auth.requestChange.toast.submitRequestChangePassword.404")
            );
          } else if (error.response.status === 409) {
            toast.error(
              t("page.auth.requestChange.toast.submitRequestChangePassword.409")
            );
          } else {
            toast.error(t("page.auth.requestChange.toast.submitRequestChangePassword._"));
          }
        }
      }

      actions.resetForm();
    },
    data,
    actions
  );
</script>

<template>
  <LayoutAuthBase>
    <template #title>{{ $t("page.auth.requestChange.title") }}</template>

    <FormBuilder
      :schema="schema"
      :loading="loading"
      :submit="submit"
      :submit-button-text="$t('page.auth.requestChange.form.submitButton')"
    />

    <Separator />

    <LayoutComponentsFooter
      :text="$t('page.auth.register.footer.link2.text')"
      :link-text="$t('page.auth.register.footer.link2.link-text')"
      link="/auth/account/refresh-email-verification"
    />
  </LayoutAuthBase>
</template>

<style scoped lang="sass"></style>
