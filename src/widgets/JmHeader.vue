<template>
  <header class="header"><slot /></header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: teal;
  padding: $padding-v $padding-h;
  background-color: var(--cl-block);
  border-bottom: 1px solid var(--cl-border);
}
</style>
