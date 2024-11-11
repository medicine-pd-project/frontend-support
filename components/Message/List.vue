<template>
  <div class="messages" ref="messagesTag">
    <div class="messages__inner">
      <template v-for="(message, index) in messages">
        <MessageItem :message="message" />
        <div
          class="messages__time"
          :style="{ zIndex: messages?.length - index }"
          v-if="
            moment(convertToMilliseconds(message?.createdAt)).format(
              'YYYY-MM-DD'
            ) !==
            moment(
              convertToMilliseconds(messages?.[index + 1]?.createdAt)
            ).format('YYYY-MM-DD')
          "
        >
          {{
            dateTimeUsabilityFormat(convertToMilliseconds(message?.createdAt))
          }}
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import moment from "moment";
import type { IMessageView } from "~/interfaces/models/message";

const props = defineProps<{
  messages?: IMessageView[];
  // scrollAddMessages: Function,
  // isTotalMessagesPages: Boolean,
}>();

// const messagesTag = ref();
// const scrollChange = throttle(() => {
//   if (messagesTag.value.scrollTop < 50) {
//     props?.scrollAddMessages?.();
//   }
// }, 400);

// onMounted(() => {
//   messagesTag.value?.addEventListener("scroll", scrollChange);
// });

// onUnmounted(() => {
//   messagesTag.value?.removeEventListener("scroll", scrollChange);
// });

// const totalPageStopWatch = watch(
//   () => props.isTotalMessagesPages,
//   () => {
//     messagesTag.value?.removeEventListener("scroll", scrollChange);
//     totalPageStopWatch();
//   }
// );
</script>

<style lang="scss" scoped>
.messages {
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;

  &__inner {
    display: flex;
    flex-direction: column-reverse;
    row-gap: 8px;
  }

  &__time {
    background-color: var(--color-white);
    border-radius: 4px;
    font-size: 12px;
    line-height: 1;
    padding: 4px;
    position: sticky;
    top: 24px;
    margin: 0 auto;
    width: fit-content;
  }
}
</style>
