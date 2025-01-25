<script setup lang="ts">
import type { UserI } from "~/interfaces";

interface Props {
  roles?: string[];
  permissions?: string[];
  redirect?: string;
}
const props = defineProps<Props>();

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const localePath = useLocalePath();

const isShowContent = ref<boolean>(false);

const matchPermissions = (permissions: string[], user: UserI): string[] => {
  const permissionsMatched: string[] = [];

  for (const permission of user.role.permissions) {
    if (permissions.includes(permission.permission.name)) {
      permissionsMatched.push(permission.permission.name);
    }
  }

  return permissionsMatched;
};

const getIsShowContent = () => {
  if (authStore.user === null) return;

  if (!props.roles) isShowContent.value = true;
  else if (props.roles.includes(authStore.user.role.name)) isShowContent.value = true;
  else {
    isShowContent.value = false;
    if (props.redirect) router.push(localePath(props.redirect));
    return;
  }

  if (!props.permissions) isShowContent.value = true;
  else if (
    matchPermissions(props.permissions, authStore.user).length ===
    props.permissions.length
  ) {
    isShowContent.value = true;
  } else {
    isShowContent.value = false;
    if (props.redirect) router.push(localePath(props.redirect));
    return;
  }
};

watch([route, authStore], getIsShowContent);
onMounted(getIsShowContent);
</script>

<template>
  <slot v-if="isShowContent" />
</template>

<style scoped lang="sass"></style>
