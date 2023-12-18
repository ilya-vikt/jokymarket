<template>
  <component
    :is="baseComponent"
    :to="to"
    class="jm-button"
    :class="{
      'jm-button--vertical': vertical,
      'jm-button--bordered': hasBorder,
      'jm-button--has-hover': hasHover,
      'jm-button--pushed': pushed
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
    hasBorder?: boolean;
    hasHover?: boolean;
    pushed?: boolean;
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
  transition:
    opacity $animation,
    background-color $animation,
    color $animation;
  border-radius: $border-radius;
  letter-spacing: inherit;

  &:disabled {
    opacity: 0.3;
  }

  &--vertical {
    flex-direction: column;
  }

  &--bordered {
    border: 2px solid var(--cl-border);
  }

  &--has-hover:hover,
  &--pushed {
    background-color: var(--cl-hover);
    color: var(--cl-text-hover);
  }
}
</style>
