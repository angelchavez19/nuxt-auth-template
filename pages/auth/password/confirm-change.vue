<script setup lang="ts">
import axios from "axios";
import { toast } from "vue-sonner";
import type { SchemaForm } from "~/components/form/interface";
import { useFormSubmit } from "~/components/form/use-form";
import { BACKEND_URL } from "~/config/api";

const localePath = useLocalePath();
const route = useRoute();
const router = useRouter();
const { t } = useI18n();

const { loading, handleSubmit } = useFormSubmit();

const schema: SchemaForm = {
  fields: [
    {
      label: t("page.auth.confirmChange.form.password"),
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
      if (!route.query.token) {
        toast.error(t("page.auth.confirmChange.toast.submitConfirmPassword.404"));
        return;
      }

      try {
        const response = await axios.post(
          `${BACKEND_URL}/auth/password/confirm-change?token=${route.query.token}`,
          data,
          { withCredentials: true }
        );

        if (response.status === 200) {
          toast.success(t("page.auth.confirmChange.toast.submitConfirmPassword.200"));
          router.push(localePath("/auth/login"));
        }
      } catch (error: any) {
        if (error.response) {
          toast.error(t("page.auth.confirmChange.toast.submitConfirmPassword.404"));
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
    <template #title>{{ $t("page.auth.confirmChange.title") }}</template>

    <FormBuilder
      :schema="schema"
      :loading="loading"
      :submit="submit"
      :submit-button-text="$t('page.auth.confirmChange.form.submitButton')"
    />

    <Separator />

    <LayoutComponentsFooter
      :text="$t('page.auth.confirmChange.footer.link1.text')"
      :link-text="$t('page.auth.confirmChange.footer.link1.link-text')"
      link="/auth/password/request-change"
    />
    <LayoutComponentsFooter
      :text="$t('page.auth.register.footer.link2.text')"
      :link-text="$t('page.auth.register.footer.link2.link-text')"
      link="/auth/account/refresh-email-verification"
    />
  </LayoutAuthBase>
</template>

<style scoped lang="sass"></style>
