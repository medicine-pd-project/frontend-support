<template>
  <form class="auth-form" @submit="onSubmit" method="post">
    <div class="font-bold text-3xl text-center mb-8">
      Авторизация для тех. поддержки
    </div>
    <div class="auth-form__error error mb-3" v-if="errorMessage">
      {{ errorMessage }}
    </div>
    <div class="auth-form__fields mb-8">
      <div class="mb-4">
        <FormField
          label="Логин"
          placeholder="Введите логин"
          v-model="state.login"
          :error="errors.login"
        />
      </div>
      <FormField
        label="Пароль"
        placeholder="*********"
        type="password"
        v-model="state.password"
        :error="errors.password"
      />
    </div>
    <UiButton class="auth-form__btn justify-center w-full" bgColor="blue"
      >Продолжить</UiButton
    >
    <!-- <div class="text-center mt-4">Еще не зарегестрированы? Создать аккаунт</div> -->
  </form>
</template>

<script lang="ts" setup>
import formLite from "vue-form-lite";
import { required, maxLength } from "@vue-form-lite/rules";
import type { ILogin } from "~/interfaces/models/user";

const { login } = await useAuth();

const state = ref<ILogin>({
  login: "",
  password: "",
});

const { errors, handleSubmit, setErrors } = formLite({
  state,
  rules: {
    login: {
      required,
      maxLength: maxLength(255),
    },
    password: {
      required,
      maxLength: maxLength(255),
    },
  },
});

const errorMessage = ref<string>();

const onSubmit = handleSubmit(async (values: ILogin) => {
  const resErrors = await login(values);

    errorMessage.value = resErrors;
  // setErrors(convertValuesToString(resErrors?.errors));
});

useHead({
  title: "Вход",
});

definePageMeta({
  layout: "auth",
  middleware: ["no-auth"],
});
</script>

<style lang="scss" scoped>
@use "./../assets/scss/components/auth-form.scss";
</style>
