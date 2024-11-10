<template>
  <label class="field form-block">
    <div v-if="label" class="field__label">{{ label }}</div>
    <template v-else-if="$slots.label">
      <slot name="label"></slot>
    </template>
    <input
      v-bind="$attrs"
      class="field__input input w-full"
      @input="handleInput"
      :type="type ?? 'text'"
      :value="modelValue"
      v-maska
      :data-maska="maska"
      :data-maska-tokens="maskaTokens"
      :data-maska-reversed="maskaReversed"
    />
  </label>
  <div v-if="error" class="field__error error">{{ error }}</div>
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
  type?: "text" | "number" | "tel" | "email" | "password";
  maska?: string;
  maskaTokens?: string;
  maskaReversed?: boolean;
}>();

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;

  emits("update:modelValue", target.value);
};
</script>

<style lang="scss" scoped>
.field {
  &__input {
  }
}
</style>
