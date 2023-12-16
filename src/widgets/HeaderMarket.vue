<template>
  <HeaderBase class="market-header">
    <NavbarHeader class="market-header__navbar" />
  </HeaderBase>
</template>

<script setup lang="ts">
import HeaderBase from '@/blocks/HeaderBase.vue';
import NavbarHeader from '@/blocks/NavbarHeader.vue';
</script>
<style scoped lang="scss">
.market-header {
  justify-content: flex-end;
}
</style>
