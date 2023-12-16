<template>
  <component
    :is="baseComponent"
    :to="to"
    class="jm-button"
    :class="{
      'jm-button--vertical': vertical
    }"
  >
    <component
      :is="icon"
      v-if="icon"
      :width="iconSize"
      :height="iconSize"
      class="jm-button__icon"
    />
    <span class="jm-button__content">
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { computed } from 'vue';
const props = withDefaults(
  defineProps<{
    icon?: Object;
    vertical?: boolean;
    iconSize?: number | string;
    to?: string;
  }>(),
  {
    vertical: false,
    iconSize: '1em'
  }
);

const baseComponent = computed(() => (props.to ? RouterLink : 'button'));
</script>

<style scoped lang="scss">
.jm-button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: $padding-v $padding-h;
  line-height: 1;
  transition: opacity 0.2s linear;
  border-radius: $border-radius;
  letter-spacing: inherit;

  &:disabled {
    opacity: 0.3;
  }

  &--vertical {
    flex-direction: column;
  }
}
</style>
