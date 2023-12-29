<template>
  <ul class="goods-list">
    <li
      v-for="goods in goodsList"
      :key="goods.id"
      class="goods-list__item"
    >
      <RouterLink to="/">
        <GoodsCard
          :img="goods.img"
          :alt="goods.alt"
          :description="goods.description"
          :price="goods.price"
          :title="goods.title"
          class="goods-list__card"
        />
      </RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import GoodsCard from '@/blocks/GoodsCard.vue';
import type { GoodsCardDto } from '@/types/goodsCard';
import { computed } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';

defineProps<{
  goodsList: GoodsCardDto[];
}>();

const globalStore = useGlobalStore();

const colsCount = computed(() => {
  if (globalStore.isDesktop) return 4;
  if (globalStore.isLaptop) return 3;
  if (globalStore.isTablet) return 2;
  return 1; //mobile
});
</script>

<style scoped lang="scss">
.goods-list {
  display: grid;
  grid-template-columns: repeat(v-bind(colsCount), 1fr);
  gap: 15px;

  &__card {
    height: 100%;
  }
}
</style>
