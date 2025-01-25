<script setup lang="ts">
import { toast } from "vue-sonner";
import { googleSdkLoaded } from "vue3-google-login";
import { BACKEND_URL, FRONTEND_URL } from "~/config/api";
import { GITHUB_CLIENT_ID, GITHUB_REDIRECT_URL, GOOGLE_CLIENT_ID } from "~/config/social";

const route = useRoute();
const router = useRouter();
const localePath = useLocalePath();
const { locale } = useI18n();

const sendCodeToBackend = async (code: string) => {
  window.location.href = `${BACKEND_URL}/auth/social/google?code=${code}&lang=${locale.value}`;
};

const login = () => {
  googleSdkLoaded((google) => {
    google.accounts.oauth2
      .initCodeClient({
        client_id: GOOGLE_CLIENT_ID,
        scope: "email profile",
        redirect_uri: `${FRONTEND_URL}/dashboard`,
        callback: (response) => {
          if (response.code) {
            sendCodeToBackend(response.code);
          }
        },
      })
      .requestCode();
  });
};

const getGithubLink = () => {
  const rootURl = "https://github.com/login/oauth/authorize";

  const options = {
    client_id: GITHUB_CLIENT_ID,
    redirect_uri: `${GITHUB_REDIRECT_URL}?lang=${locale.value}`,
    scope: "user:email",
    state: "/",
  };

  const qs = new URLSearchParams(options);

  return `${rootURl}?${qs.toString()}`;
};

onMounted(() => {
  if (route.query.error === "provider_error") {
    toast.error(
      `You registered using a different provider. Please log in with ${route.query.provider}.`
    );
    router.push(localePath("auth/login"));
  }
});
</script>

<template>
  <NuxtLayout name="auth-base">
    <template #title><slot name="title" /></template>

    <div class="social">
      <button class="social-google" @click="login">
        <IconGoogle />
        <span>{{ $t("layouts.auth.social.google") }}</span>
      </button>
      <a :href="getGithubLink()" class="social-github">
        <IconGithub />
        <span>{{ $t("layouts.auth.social.github") }}</span>
      </a>
    </div>

    <Separator>{{ $t("layouts.auth.separatorText") }}</Separator>

    <div class="form"><slot /></div>

    <Separator />

    <slot name="footer" />
  </NuxtLayout>
</template>

<style scoped lang="sass">
@use '~/assets/sass/mixins'

.social
  @include mixins.f-c-col()
  width: 100%
  gap: 1rem

  .social-google,
  .social-github
    @include mixins.f-c()
    padding: .5rem
    gap: 1rem
    background-color: var(--background-secondary)
    border: 2px solid var(--text-primary)
    outline: none
    text-decoration: none
    width: 100%
    border-radius: 40px
    cursor: pointer

    svg
      $size: 30px
      width: $size
      height: $size

    span
      @include mixins.font-primary()
      color: var(--text-secondary)

  .social-github svg
    fill: var(--text-primary)

  .social-google:active,
  .social-github:active
    transform: scale(.9)

.form
  width: 100%
  padding: 0 .4rem
</style>
