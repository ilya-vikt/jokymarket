<template>
  <main class="main">
    <MainPageGoods
      :goods-list="data"
      :cols="5"
    />
  </main>
</template>

<script setup lang="ts">
import MainPageGoods from '@/widgets/MainPageGoods.vue';
import goodsData from '@/mocks/goods';

const data = goodsData;
</script>
