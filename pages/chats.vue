<template>
  <div class="chats flex gap-x-6">
    <div class="bg-white flex flex-col p-5">
      <ChatClosed />
      <ChatList
        :chats="data?.chats"
        :chatActive="chatActive"
        @updateChats="(val) => (chatActive = val)"
      />
    </div>
    <div class="bg-white grow p-4">
      <ChatContent :chat="chatActive" :messages="chatActive?.messages" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IChatView } from "~/interfaces/models/chat";

const { data } = await useApi<{ chats: IChatView[] }>({
  apiName: "chats",
  apiMethod: "getAll",
  // init: true,
});

data.value = {
  chats: [
    {
      id: 2,
      messages: [
        {
          id: 3,
          chatId: 2,
          createdAt: 1731171338,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: "До",
          type: "IN",
        },
        {
          id: 6,
          chatId: 2,
          createdAt: 1731171494,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: "От",
          type: "IN",
        },
      ],
      creatorBy: "Матвей Никишаев nik_is_lost",
      createdAt: 1731171338,
      status: "CLOSE",
    },
    {
      id: 4,
      messages: [
        {
          id: 7,
          chatId: 4,
          createdAt: 1731171519,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: "Эх бля",
          type: "IN",
        },
        {
          id: 8,
          chatId: 4,
          createdAt: 1731171606,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: "Алла",
          type: "IN",
        },
      ],
      creatorBy: "Матвей Никишаев nik_is_lost",
      createdAt: 1731171519,
      status: "OPEN",
    },
    {
      id: 1,
      messages: [
        {
          id: 1,
          chatId: 1,
          createdAt: 1731171310,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: "Памаги",
          type: "IN",
        },
        {
          id: 2,
          chatId: 1,
          createdAt: 1731171323,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: "string",
          type: "OUT",
        },
        {
          id: 10,
          chatId: 1,
          createdAt: 1731173761,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 11,
          chatId: 1,
          createdAt: 1731173762,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
      ],
      creatorBy: "Матвей Никишаев nik_is_lost",
      createdAt: 1731171310,
      status: "IN_WORK",
    },
    {
      id: 3,
      messages: [
        {
          id: 4,
          chatId: 3,
          createdAt: 1731171434,
          createdBy: "Klim NoLastName goner_friend",
          text: "/start",
          type: "IN",
        },
        {
          id: 5,
          chatId: 3,
          createdAt: 1731171448,
          createdBy: "Klim NoLastName goner_friend",
          text: "Э баля",
          type: "IN",
        },
        {
          id: 9,
          chatId: 3,
          createdAt: 1731173755,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 12,
          chatId: 3,
          createdAt: 1731173767,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 13,
          chatId: 3,
          createdAt: 1731173767,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 14,
          chatId: 3,
          createdAt: 1731173768,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 15,
          chatId: 3,
          createdAt: 1731173769,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 16,
          chatId: 3,
          createdAt: 1731173770,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 17,
          chatId: 3,
          createdAt: 1731173771,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 18,
          chatId: 3,
          createdAt: 1731173773,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 19,
          chatId: 3,
          createdAt: 1731173774,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 20,
          chatId: 3,
          createdAt: 1731173776,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 21,
          chatId: 3,
          createdAt: 1731173777,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 22,
          chatId: 3,
          createdAt: 1731173778,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 23,
          chatId: 3,
          createdAt: 1731173780,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 24,
          chatId: 3,
          createdAt: 1731173781,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 25,
          chatId: 3,
          createdAt: 1731173782,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 26,
          chatId: 3,
          createdAt: 1731173783,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 27,
          chatId: 3,
          createdAt: 1731173784,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 28,
          chatId: 3,
          createdAt: 1731173785,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 29,
          chatId: 3,
          createdAt: 1731173785,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 30,
          chatId: 3,
          createdAt: 1731173786,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 31,
          chatId: 3,
          createdAt: 1731173787,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 32,
          chatId: 3,
          createdAt: 1731173788,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 33,
          chatId: 3,
          createdAt: 1731173789,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 34,
          chatId: 3,
          createdAt: 1731173790,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 35,
          chatId: 3,
          createdAt: 1731173791,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 36,
          chatId: 3,
          createdAt: 1731173792,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 37,
          chatId: 3,
          createdAt: 1731173793,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 38,
          chatId: 3,
          createdAt: 1731173794,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 39,
          chatId: 3,
          createdAt: 1731173795,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 40,
          chatId: 3,
          createdAt: 1731173796,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 41,
          chatId: 3,
          createdAt: 1731173796,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 42,
          chatId: 3,
          createdAt: 1731173797,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 43,
          chatId: 3,
          createdAt: 1731173797,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 44,
          chatId: 3,
          createdAt: 1731173798,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 45,
          chatId: 3,
          createdAt: 1731173799,
          createdBy: "Матвей Никишаев nik_is_lost",
          text: ".!.",
          type: "OUT",
        },
        {
          id: 46,
          chatId: 3,
          createdAt: 1731177949,
          createdBy: "Klim NoLastName goner_friend",
          text: "/start",
          type: "IN",
        },
        {
          id: 47,
          chatId: 3,
          createdAt: 1731177957,
          createdBy: "Klim NoLastName goner_friend",
          text: "Але бля",
          type: "IN",
        },
        {
          id: 48,
          chatId: 3,
          createdAt: 1731185544,
          createdBy: "Klim NoLastName goner_friend",
          text: "/start",
          type: "IN",
        },
      ],
      creatorBy: "Klim NoLastName goner_friend",
      createdAt: 1731171434,
      status: "IN_WORK",
    },
  ],
};

const chatActive = ref(data.value?.chats?.[0]);
</script>

<style lang="scss" scoped>
.chats {
  height: 100%;
  max-height: calc(100vh - 64px - 12px - 16px - 20px);
}
</style>
