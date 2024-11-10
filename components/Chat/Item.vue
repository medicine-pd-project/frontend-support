<template>
  <div class="chat flex rounded-xl py-4 pr-6">
    <div class="grow">
      <div class="flex justify-between mb-0.5">
        <div class="">{{ chat?.creatorBy }}</div>
        <div class="chat__id">#{{ chat?.id }}</div>
      </div>
      <div class="chat__time mb-2 opacity-50">
        {{ moment(convertToMilliseconds(chat?.createdAt)).fromNow() }}
      </div>
      <div class="chat__text">{{ chat?.messages?.[0]?.text }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import moment from "moment";
import type { IChatView } from "~/interfaces/models/chat";

const props = defineProps<{
  chat: IChatView;
}>();
</script>

<style lang="scss" scoped>
.chat {
  padding-left: 10px;

  &::before {
    background-color: var(--color-blue);
    border-radius: 8px;
    content: "";
    display: block;
    flex-shrink: 0;
    margin-right: 8px;
    opacity: 0;
    width: 6px;
  }

  &.active {
    background-color: var(--main-background);
    // background-color: var(--color-blue);

    &::before {
      opacity: 1;
    }
  }

  &__id {
    color: var(--color-blue);
  }

  &__text {
  }
}
</style>
