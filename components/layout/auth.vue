<script setup lang="ts"></script>

<template>
  <LayoutAuthBase>
    <template #title><slot name="title" /></template>

    <div class="social"></div>
    <Separator>{{ $t("components.layout.auth.separatorText") }}</Separator>

    <div class="form"><slot /></div>

    <Separator />

    <slot name="footer" />
  </LayoutAuthBase>
</template>

<style scoped lang="sass">
.form
  width: 100%
  padding: 0 .4rem
</style>
