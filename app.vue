<script setup lang="ts">
import "~/assets/sass/globals.sass";
</script>

<template>
  <div>
    <NuxtPage />
  </div>
  <ToogleTheme />
  <Toaster
    richColors
    :toastOptions="{
      class: 'Toaster',
      descriptionClass: 'Toaster-description',
    }"
  />
</template>

<style lang="sass">
.Toaster
  padding: .8rem
</style>
