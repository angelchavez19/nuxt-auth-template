<script setup lang="ts">
import "~/assets/sass/globals.sass";
import { setLocale } from "@vee-validate/i18n";

const { locale } = useI18n();
setLocale(locale.value);
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <ToogleTheme />
  <LanguageSelector />
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
