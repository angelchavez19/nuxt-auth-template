<script setup lang="ts">
interface Props {
  text: string;
  link: string;
  linkText: string;
}
defineProps<Props>();
</script>

<template>
  <div class="footer">
    <p>
      {{ text }} <NuxtLink :to="link">{{ linkText }}</NuxtLink>
    </p>
  </div>
</template>

<style scoped lang="sass">
@use '~/assets/sass/mixins'

.footer p
  @include mixins.font-primary(1rem, 400)
  text-align: center
  a
    color: var(--primary-links)
</style>
