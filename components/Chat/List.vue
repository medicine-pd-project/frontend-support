<template>
  <div class="chats-list overflow-auto">
    <ChatItem
      v-for="chat in chats"
      :class="{ active: chatActive?.id === chat.id }"
      :key="chat.id"
      :chat="chat"
      @click="emits('updateChats', chat)"
    />
  </div>
</template>

<script lang="ts" setup>
import type { IChatView } from "~/interfaces/models/chat";

const props = defineProps<{
  chats?: IChatView[];
  chatActive?: IChatView;
}>();

const emits = defineEmits(["updateChats"]);
</script>

<style lang="scss" scoped></style>
