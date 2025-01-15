<script setup lang="ts">
const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
});

const isValidData = computed(() => {
  return Object.values(formData.value).every((value) => value !== "");
});

const handleSubmitRegisterForm = async () => {};
</script>

<template>
  <PagesAuthBaseForm
    :is-valid-data="isValidData"
    @handle-submit="handleSubmitRegisterForm"
  >
    <template #title>Register</template>

    <PagesAuthBaseInput
      v-model="formData.firstName"
      id="firstName"
      label="First Name"
      placeholder="First Name"
    />

    <PagesAuthBaseInput
      v-model="formData.lastName"
      id="lastName"
      label="Last Name"
      placeholder="Last Name"
    />

    <PagesAuthBaseInput
      v-model="formData.email"
      id="email"
      label="Email"
      placeholder="name@domain.com"
      autocomplete="email"
      type="email"
    />

    <PagesAuthInputPassword
      id="password"
      label="Password"
      v-model="formData.password"
      placeholder="Password"
    />

    <template #footer-text>Do you have an account? </template>
    <template #footer-text-link>Log In</template>
  </PagesAuthBaseForm>
</template>

<style scoped lang="sass">
@use '~/assets/sass/style.sass'

.Form-input
  @include style.f-al-c-col()
  width: 100%
  margin: 1rem 0
  gap: .3rem

  label
    @include style.font-primary($weight: 600)
    width: 100%

  input
    width: 100%
    background-color: var(--primary-background)
    border: none
    outline: 1px solid var(--secondary-background)
    padding: 1rem .8rem
    color: var(--primary-text)
    border-radius: 3px
</style>
