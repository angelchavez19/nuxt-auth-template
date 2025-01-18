<script setup lang="ts"></script>

<template>
  <LayoutAuthBase>
    <div class="social"></div>
    <Separator>o</Separator>

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
