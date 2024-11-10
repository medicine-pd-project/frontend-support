<template>
  <div
    class="message"
    :class="{
      is_my: message?.type === 'OUT',
    }"
    :id="`messageArea-${message?.id}`"
  >
    <div class="message__content flex items-end gap-x-3">
      <div class="message__text">{{ message?.text }}</div>
      <div class="message__time">
        {{
          moment(convertToMilliseconds(message?.createdAt)).format("DD HH:mm")
        }}
      </div>
    </div>
    <!-- <div class="message__images" v-if="message?.images?.length">
      <img
        class="message__img"
        v-for="image in message?.images"
        :src="image?.image?.path_webp"
        alt=""
        v-lazy-load
        decoding="async"
        loading="lazy"
        width="144"
        height="96"
      />
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import moment from "moment";
import type { IMessageView } from "~/interfaces/models/message";

const props = defineProps<{
  message: IMessageView;
}>();

const user = useState("user");
</script>

<style lang="scss" scoped>
.message {
  background-color: var(--main-background);
  border-radius: 12px;
  padding: 12px 16px;
  width: fit-content;

  &.is_my {
    background-color: var(--color-blue);
    color: var(--color-white);
    margin-left: auto;
  }

  &__time {
    font-size: 13px;
    opacity: 0.6;
  }

  // &__img {
  //   object-fit: cover;
  // }

  // &__images {
  //   display: flex;
  //   flex-wrap: wrap;
  //   grid-gap: 4px;
  //   margin-top: 6px;
  // }
}
</style>
