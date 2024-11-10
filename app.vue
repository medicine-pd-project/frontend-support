<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <!-- <VitePwaManifest /> -->
</template>

<script lang="ts" setup>
await import("vue-toastification/dist/index.css");
await import("moment/dist/locale/ru");
// import moment from "moment";

// const { accessToken, user, getUser } = await useAuth();
// if (accessToken.value && !user.value) {
//   await getUser();
// }

// moment.updateLocale("ru", {
//   week: {
//     dow: 1,
//   },
// });
</script>
