<template>
  <JmCard class="menu-main">
    <SceletonLoader
      v-if="catalogStore.isLoading"
      :block-count="5"
    />
    <ul v-else>
      <li
        v-for="category in catalogStore.catalog"
        :key="category.id"
        class="menu-main__item"
      >
        <component
          :is="isCompact ? 'button' : RouterLink"
          :to="catalogStore.primaryHref"
          :class="{
            'menu-main__link--selected': category.id === catalogStore.primaryCategory?.id
          }"
          class="menu-main__link"
          @pointerenter="selectHandler(category, 'hover')"
          @click="selectHandler(category, 'click')"
          >{{ category.title }}
        </component>
      </li>
    </ul>
  </JmCard>
</template>

<script setup lang="ts">
import type { GoodsCategory } from '@/types/goodsCategories';
import JmCard from '@/components/JmCard.vue';
import SceletonLoader from '@/blocks/SceletonLoader.vue';
import { RouterLink } from 'vue-router';
import { useCatalogStore } from '@/stores/catalogStore';

const props = defineProps<{
  isCompact: boolean;
}>();

const catalogStore = useCatalogStore();

const selectHandler = (category: GoodsCategory, e: 'hover' | 'click') => {
  if ((props.isCompact && e === 'click') || (!props.isCompact && e === 'hover')) {
    catalogStore.primaryCategory = category;
    catalogStore.stage = 'secondary';
  }
};
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
    @include mouse-hover-effect;

    &--selected {
      color: var(--cl-text-hover);
    }
  }
}

.is-mobile .menu-main {
  border-radius: 0;
}
</style>
