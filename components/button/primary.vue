<script setup lang="ts">
interface Props {
  text: string;
  loading?: boolean;
}
defineProps<Props>();

defineEmits(["click"]);
</script>

<template>
  <button @click="$emit('click')" :class="loading ? 'loading' : ''" :disabled="loading">
    <div class="loader" v-show="loading"></div>
    <span>{{ text }}</span>
  </button>
</template>

<style scoped lang="sass">
@use '~/assets/sass/mixins'

button
  @include mixins.f()
  background-color: var(--primary)
  width: 100%
  border: none
  outline: none
  border-radius: 20px
  padding: .7rem .5rem
  cursor: pointer

  .loader
    width: 20px
    padding: 4px
    aspect-ratio: 1
    border-radius: 50%
    background: var(--text-primary-common)
    --_m: conic-gradient(#0000 10%,#000), linear-gradient(#000 0 0) content-box
    -webkit-mask: var(--_m)
    mask: var(--_m)
    -webkit-mask-composite: source-out
    mask-composite: subtract
    animation: l3 1s infinite linear

  span
    @include mixins.font-primary(1.1rem, 600)
    flex: 1
    color: var(--text-primary-common)

button.loading
  cursor: not-allowed

button:not(.loading):hover,
button.loading
  background-color: var(--primary-hover)

@keyframes l3
  to
    transform: rotate(1turn)
</style>
