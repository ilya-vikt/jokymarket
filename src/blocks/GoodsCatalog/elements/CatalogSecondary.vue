<template>
  <JmCard class="menu-second">
    <p
      v-if="mainCategoryTitle && !isLoading"
      class="menu-second__category"
    >
      {{ mainCategoryTitle }}
    </p>

    <ul
      v-if="!isLoading"
      class="menu-second__list"
    >
      <li
        v-for="category in goodsCategories"
        :key="category.slug"
        class="menu-second__item"
      >
        <RouterLink
          :to="category.slug"
          class="menu-second__link"
          :style="{
            'background-image': 'url(http://localhost:5173/public/notebook.webp)'
          }"
        >
          <span>{{ category.title }}</span>
        </RouterLink>
      </li>
    </ul>

    <SceletonLoader
      v-else
      :block-count="12"
      :cols="4"
      block-height="200px"
      grid
    />
  </JmCard>
</template>

<script setup lang="ts">
import JmCard from '@/components/JmCard.vue';
import SceletonLoader from '@/blocks/SceletonLoader.vue';
import type { SubGoodsCategory } from '@/types/goodsCategories';

defineProps<{
  goodsCategories: SubGoodsCategory[];
  mainCategoryTitle: string;
  isLoading: boolean;
}>();
</script>

<style scoped lang="scss">
.menu-second {
  &__category {
    font-size: 2rem;
    margin-bottom: $padding-v;
  }
  &__list,
  &__loader {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  &__link {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    padding: $padding-v $padding-h;
    background-color: var(--cl-hover);
    border-radius: $border-radius;
    font-weight: 700;
    font-size: 1.4rem;
    transition: color $animation;
    height: 200px;
    background-position: calc(100% - $padding-h) calc(100% - $padding-v);
    background-repeat: no-repeat;
    background-size: auto 70%;

    &:hover {
      color: var(--cl-text-hover);
    }
  }

  &__img {
    width: 50%;
  }
}
</style>
