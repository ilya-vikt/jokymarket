<template>
  <JmCard>
    <ul class="burger-menu">
      <li class="burger-menu__profile">
        <JmButton
          v-if="viewerStore.isLogin"
          :icon="UserIcon"
          :icon-size="24"
          has-hover
          justify="left"
          to="/"
        >
          {{ viewerStore.userName }}
        </JmButton>
        <JmButton
          v-else
          :icon="UserIcon"
          :icon-size="24"
          has-hover
          justify="left"
          to="/login"
        >
          Войти или зарегистрироваться
        </JmButton>
      </li>
      <li>
        <JmButton
          :icon="ParcelIcon"
          :icon-size="24"
          has-hover
          justify="left"
          to="/"
        >
          Доставки
        </JmButton>
      </li>
      <li>
        <JmButton
          :icon="HeartIcon"
          :icon-size="24"
          has-hover
          justify="left"
          to="/"
        >
          Избранное
        </JmButton>
      </li>
      <li>
        <JmButton
          :icon="CartIcon"
          :icon-size="24"
          has-hover
          justify="left"
          to="/"
        >
          Корзина
        </JmButton>
      </li>
      <li>
        <JmButton
          :icon="InfoIcon"
          :icon-size="24"
          has-hover
          justify="left"
          to="/about"
        >
          О проекте
        </JmButton>
      </li>
    </ul>
  </JmCard>
</template>

<script setup lang="ts">
import { UserIcon, CartIcon, ParcelIcon, HeartIcon, InfoIcon } from '@/components/icons';
import JmButton from '@/components/JmButton.vue';
import JmCard from '@/components/JmCard.vue';

import { useViewerStore } from '@/stores/viewerStore';

const viewerStore = useViewerStore();
</script>

<style scoped lang="scss">
.burger-menu {
  &__auth {
    display: flex;
    border-bottom: 2px solid var(--cl-border);
    padding: $padding-v $padding-h;
  }
}
</style>
