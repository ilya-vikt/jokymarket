<template>
  <div
    class="container"
    :class="{
      'is-desktop': globalStore.isDesktop,
      'is-laptop': globalStore.isLaptop,
      'is-tablet': globalStore.isTablet,
      'is-mobile': globalStore.isMobile,
      'is-compact': globalStore.isCompact
    }"
  >
    <AppLayout>
      <RouterView />
    </AppLayout>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { AppLayout } from '@/layouts/';
import { useGlobalStore } from './stores/globalStore';
const globalStore = useGlobalStore();
</script>

<style lang="scss">
@import './assets/styles/style.scss';
</style>
