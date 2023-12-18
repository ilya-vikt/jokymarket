<template>
  <JmCard>
    <SceletonLoader
      v-if="isLoading"
      :block-count="5"
    />
    <ul
      v-else
      class="menu-main"
    >
      <li
        v-for="category in goodsCategories"
        :key="category.id"
        class="menu-main__item"
      >
        <RouterLink
          :to="category.slug"
          :class="{
            'menu-main__link--selected': category.id === selectedCategory
          }"
          class="menu-main__link"
          @pointerenter="emit('update:selectedCategory', category.id)"
          >{{ category.title }}
        </RouterLink>
      </li>
    </ul>
  </JmCard>
</template>

<script setup lang="ts">
import JmCard from '@/components/JmCard.vue';
import type { MainGoodsCategory } from '@/types/goodsCategories';
import SceletonLoader from '@/blocks/SceletonLoader.vue';

defineProps<{
  goodsCategories: MainGoodsCategory[];
  selectedCategory: number | null;
  isLoading: boolean;
}>();

const emit = defineEmits<{
  'update:selectedCategory': [selectedCategory: number];
}>();
</script>

<style scoped lang="scss">
.menu-main {
  &__item {
    display: flex;
  }

  &__link {
    padding: 10px;
    flex-grow: 1;
    border-radius: 5px;
    @extend %hover-effect;

    &--selected {
      color: var(--cl-text-hover);
    }
  }
}
</style>
