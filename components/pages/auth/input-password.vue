<script setup lang="ts">
interface Props {
  id: string;
  label: string;
  type?: string;
}
defineProps<Props>();

const input = defineModel({ required: true });

const showPassword = ref(false);
</script>

<template>
  <PagesAuthBaseInput :id="id" :label="label" :type="type">
    <div class="Input-Password">
      <input
        v-model="input"
        :id="id"
        :name="id"
        :type="showPassword ? 'text' : 'password'"
        v-bind="$attrs"
      />
      <div class="Input-Password-icon" @click="showPassword = !showPassword">
        <IconEye v-show="!showPassword" />
        <IconEyeInvisible v-show="showPassword" />
      </div>
    </div>
  </PagesAuthBaseInput>
</template>

<style scoped lang="sass">
@use '~/assets/sass/style.sass'

.Input-Password
  @include style.f-al-c()
  width: 100%
  margin: 1rem 0
  gap: .7rem

  input
    flex: 1
    background-color: var(--primary-background)
    border: none
    outline: 1px solid var(--secondary-background)
    padding: 1rem .8rem
    color: var(--primary-text)
    border-radius: 3px

  .Input-Password-icon
    width: 40px
</style>
