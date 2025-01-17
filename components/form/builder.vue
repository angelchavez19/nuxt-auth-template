<script setup lang="ts">
import type { SchemaForm } from "./interface";
import { ErrorMessage, Form, Field } from "vee-validate";

interface Props {
  schema: SchemaForm;
  loading: boolean;
  submit: (any: any, actions: any) => Promise<void>;
  submitButtonText: string;
}
defineProps<Props>();
</script>

<template>
  <Form novalidate @submit="submit" class="Form">
    <div
      v-for="{ as, name, label, rules, ...attrs } in schema.fields"
      :key="name"
      class="Form-input"
    >
      <label :for="name">{{ label }}</label>
      <Field :as="as" :id="name" :name="name" :rules="rules" v-bind="attrs" />
      <ErrorMessage :name="name" class="error" />
    </div>

    <ButtonPrimary :text="submitButtonText" :loading="loading" />
  </Form>
</template>

<style scoped lang="sass">
@use '~/assets/sass/mixins'

.Form
  @include mixins.f-c-col()
  width: 100%
  gap: .8rem

  .Form-input
    @include mixins.f-col()
    gap: .3rem
    width: 100%

    label
      font-weight: 600
      width: 100%

    input
      @include mixins.font-primary()
      width: 100%
      padding: .5rem .7rem
      border: none
      background-color: var(--background-primary)
      outline: 2px solid var(--background-secondary)
      border-radius: 4px
      color: var(--text-primary)

    .error
      width: 100%
      color: var(--text-error)
</style>
