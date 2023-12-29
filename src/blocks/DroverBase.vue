<template>
  <div
    class="drover"
    @click.self="$emit('closeDrover')"
  >
    <div class="drover__inner">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { setBodyScroll } from '@/utils';
import { onMounted, onUnmounted } from 'vue';

defineProps<{
  panelWidth: string;
}>();

defineEmits<{
  closeDrover: [];
}>();

onMounted(() => setBodyScroll(false));
onUnmounted(() => setBodyScroll(true));
</script>

<style scoped lang="scss">
.drover {
  position: fixed;
  top: var(--header-height);
  left: 0;
  right: 0;
  padding: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);

  &__inner {
    width: v-bind(panelWidth);
    height: 100%;
    padding: $padding-v $padding-h;
    margin-left: auto;
    background-color: var(--cl-bg);
    border-left: 2px solid var(--cl-border);
    overflow-y: auto;
  }
}

.is-mobile .drover__inner {
  border-left-style: none;
}
</style>
