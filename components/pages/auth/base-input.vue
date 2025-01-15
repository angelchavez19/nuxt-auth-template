<script setup lang="ts">
interface Props {
  id: string;
  label: string;
  type?: string;
}
defineProps<Props>();

const input = defineModel();
</script>

<template>
  <div class="Form-input">
    <label :for="id">{{ label }}</label>
    <slot>
      <input
        v-model="input"
        :id="id"
        :name="id"
        :type="type ? type : 'text'"
        v-bind="$attrs"
      />
    </slot>
  </div>
</template>

<style scoped lang="sass">
@use '~/assets/sass/style.sass'

.Form-input
  @include style.f-al-c-col()
  width: 100%
  margin: 1rem 0
  gap: .3rem

  label
    @include style.font-primary($weight: 600)
    width: 100%

  input
    width: 100%
    background-color: var(--primary-background)
    border: none
    outline: 1px solid var(--secondary-background)
    padding: 1rem .8rem
    color: var(--primary-text)
    border-radius: 3px
</style>
