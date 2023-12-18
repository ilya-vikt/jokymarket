<template>
  <HeaderBase class="market-header">
    <div class="market-header__inner">
      <div class="market-header__left">
        <JmButton
          :icon="CatalogIcon"
          has-border
          has-hover
          :pushed="catalogOpened"
          @click="catalogOpened = !catalogOpened"
        >
          Каталог
        </JmButton>
      </div>

      <NavbarHeader class="market-header__navbar" />
    </div>
    <GoodsCatalog />
  </HeaderBase>
</template>

<script setup lang="ts">
import HeaderBase from '@/blocks/HeaderBase.vue';
import NavbarHeader from '@/blocks/NavbarHeader.vue';
import GoodsCatalog from '@/blocks/GoodsCatalog/GoodsCatalog.vue';
import JmButton from '@/components/JmButton.vue';
import CatalogIcon from '@/components/icons/CatalogIcon.vue';
import { useCatalogStore } from '@/stores/catalogStore';
import { storeToRefs } from 'pinia';

const { opened: catalogOpened } = storeToRefs(useCatalogStore());
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
}
</style>
