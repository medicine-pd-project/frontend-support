<template>
  <div class="chats-closed rounded-xl flex items-center gap-x-3 py-4 px-6 mb-3">
    <div
      class="chats-closed__icon flex shrink-0 items-center justify-center rounded-full bg-white w-16 h-16"
    >
      <IconClosed />
    </div>
    <div class="font-medium text-xl">Закрытые тикеты</div>
  </div>
</template>

<style lang="scss" scoped>
.chats-closed {
  background-color: var(--main-background);
}
</style>
