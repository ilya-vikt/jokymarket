<template>
  <ul class="header-navbar">
    <li class="header-navbar__item">
      <JmButton
        class="header-navbar__btn"
        :icon="ParcelIcon"
        :icon-size="24"
        to="/"
        vertical
      >
        Доставки
      </JmButton>
    </li>
    <li>
      <JmButton
        class="header-navbar__btn"
        :icon="HeartIcon"
        :icon-size="24"
        to="/"
        vertical
      >
        Избранное
      </JmButton>
    </li>
    <li>
      <JmButton
        class="header-navbar__btn"
        :icon="UserIcon"
        :icon-size="24"
        to="/"
        vertical
      >
        Профиль
      </JmButton>
    </li>
    <li>
      <JmButton
        class="header-navbar__btn"
        :icon="CartIcon"
        :icon-size="24"
        vertical
        to="/"
      >
        Корзина
      </JmButton>
    </li>
    <li>
      <JmButton
        class="header-navbar__btn"
        :icon="InfoIcon"
        :icon-size="24"
        vertical
        to="/"
        has-hover
      >
        О проекте
      </JmButton>
    </li>
  </ul>
</template>

<script setup lang="ts">
import JmButton from '@/components/JmButton.vue';
import { ParcelIcon, HeartIcon, UserIcon, CartIcon, InfoIcon } from '@/components/icons';
</script>

<style scoped lang="scss">
.header-navbar {
  display: flex;
  gap: 10px;

  &__btn {
    transition:
      background-color $animation,
      color $animation;
    &:hover {
      background-color: var(--cl-hover);
      color: var(--cl-text-hover);
    }
  }
}
</style>
