<template>
  <div class="container">
    <AppLayout>
      <RouterView />
    </AppLayout>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { AppLayout } from '@/layouts/';
</script>

<style lang="scss">
@import './assets/styles/style.scss';
</style>
