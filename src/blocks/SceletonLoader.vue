<template>
  <div
    class="sceleton-loader"
    :class="{
      'sceleton-loader--grid': grid
    }"
  >
    <JmLoader
      v-for="idx in blockCount"
      :key="idx"
      class="sceleton-loader__block"
    />
  </div>
</template>

<script setup lang="ts">
import JmLoader from '@/components/JmLoader.vue';
withDefaults(
  defineProps<{
    grid?: boolean;
    blockHeight?: string;
    cols?: number;
    blockCount: number;
  }>(),
  {
    cols: 1,
    blockHeight: 'calc(1.2rem + 20px)'
  }
);
</script>

<style scoped lang="scss">
.sceleton-loader {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__block {
    height: v-bind(blockHeight);
  }

  &--grid {
    display: grid;
    grid-template-columns: repeat(v-bind(cols), 1fr);
  }
}
</style>
