<template>
  <div class="categories-select form-block">
    <div class="categories-select__label">Выберите категорию</div>
    <div class="categories-select__list">
      <div
        v-for="item in dataSelectedType"
        :key="item.id"
        class="categories-select__item"
        :class="{
          active: item.id === selectedId,
        }"
        @click="selectedId = item.id"
        :style="{ '--ui-color': item.color }"
      >
        <UiIcon :color="item.color" />
        <div class="categories-select__title">{{ item.title }}</div>
      </div>
    </div>
    <div v-if="error" class="categories-select__error error">{{ error }}</div>
    <template v-else-if="$slots.label">
      <slot name="error"></slot>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type {
  ICategoryView,
  EnumCategoryType,
} from "~/interfaces/models/category";

const emits = defineEmits(["update:modelValue"]);

const props = defineProps<{
  error?: Ref<string> | string;
  modelValue?: number | null;
  type?: EnumCategoryType;
}>();

const selectedId = ref<number | null | undefined>(props.modelValue);

const { data, get } = await useApi<ICategoryView>({
  apiName: "categories",
  apiMethod: "getAll",
});

await get();

const dataSelectedType = computed(() =>
  props.type !== undefined
    ? data.value?.filter((item: ICategoryView) => item?.type === props.type)
    : data.value
);

watch(
  () => selectedId.value,
  (newV) => {
    emits("update:modelValue", newV);
  }
);
</script>

<style lang="scss" scoped>
.categories-select {
  &__list {
    display: grid;
    grid-gap: 4px;
    grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
  }

  &__item {
    cursor: pointer;
    display: flex;
    align-items: center;
    column-gap: 8px;
    transition: 0.3s;
    width: fit-content;

    &:active {
      transform: scale(0.95);
    }

    &.active {
      color: var(--ui-color);
    }
  }

  // &__icon {
  //   background-color: var(--ui-color);
  //   border-radius: 50%;
  //   flex-shrink: 0;
  //   width: 16px;
  //   height: 16px;
  // }

  &__title {
    font-size: 15px;
  }
}
</style>
