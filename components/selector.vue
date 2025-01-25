<script setup lang="ts">
interface Item {
  value: string;
  label: string;
}

interface Props {
  selected: Item;
  items: Item[];
}
defineProps<Props>();
defineEmits(["select"]);

const isExpanded = ref(false);

const closeSelector = (event: MouseEvent) => {
  const selector = document.querySelector(".Selector");
  if (selector && !selector.contains(event.target as Node)) {
    isExpanded.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeSelector);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", closeSelector);
});
</script>

<template>
  <div class="Selector">
    <div class="Selector-selected" @click="isExpanded = !isExpanded">
      <div class="Selector-selected-icon"><slot name="icon" /></div>
      <span>{{ selected.label }}</span>
    </div>
    <div class="Selector-items" v-show="isExpanded">
      <div
        v-for="item in items"
        :key="item.value"
        :class="`Selector-item${item.value === selected.value ? ' active' : ''}`"
        @click="
          isExpanded = false;
          $emit('select', item);
        "
      >
        <span>{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@use '~/assets/sass/mixins'

.Selector
  position: relative
  width: 120px
  border: 1px solid var(--background-secondary)
  padding: 1px
  border-radius: 20px
  cursor: pointer

  .Selector-selected
    @include mixins.f-c()
    width: 100%
    background-color: var(--background-secondary)
    padding: .3rem
    border-radius: 20px
    text-align: center

    .Selector-selected-icon
      $size: 15px
      width: $size
      height: $size

    span
      flex: 1
      user-select: none

  .Selector-items
    @include mixins.f-c-col()
    gap: .1rem
    position: absolute
    width: 100%
    top: 35px
    border: 1px solid var(--background-secondary)
    padding: 1px
    border-radius: 7px
    background-color: var(--background-primary)

    .Selector-item
      width: 100%
      background-color: var(--background-secondary)
      cursor: pointer
      border-radius: 20px
      padding: .2rem .3rem
</style>
