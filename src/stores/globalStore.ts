import { defineStore } from 'pinia';
import { useMediaQuery } from '@vueuse/core';
import { ref } from 'vue';

export const useGlobalStore = defineStore('globalStore', () => {
  const isMobile = useMediaQuery('(max-width: 639px)');
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1024px)');
  const isLaptop = useMediaQuery('(min-width: 1025px) and (max-width: 1279px)');
  const isDesktop = useMediaQuery('(min-width: 1280px)');
  const isCompact = useMediaQuery('(max-width: 1024px)');

  const catalogOpened = ref(false);
  const droverOpened = ref(false);
  return {
    isDesktop,
    isLaptop,
    isTablet,
    isMobile,
    isCompact,
    catalogOpened,
    droverOpened
  };
});
