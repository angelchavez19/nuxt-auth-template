<script setup lang="ts"></script>

<template>
  <div class="Container">
    <div class="Content">
      <div class="logo"><IconLogo /></div>
      <h1 class="title"><slot name="title" /></h1>

      <slot />
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
      text-align: center

@media (min-width: 480px)
  .Container .Content
    max-width: 388px
</style>
