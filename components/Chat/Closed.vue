<template>
  <div class="mb-3" v-if="isClosed">
    <div class="chats-closed__title text-center mb-3">Закрытые тикеты</div>
    <UiButton
      class="chats-closed__back gap-x-1"
      @click="emits('setStatuses', false)"
    >
      <IconArrow />
      <span>Назад</span>
    </UiButton>
  </div>
  <div
    class="chats-closed rounded-xl cursor-pointer flex items-center gap-x-3 py-4 px-6 mb-3"
    v-else
    @click="emits('setStatuses', true)"
  >
    <div
      class="chats-closed__icon flex shrink-0 items-center justify-center rounded-full bg-white w-16 h-16"
    >
      <IconClosed />
    </div>
    <div class="chats-closed__title">Закрытые тикеты</div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  isClosed: boolean;
}>();

const emits = defineEmits(["setStatuses"]);
</script>

<style lang="scss" scoped>
.chats-closed {
  background-color: var(--main-background);

  &__title {
    @apply font-medium text-xl;
  }

  &__back {
    padding: 12px 16px;
  }
}
</style>
