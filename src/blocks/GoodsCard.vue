<template>
  <JmCard class="goods-card">
    <div class="goods-card__wrapper">
      <img
        :src="img"
        :alt="altValue"
        class="goods-card__img"
      />
    </div>
    <div class="goods-card__bottom">
      <h3 class="goods-card__title h3">{{ title }}</h3>
      <div class="goods-card__prices">
        <span
          v-if="marketingPrice"
          class="goods-card__price"
          >{{ priceFormatter(marketingPrice) }}</span
        >
        <span
          class="goods-card__price"
          :class="{
            'goods-card__price--strike': marketingPrice
          }"
        >
          {{ priceFormatter(price) }}
        </span>
        <span
          v-if="marketingPrice"
          class="goods-card__sale"
        >
          {{ sale }}
        </span>
      </div>
      <p class="goods-card__descr">{{ description }}</p>
    </div>
  </JmCard>
</template>

<script setup lang="ts">
import JmCard from '@/components/JmCard.vue';
import type { GoodsCardDto } from '@/types/goodsCard';
import { priceFormatter } from '@/utils';
import { computed } from 'vue';
const props = defineProps<Omit<GoodsCardDto, 'category' | 'id'>>();

const sale = computed(() =>
  props.marketingPrice ? `-${Math.floor(100 - (props.marketingPrice * 100) / props.price)}%` : ''
);

const altValue = computed(() => props.alt || props.title);
</script>

<style scoped lang="scss">
.goods-card {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__wrapper {
    border-radius: 5px;
    overflow: hidden;
    flex-grow: 1;
    background-color: var(--cl-white);
    display: flex;
    align-items: center;
  }

  &__img {
    width: 100%;
    object-fit: contain;
  }

  &__title {
    margin-bottom: 5px;
    -webkit-line-clamp: 2;
    height: calc(2 * 2rem * 1.2);
  }

  &__title,
  &__descsr {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__prices {
    margin-bottom: 5px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    font-size: 1.3rem;
    align-items: start;
  }

  &__price {
    text-wrap: nowrap;
    color: var(--cl-green);
    font-weight: 700;

    &--strike {
      font-size: 0.8em;
      position: relative;
      color: var(--cl-text);
      font-weight: 400;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        width: 100%;
        height: 2px;
        background-color: currentColor;
        transform: rotate(-2deg);
      }
    }
  }

  &__sale {
    color: var(--cl-red);
  }

  &__descr {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    height: calc(3 * 1rem * 1.2);
  }
}
</style>
