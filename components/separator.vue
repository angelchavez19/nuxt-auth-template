<script setup lang="ts"></script>

<template>
  <div class="Separator">
    <div class="content"><slot /></div>
  </div>
</template>

<style scoped lang="sass">
@use '~/assets/sass/mixins'

.Separator
  @include mixins.f-j-c()
  width: 100%
  position: relative

  .content
    display: inline-block
    position: relative
    padding: 0 .7rem
    background-color: var(--background-primary)

.Separator::before
  content: ''
  height: 1px
  background-color: var(--background-secondary)
  display: block
  position: absolute
  top: 50%
  left: 0
  right: 0
</style>
