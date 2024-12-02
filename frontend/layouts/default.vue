<template>
  <div class="panel flex flex-col md:pt-4 md:px-8 md:pb-5 min-h-screen">
    <div class="flex items-center justify-between pt-2 p-4 md:mb-3 md:p-0">
      <IconLogo />
      <div class="bg-white rounded-xl flex items-center gap-x-2 p-2 pl-5">
        <span>Admin</span>
        <UiButton class="px-2 py-2 md:px-3 md:py-3" @click="open">
          <IconExit />
        </UiButton>
      </div>
    </div>
    <div class="panel__inner grid grow">
      <slot />
    </div>
  </div>
  <LazyUiModalConfirm
    :name="modalName"
    btnConfirmText="Выйти"
    @confirm="logout"
    @cancel="close"
    >Вы действительно хотите выйти из аккаунта?</LazyUiModalConfirm
  >
</template>

<script lang="ts" setup>
const modalName = "exit";

const { open, close } = useModal({
  name: modalName,
});

const { logout } = await useAuth();
</script>

<style lang="scss" scoped>
.auth {
  &__inner {
    max-width: 580px;
  }
}
</style>
