<template>
  <ul
    :style="listDynamicStyles"
    class="goods-list"
  >
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

const props = defineProps<{
  goodsList: GoodsCardDto[];
  cols: number;
}>();

const listDynamicStyles = computed(() => ({
  'grid-template-columns': `repeat(${props.cols}, 1fr)`
}));
</script>

<style scoped lang="scss">
.goods-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;

  &__card {
    height: 100%;
  }
}
</style>
