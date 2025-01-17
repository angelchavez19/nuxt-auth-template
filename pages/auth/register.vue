<script setup lang="ts">
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

import type { SchemaForm } from "~/components/form/interface";
import { useFormSubmit } from "~/components/form/use-form";

const { loading, handleSubmit } = useFormSubmit();

const schema: SchemaForm = {
  fields: [
    {
      label: "Your Name",
      name: "name",
      as: "input",
      rules: "required",
      autocomplete: "given-name",
    },
    {
      label: "Your Last Name",
      name: "lastName",
      as: "input",
      rules: "required",
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

const submit = (data: any) => handleSubmit(data, async (data: FormData) => {});
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
    </template>
  </LayoutAuth>
</template>

<style scoped lang="sass"></style>
