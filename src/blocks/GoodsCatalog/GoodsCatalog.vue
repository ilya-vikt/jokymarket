<template>
  <div
    v-if="catalogStore.opened"
    class="catalog"
  >
    <div class="catalog__container container">
      <CatalogPrimary
        v-if="primaryShow"
        :is-compact="globalStore.isCompact"
        class="catalog__primary"
      />

      <CatalogSecondary
        v-if="secondaryShow"
        :is-compact="globalStore.isCompact"
        :cols="colsCount"
        class="catalog__secondary"
      />
      <JmButton
        v-if="globalStore.isCompact && catalogStore.stage === 'secondary'"
        :icon="ArrowLeftIcon"
        class="catalog__btn"
        has-hover
        @click="catalogStore.stage = 'primary'"
      >
        <template
          v-if="!globalStore.isMobile"
          #default
        >
          Назад
        </template>
      </JmButton>
      <JmButton
        v-else
        :icon="CrossIcon"
        class="catalog__btn"
        has-hover
        @click="catalogStore.opened = !catalogStore.opened"
      >
        <template
          v-if="!globalStore.isMobile"
          #default
        >
          Закрыть
        </template>
      </JmButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import CatalogPrimary from './elements/CatalogPrimary.vue';
import CatalogSecondary from './elements/CatalogSecondary.vue';
import JmButton from '@/components/JmButton.vue';
import { ArrowLeftIcon, CrossIcon } from '@/components/icons/';
import { useCatalogStore } from '@/stores/catalogStore';
import { useGlobalStore } from '@/stores/globalStore';
import { computed } from 'vue';

const catalogStore = useCatalogStore();
const globalStore = useGlobalStore();

const colsCount = computed<number>(() => {
  if (globalStore.isDesktop) return 4;
  if (globalStore.isLaptop) return 3;
  if (globalStore.isTablet) return 2;
  return 1; //mobile
});

const primaryShow = computed(() => catalogStore.stage === 'primary' || !globalStore.isCompact);
const secondaryShow = computed(() => catalogStore.stage === 'secondary' || !globalStore.isCompact);
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

  &__btn {
    position: absolute;
    right: $padding-h;
    top: $padding-v;
  }

  @media (max-width: ($containerMaxWidth)) {
    padding-right: 0;
  }
}

.is-mobile .catalog__container {
  padding: 0;
}

.is-compact .catalog__primary {
  max-width: none;
  flex-grow: 1;
  padding-top: calc($padding-v + 1.2rem);
}
</style>
