<template>
  <div class="chat-content flex flex-col h-full">
    <template v-if="chat">
      <div class="chat-content__top flex justify-between px-3 py-4">
        <div class="flex gap-x-16">
          <div class="">
            <div class="opacity-50">ID Заявки</div>
            <div class="font-medium text-xl">#{{ chat?.id }}</div>
          </div>
          <div class="">
            <div class="opacity-50">Никнейм</div>
            <div class="font-medium text-xl">
              {{ getTgNick(chat?.creatorBy) }}
            </div>
          </div>
          <div class="">
            <div class="opacity-50">Дата создания</div>
            <div class="font-medium text-xl">
              {{
                chat?.createdAt &&
                moment(convertToMilliseconds(chat.createdAt)).format(
                  "DD.MM.YYYY"
                )
              }}
            </div>
          </div>
        </div>
        <div class="">
          <UiButton v-if="chat?.status === ChatTypeEnum.CLOSE" bgColor="grey">
            <span class="opacity-30">Тикет закрыт</span></UiButton
          >
          <UiButton v-else @click="open" bgColor="grey" textColor="text-red"
            >Закрыть тикет</UiButton
          >
        </div>
      </div>

      <MessageList :messages="chat?.messages" />

      <form class="chat-content__form flex gap-x-4 mt-10" @submit="onSubmit">
        <div class="grow">
          <FormField v-model="state.text" placeholder="Ваше сообщение..." />
        </div>
        <UiButton class="chat-content__form_btn text-2xl" bgColor="blue">
          <IconChatArrow />
        </UiButton>
      </form>
    </template>
    <div class="font-weight flex grow items-center justify-center" v-else>
      Выберите чат
    </div>
  </div>
  <LazyUiModalConfirm
    v-if="chat?.status !== ChatTypeEnum.CLOSE"
    :name="nameModal"
    @confirm="closeChat"
    @cancel="close"
  >
    Вы действительно хотите закрыть заявку
    <span class="color-blue">#{{ chat?.id }}</span
    >?
  </LazyUiModalConfirm>
</template>

<script lang="ts" setup>
import moment from "moment";
import formLite from "vue-form-lite";
import { required } from "@vue-form-lite/rules";
import api from "~/api";
import { ChatTypeEnum, type IChatView } from "~/interfaces/models/chat";
import {
  MessageTypeEnum,
  type IMessageView,
} from "~/interfaces/models/message";

const props = defineProps<{
  chat?: IChatView;
  // messages?: IMessageView[];
  closeChat: Function;
}>();

const emits = defineEmits(["addMesasage"]);

const nameModal = "chat-close";
const { open, close } = useModal({
  name: nameModal,
});

const closeChat = async () => {
  await props.closeChat(props.chat);

  close();
};

// const messages = ref(props.messages);

const scrollToBottom = () =>
  nextTick(() => {
    const messageArea = document.querySelector(
      "#messageArea-" + props.chat?.messages?.[0]?.id
    );

    messageArea?.scrollIntoView?.();
  });

onMounted(() => {
  scrollToBottom();
});

watch(
  () => props.chat,
  (cur, pre) => {
    // messages.value = cur?.messages;
    if (cur?.messages?.length !== pre?.messages?.length) {
      scrollToBottom();
    }
  }
);

// watch(
//   () => props.chat?.messages?.length,
//   () => {
//     console.log(5);
//     // messages.value = props.messages;
//   }
// );

// watch(
//   () => props.messages?.length,
//   () => {
//     messages.value = props.chat?.messages;
//     scrollToBottom();
//   }
// );

const state = ref({
  text: "",
});

const { handleSubmit } = formLite({
  state,
  rules: {
    text: {
      required,
    },
  },
});

const onSubmit = handleSubmit(async (values: { text: string }) => {
  if (!props.chat?.id) return;

  const data = {
    chatId: props.chat.id,
    ...values,
  };
  const res = await api.messages.create({
    data,
  });

  state.value.text = "";

  emits("addMesasage", res);
});
</script>

<style lang="scss" scoped>
.chat-content {
  &__top {
    border-bottom: 1px solid rgba(236, 236, 236, 1);
  }

  &__form {
    &_btn {
      padding: 18px;
    }
  }
}
</style>
