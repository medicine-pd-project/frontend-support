<template>
  <div class="panel flex flex-col pt-4 px-8 pb-5 min-h-screen">
    <div class="flex items-center justify-between mb-3">
      <IconLogo />
      <div class="bg-white rounded-xl flex items-center gap-x-2 p-2 pl-5">
        <span>Admin</span>
        <UiButton class="px-3 py-3">
          <IconExit />
        </UiButton>
      </div>
    </div>
    <div class="panel__inner grid grow">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auth {
  &__inner {
    max-width: 580px;
  }
}
</style>
