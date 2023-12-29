<template>
  <JmCard class="menu-second">
    <component
      :is="isCompact ? RouterLink : 'p'"
      v-if="catalogStore.primaryTitle && !catalogStore.isLoading"
      ref="catTitle"
      :to="catalogStore.primaryHref"
      class="menu-second__category"
    >
      {{ catalogStore.primaryTitle }}
    </component>
    <ul
      v-if="!catalogStore.isLoading"
      class="menu-second__list"
    >
      <li
        v-for="category in catalogStore.secondaryCategories"
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
      :block-count="cols"
      :cols="cols"
      block-height="200px"
      grid
    />
  </JmCard>
</template>

<script setup lang="ts">
import JmCard from '@/components/JmCard.vue';
import SceletonLoader from '@/blocks/SceletonLoader.vue';
import { useResizeObserver } from '@vueuse/core';
import { onMounted, ref } from 'vue';
import { useCatalogStore } from '@/stores/catalogStore';
import { RouterLink } from 'vue-router';

defineProps<{
  isCompact: boolean;
  cols: number;
}>();

const catalogStore = useCatalogStore();

//We need to know a height of the primary title to calc a height of the list to make scroll
//
const catTitle = ref(null);
const catTitleHeight = ref('0px');
onMounted(() => {
  useResizeObserver(catTitle, (entries) => {
    catTitleHeight.value = `${entries[0].contentRect.height}px`;
  });
});
</script>

<style scoped lang="scss">
.menu-second {
  position: relative;

  &__category {
    font-size: 2rem;
    margin-bottom: $padding-v;
    display: block;
    max-width: calc(100% - 120px);
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(v-bind(cols), 1fr);
    gap: 10px;
    max-height: calc(100% - $padding-v - v-bind(catTitleHeight));
    overflow-y: auto;
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

.is-mobile .menu-second {
  border-radius: 0;
}
</style>
