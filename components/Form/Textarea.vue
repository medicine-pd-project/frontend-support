<template>
  <label class="field form-block">
    <div v-if="label" class="field__label">{{ label }}</div>
    <template v-else-if="$slots.label">
      <slot name="label"></slot>
    </template>
    <textarea class="field__textarea" @input="handleInput">{{
      modelValue
    }}</textarea>
  </label>
  <div v-if="error" class="field__label">{{ error }}</div>
  <template v-else-if="$slots.label">
    <slot name="error"></slot>
  </template>
</template>

<script lang="ts" setup>
const emits = defineEmits(["update:modelValue"]);

const props = defineProps<{
  label?: string;
  error?: Ref<string> | string;
  modelValue?: any;
}>();

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;

  emits("update:modelValue", target.value);
};
</script>

<style lang="scss" scoped>
.field {
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  &__textarea {
    background-color: var(--header-background);
    color: var(--color-white);
    border-radius: 8px;
    font-size: 16px;
    padding: 16px;
  }
}
</style>
