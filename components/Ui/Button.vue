<template>
  <button class="btn flex text-base gap-2.5 px-6 py-4" :class="[bgColor]">
    <slot />
  </button>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    bgColor?: "grey" | "blue";
  }>(),
  {
    bgColor: "grey",
  }
);
</script>

<style lang="scss" scoped>
.btn {
  border-radius: 12px;
  font-weight: 500;

  &.grey {
    background: var(--main-background);
    color: var(--color-red);
  }

  &.blue {
    background: var(--color-blue);
    color: var(--color-white);
  }
}
</style>
