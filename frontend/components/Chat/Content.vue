<template>
  <div
    class="chat-content__mobile_top flex justify-between pt-2 p-4"
    v-if="$device.isMobile"
  >
    <UiButton bgColor="white" @click="emits('clearChat')">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.08002"
          stroke="#292D32"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>Назад</span>
    </UiButton>
    <div class="">
      <UiButton v-if="chat?.status === ChatTypeEnum.CLOSE" bgColor="grey">
        <span class="opacity-30">Тикет закрыт</span></UiButton
      >
      <UiButton v-else @click="open" bgColor="grey" textColor="text-red"
        >Закрыть тикет</UiButton
      >
    </div>
  </div>
  <div class="chat-content bg-white rounded-xl p-4 flex flex-col h-full">
    <template v-if="chat">
      <div class="chat-content__top flex justify-between px-3 py-4">
        <div
          class="chat-content__short-info grid grow grid-colums grid-cols-3 gap-x-3 md:flex md:gap-x-16"
        >
          <div class="chat-content__short-info_item">
            <div class="opacity-50">ID Заявки</div>
            <div class="font-medium text-xl">#{{ chat?.id }}</div>
          </div>
          <div class="chat-content__short-info_item">
            <div class="opacity-50">Никнейм</div>
            <div class="font-medium text-xl">
              {{ getTgNick(chat?.creatorBy) }}
            </div>
          </div>
          <div class="chat-content__short-info_item">
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
        <div class="" v-if="$device.isDesktopOrTablet">
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

const emits = defineEmits(["addMesasage", "clearChat"]);

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

  &__short-info {
    &_item {
      text-wrap: nowrap;

      .opacity-50 {
        font-size: 15px;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .font-medium.text-xl {
        font-size: 17px;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>
