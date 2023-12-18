<template>
  <main class="main">
    <GoodsList
      :goods-list="data"
      :cols="5"
    />
  </main>
</template>

<script setup lang="ts">
import GoodsList from '@/widgets/GoodsList.vue';
import goodsData from '@/mocks/goods';

const data = goodsData;
</script>
