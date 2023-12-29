import { defineStore } from 'pinia';
import { computed, ref, watch, watchEffect } from 'vue';
import categories from '@/mocks/categories';
import { setBodyScroll } from '@/utils';
import type { GoodsCategory, SecondaryCategory } from '@/types/goodsCategories';

export const useCatalogStore = defineStore('catalog', () => {
  const isLoading = ref(true);
  const opened = ref(false);
  const catalog = ref<GoodsCategory[]>([]);
  const stage = ref<'primary' | 'secondary'>('primary');

  const primaryCategory = ref<GoodsCategory | null>(catalog.value[0] || null);
  const primaryTitle = computed(() => primaryCategory.value?.title || '');
  const primaryHref = computed(() => primaryCategory.value?.slug || '');
  const secondaryCategories = computed<SecondaryCategory[]>(
    () => primaryCategory.value?.secondaryCategories || []
  );

  watchEffect(() => {
    if (!opened.value) {
      stage.value = 'primary';
      primaryCategory.value = catalog.value[0] || null;
    }
  });

  watchEffect(() => (primaryCategory.value = catalog.value[0] || null));
  watchEffect(() => setBodyScroll(!opened.value));

  setTimeout(() => {
    catalog.value = categories;
    isLoading.value = false;
  }, 1000);

  return {
    isLoading,
    catalog,
    primaryHref,
    secondaryCategories,
    primaryCategory,
    primaryTitle,
    opened,
    stage
  };
});
