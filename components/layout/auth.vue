<script setup lang="ts"></script>

<template>
  <div class="Container">
    <div class="Content">
      <div class="logo"><IconLogo /></div>
      <div class="title"><slot name="title" /></div>

      <div class="social"></div>
      <Separator>o</Separator>

      <div class="form"><slot /></div>

      <Separator />

      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped lang="sass">
@use '~/assets/sass/mixins'

.Container
  @include mixins.f-c()
  width: 100%

  .Content
    @include mixins.f-c-col()
    width: 100%
    padding: 2rem 1rem
    gap: 1rem

    .logo
      $size: 100px
      width: $size
      height: $size

    .title
      @include mixins.font-primary(1.2rem, 600)

    .form
      width: 100%
      padding: 0 .4rem

@media (min-width: 480px)
  .Container .Content
    max-width: 388px
</style>
