<template>
  <div class="jm-card">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.jm-card {
  background-color: var(--cl-block);
  padding: $padding-v $padding-h;
  border-radius: $border-radius;
}
</style>
