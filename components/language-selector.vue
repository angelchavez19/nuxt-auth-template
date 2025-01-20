<script setup lang="ts">
import { setLocale } from "@vee-validate/i18n";
import { defaultLang, languages, type Lang } from "~/i18n.config";

const { setLocale: setLocaleI18n, locale } = useI18n();

const selectedLang = ref<Lang>(languages.find(lang => lang.value === locale.value) || defaultLang);

const handleSelected = (lang: Lang) => {
  selectedLang.value = lang;

  setLocale(lang.value);
  setLocaleI18n(lang.value);
};
</script>

<template>
  <Selector
    :items="languages"
    :selected="selectedLang || defaultLang"
    @select="handleSelected"
  />
</template>
