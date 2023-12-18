<template>
  <div class="jm-loader"></div>
</template>

<style lang="scss" scoped>
@keyframes bg {
  0% {
    background-position: -35% 0;
  }
  50%,
  100% {
    background-position: -165% 0;
  }
}
.jm-loader {
  border-radius: $border-radius;
  background-color: var(--cl-hover);
  background-repeat: no-repeat;
  background: linear-gradient(
    -45deg,
    var(--cl-hover) 0%,
    var(--cl-hover) 45%,
    rgba(255, 255, 255, 0.3) 50%,
    var(--cl-hover) 55%,
    var(--cl-hover) 100%
  );
  background-size: 300% 100%;
  background-position: 0% 0;
  animation: bg 5s linear infinite;
  opacity: 0.3;
}
</style>
