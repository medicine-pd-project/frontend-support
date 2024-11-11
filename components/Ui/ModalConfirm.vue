<template>
  <LazyUiModal :name="name">
    <div class="modal-confirm rounded-xl p-2">
      <div
        class="modal-confirm__content font-medium text-xl text-center p-2 mb-2"
      >
        <slot />
      </div>
      <div class="modal-confirm__btns grid grid-cols-2 gap-x-1">
        <UiButton @click="emits('cancel')" bgColor="white">{{
          btnCancelText
        }}</UiButton>
        <UiButton
          @click="emits('confirm')"
          bgColor="white"
          textColor="text-red"
          >{{ btnConfirmText }}</UiButton
        >
      </div>
    </div>
  </LazyUiModal>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    name: string;
    btnCancelText?: string;
    btnConfirmText?: string;
  }>(),
  {
    btnCancelText: "Отменить",
    btnConfirmText: "Закрыть",
  }
);

const emits = defineEmits(["cancel", "confirm"]);
</script>

<style lang="scss" scoped>
.modal-confirm {
  background-color: var(--main-background);
  max-width: 332px;
}
</style>
