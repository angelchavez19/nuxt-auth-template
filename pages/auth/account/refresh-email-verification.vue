<script setup lang="ts">
import axios from "axios";
import { toast } from "vue-sonner";
import type { SchemaForm } from "~/components/form/interface";
import { useFormSubmit } from "~/components/form/use-form";
import { BACKEND_URL } from "~/config/api";

const { loading, handleSubmit } = useFormSubmit();
const router = useRouter();

const schema: SchemaForm = {
  fields: [
    {
      label: "Your Email",
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
          toast.success(
            "We have successfully processed your request. Please verify your email."
          );
          actions.resetForm();
        }
      } catch (error: any) {
        if (error.response) {
          if (error.response.status === 404) {
            toast.error("User not found.");
          } else if (error.response.status === 409) {
            toast.error("User account is confirmed");
          } else {
            toast.error("An unexpected error occurred while creating the user.");
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
  <LayoutAuthBase>
    <template #title>Request a New Verification Email</template>

    <FormBuilder
      :schema="schema"
      :loading="loading"
      :submit="submit"
      submit-button-text="Request Now"
    />

    <Separator />

    <LayoutComponentsFooter
      text="Have you verified your email?"
      link-text="Log In"
      link="/auth/login"
    />
  </LayoutAuthBase>
</template>

<style scoped lang="sass"></style>
