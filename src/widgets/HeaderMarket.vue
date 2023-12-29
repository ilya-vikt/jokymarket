<template>
  <HeaderBase class="market-header">
    <div class="market-header__inner">
      <div class="market-header__left">
        <JmButton
          :icon="CatalogIcon"
          has-border
          has-hover
          :pushed="catalogStore.opened"
          @click="catalogToggle"
        >
          Каталог
        </JmButton>
      </div>
      <JmButton
        v-if="globalStore.isCompact"
        :icon="globalStore.droverOpened ? CrossIcon : BurgerIcon"
        has-hover
        class="market-header__burger"
        @click="menuToggle"
      ></JmButton>
      <NavbarHeader
        v-if="!globalStore.isCompact"
        class="market-header__navbar"
      />
    </div>
    <GoodsCatalog />
    <DroverBase
      v-if="globalStore.droverOpened && globalStore.isCompact"
      :panel-width="droverWidth"
      @closeDrover="globalStore.droverOpened = false"
    >
      <BurgerMenu />
    </DroverBase>
  </HeaderBase>
</template>

<script setup lang="ts">
import HeaderBase from '@/blocks/HeaderBase.vue';
import NavbarHeader from '@/blocks/NavbarHeader.vue';
import GoodsCatalog from '@/blocks/GoodsCatalog/GoodsCatalog.vue';
import JmButton from '@/components/JmButton.vue';
import CatalogIcon from '@/components/icons/CatalogIcon.vue';
import { useCatalogStore } from '@/stores/catalogStore';
import BurgerIcon from '@/components/icons/BurgerIcon.vue';
import CrossIcon from '@/components/icons/CrossIcon.vue';
import { useGlobalStore } from '@/stores/globalStore';
import { computed, watch } from 'vue';
import DroverBase from '@/blocks/DroverBase.vue';
import BurgerMenu from '@/blocks/BurgerMenu.vue';

const catalogStore = useCatalogStore();
const globalStore = useGlobalStore();
const droverWidth = computed(() => (globalStore.isMobile ? '100%' : '50%'));

const catalogToggle = () => {
  if (globalStore.droverOpened && !catalogStore.opened) {
    globalStore.droverOpened = false;
  }

  catalogStore.opened = !catalogStore.opened;
};

const menuToggle = () => {
  if (catalogStore.opened && !globalStore.droverOpened) {
    catalogStore.opened = false;
  }

  globalStore.droverOpened = !globalStore.droverOpened;
};

watch(
  () => globalStore.isCompact,
  () => {
    if (!globalStore.isCompact) {
      globalStore.droverOpened = false;
    }
  }
);
</script>
<style scoped lang="scss">
.market-header {
  &__inner {
    justify-content: space-between;
    display: flex;
  }

  &__left {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__burger {
    margin-top: $padding-v;
    margin-bottom: $padding-v;
  }
}
</style>
