<script setup lang="ts"></script>

<template>
  <NuxtLayout name="authorization">
    <UserBased :roles="['ADMIN']" redirect="/auth/login">
      <slot />
    </UserBased>
  </NuxtLayout>
</template>

<style scoped lang="sass"></style>
