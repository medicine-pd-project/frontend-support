<template>
  <div class="flex  lg:p-8 min-h-screen">
    <div
      class="auth bg-white rounded-3xl flex flex-col grow items-center justify-center relative px-4"
    >
      <div class="auth__logo absolute top-6">
        <IconLogo />
      </div>
      <div class="auth__inner w-full">
        <slot />
      </div>
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
