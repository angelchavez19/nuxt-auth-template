<script setup lang="ts">
interface Props {
  roles?: string[];
  permissions?: string[];
  redirect?: string;
}
defineProps<Props>();

const authStore = useAuthStore();

onMounted(async () => {
  await authStore.getUser();
});
</script>

<template>
  <UserBased :roles="roles" :permissions="permissions" :redirect="redirect">
    <slot />
  </UserBased>
</template>
