<template>
  <button
    class="btn flex justify-center text-base gap-2.5 px-6 py-4"
    :class="[bgColor, textColor]"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    bgColor?: "grey" | "white" | "blue";
    textColor?: "text-red";
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

  &.text {
    &-red {
      color: var(--color-red);
    }
  }

  &.white {
    background-color: var(--color-white);
  }

  &.grey {
    background: var(--main-background);
  }

  &.blue {
    background: var(--color-blue);
    color: var(--color-white);
  }
}
</style>
