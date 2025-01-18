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
    {
      label: "Your Password",
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
        if (response.status === 200) router.push("/app");
      } catch (error: any) {
        if (error.response) {
          if (
            error.response.status === 401 &&
            error.response.data.message === "Invalid credentials"
          ) {
            toast.error("Invalid credentials");
          } else if (
            error.response.status === 401 &&
            error.response.data.message === "2fa_required"
          ) {
            router.push("/auth/two-factor");
          } else if (
            error.response.status === 404 &&
            error.response.data.message === "User not found"
          ) {
            toast.error("User not found.");
          } else if (
            error.response.status === 404 &&
            error.response.data.message === "User unverified"
          ) {
            toast.error("User unverified");
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
  <LayoutAuth>
    <template #title>Login Form</template>

    <FormBuilder
      :schema="schema"
      :loading="loading"
      :submit="submit"
      submit-button-text="Log In"
    />

    <template #footer>
      <LayoutComponentsFooter
        text="Don't you have an account yet?"
        link-text="Register"
        link="/auth/register"
      />
    </template>
  </LayoutAuth>
</template>

<style scoped lang="sass"></style>
