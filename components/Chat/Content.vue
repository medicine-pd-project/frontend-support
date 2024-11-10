<template>
  <div class="chat-content flex flex-col h-full">
    <div class="chat-content__top flex justify-between">
      <div class="flex gap-x-16">
        <div class="">
          <div class="opacity-50">ID Заявки</div>
          <div class="font-medium text-xl">#{{ chat?.id }}</div>
        </div>
        <div class="">
          <div class="opacity-50">Никнейм</div>
          <div class="font-medium text-xl">{{ chat?.creatorBy }}</div>
        </div>
        <div class="">
          <div class="opacity-50">Дата создания</div>
          <div class="font-medium text-xl">
            {{
              moment(convertToMilliseconds(chat?.createdAt)).format(
                "DD.MM.YYYY"
              )
            }}
          </div>
        </div>
      </div>
      <div class="">
        <UiButton bgColor="grey">Закрыть тикет</UiButton>
      </div>
    </div>

    <MessageList :messages="messages" />

    <form class="chat-content__form flex gap-x-4 mt-10" @submit="onSubmit">
      <div class="grow">
        <FormField name="text" placeholder="Ваше сообщение..." />
      </div>
      <UiButton class="text-2xl px-4 py-3" bgColor="blue">→</UiButton>
    </form>
  </div>
</template>

<script lang="ts" setup>
import moment from "moment";
import formLite from "vue-form-lite";
import type { IChatView } from "~/interfaces/models/chat";
import type { IMessageView } from "~/interfaces/models/message";

const props = defineProps<{
  chat: IChatView;
  messages?: IMessageView[];
}>();

const messages = ref(props.messages);

const scrollToBottom = () =>
  nextTick(() => {
    const messageArea = document.querySelector(
      "#messageArea-" + messages.value?.[0]?.id
    );

    messageArea?.scrollIntoView?.();
  });

onMounted(() => {
  scrollToBottom();
});

watch(
  () => props.chat,
  (cur) => {
    messages.value = cur?.messages;
    scrollToBottom();
  }
);

const state = ref({
  login: "",
  password: "",
});

const { errors, handleSubmit, setErrors } = formLite({
  state,
  // rules: {
  //   login: {
  //     email,
  //     required,
  //     maxLength: maxLength(255),
  //   },
  //   password: {
  //     required,
  //     maxLength: maxLength(255),
  //   },
  // },
});

const onSubmit = handleSubmit(async () => {});
</script>

<style lang="scss" scoped>
.chat-content {
  &__top {
    border-bottom: 1px solid rgba(236, 236, 236, 1);
  }
}
</style>
