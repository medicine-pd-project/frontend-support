<template>
  <div class="datepicker form-block">
    <div v-if="label" class="datepicker__label">{{ label }}</div>
    <template v-else-if="$slots.label">
      <slot name="label"></slot>
    </template>
    <Datepicker
      dark
      format="dd-MM-yyyy"
      :modelValue="modelValue"
      @update:model-value="(val) => emits('update:modelValue', val)"
      :enableTimePicker="false"
    />
  </div>
  <div v-if="error" class="datepicker__error error">{{ error }}</div>
  <template v-else-if="$slots.label">
    <slot name="error"></slot>
  </template>
</template>

<script lang="ts" setup>
import Datepicker from "@vuepic/vue-datepicker";
import type { ModelValue } from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const emits = defineEmits(["update:modelValue"]);

const props = defineProps<{
  label?: string;
  error?: Ref<string> | string;
  modelValue?: ModelValue;
}>();
</script>

<style lang="scss">
// @import "./../../assets/scss/";

.datepicker {
  .dp__input {
    @extend .input;
    border-width: 0;
    padding-left: 32px;
  }
}
</style>
