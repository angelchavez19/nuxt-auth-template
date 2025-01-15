<script setup lang="ts">
interface Props {
  isValidData: boolean;
}
defineProps<Props>();

defineEmits(["handleSubmit"]);
</script>

<template>
  <div class="PAuthBaseForm-container">
    <div class="PAuthBaseForm">
      <div class="PAuthBaseForm-logo"><IconLogo /></div>
      <h1 class="PAuthBaseForm-title"><slot name="title" /></h1>
      <!-- Social Register -->

      <Divider text="o" />

      <form class="PAuthBaseForm-form" @submit.prevent="$emit('handleSubmit')">
        <slot />

        <input
          :class="`Form-input-submit${isValidData ? '' : ' --invalid'}`"
          :disabled="isValidData"
          type="submit"
          value="Register Now"
        />
      </form>
      <Divider />
      <p class="PAuthBaseForm-footer-link">
        <slot name="footer-text" />
        <NuxtLink :to="{ name: 'auth-login' }" style="color: var(--primary-text)">
          <slot name="footer-text-link" />
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<style scoped lang="sass">
@use '~/assets/sass/style.sass'

.PAuthBaseForm-container
  @include style.f-jc-c()
  width: 100%

  .PAuthBaseForm
    @include style.f-al-c-col()
    padding: 2rem 1rem
    width: 100%
    max-width: 480px

    .PAuthBaseForm-logo
      $logo-size: 100px
      width: $logo-size
      height: $logo-size

    .PAuthBaseForm-title
      text-align: center

    // Social

    .PAuthBaseForm-form
      width: 100%

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

      .Form-input-submit
        @include style.font-primary(1rem, $weight: 600)
        width: 100%
        border-radius: 10px
        background-color: var(--primary)
        color: var(--common-primary-text)
        border: none
        outline: none
        padding: .5rem
        cursor: pointer
      .Form-input-submit:hover
        background-color: var(--primary-hover)

      .Form-input-submit.--invalid
        cursor: not-allowed
      .Form-input-submit.--invalid:hover
        background-color: var(--primary)

      .PAuthBaseForm-footer-link
        color: var(--primary-text)


@media (min-width: 480px)
  .PAuthBaseForm-container .PAuthBaseForm
    max-width: 388px
</style>
