<script setup lang="ts">
import axios from "axios";
import type { SchemaForm } from "~/components/form/interface";
import { useFormSubmit } from "~/components/form/use-form";
import { BACKEND_URL } from "~/config/api";
import { toast } from "vue-sonner";

const { loading, handleSubmit } = useFormSubmit();
const router = useRouter();

const schema: SchemaForm = {
  fields: [
    {
      label: "Your Name",
      name: "firstName",
      as: "input",
      rules: "required|name",
      autocomplete: "given-name",
    },
    {
      label: "Your Last Name",
      name: "lastName",
      as: "input",
      rules: "required|name",
      autocomplete: "family-name",
    },
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
          toast.success(
            "Account created successfully. Please check your email to verify your account."
          );
          actions.resetForm();
          router.push("/auth/login");
        }
      } catch (error: any) {
        if (error.response) {
          if (error.response.status === 409) {
            toast.error("Email already exists");
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
    <template #title>Register Form</template>

    <FormBuilder
      :schema="schema"
      :loading="loading"
      :submit="submit"
      submit-button-text="Register Now"
    />

    <template #footer>
      <LayoutComponentsFooter
        text="Do you have an account?"
        link-text="Log In"
        link="/auth/login"
      />
      <LayoutComponentsFooter
        text="Did you lose your verification email?"
        link-text="Request a new one"
        link="/auth/account/refresh-email-verification"
      />
    </template>
  </LayoutAuth>
</template>

<style scoped lang="sass"></style>
