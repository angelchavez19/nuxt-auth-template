<script setup lang="ts">
interface Props {
  text?: string;
}
defineProps<Props>();
</script>

<template>
  <div class="Divider">
    <span v-if="text">{{ text }}</span>
  </div>
</template>

<style scoped lang="sass">
@use '~/assets/sass/style'

.Divider
  @include style.f-jc-c()
  position: relative
  width: 100%
  padding: 1.5rem 0

  span
    position: relative
    background-color: var(--primary-background)
    padding: 0 .7rem

.Divider::before
  content: ""
  background-color: var(--secondary-background)
  height: 1px
  display: block
  position: absolute
  top: 50%
  left: 0
  right: 0
</style>
