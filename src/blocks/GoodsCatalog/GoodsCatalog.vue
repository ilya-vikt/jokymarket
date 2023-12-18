<template>
  <div
    v-if="catalogStore.opened"
    class="catalog"
  >
    <div class="catalog__container container">
      <CatalogPrimary
        v-model:selected-category="catalogStore.selectedMainId"
        :goods-categories="catalogStore.mainCategories"
        :is-loading="catalogStore.isLoading"
        class="catalog__primary"
      />
      <CatalogSecondary
        :goods-categories="catalogStore.subCategories"
        :main-category-title="catalogStore.selectedMainTitle"
        :is-loading="catalogStore.isLoading"
        class="catalog__secondary"
      />
      <JmButton
        :icon="CrossIcon"
        class="catalog__close"
        has-hover
        @click="catalogStore.opened = !catalogStore.opened"
        >Закрыть
      </JmButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import CatalogPrimary from './elements/CatalogPrimary.vue';
import CatalogSecondary from './elements/CatalogSecondary.vue';
import JmButton from '@/components/JmButton.vue';
import CrossIcon from '@/components/icons/CrossIcon.vue';
import { useCatalogStore } from '@/stores/catalogStore';

const catalogStore = useCatalogStore();
</script>

<style scoped lang="scss">
.catalog {
  position: fixed;
  top: var(--header-height);
  bottom: 0;
  left: 0;
  width: 100vw;
  padding-right: var(--scrollbar-compensation);
  background-color: var(--cl-bg);

  &__container {
    position: relative;
    display: flex;
    gap: 10px;
    height: 100%;
    padding: $padding-v $padding-h;
  }

  &__primary {
    max-width: 33%;
    min-width: 15%;
  }
  &__secondary {
    flex-grow: 1;
  }

  &__close {
    position: absolute;
    right: $padding-h;
    top: $padding-v;
  }

  @media (max-width: ($containerMaxWidth)) {
    padding-right: 0;
  }
}
</style>
