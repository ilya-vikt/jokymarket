import { defineStore } from 'pinia';
import { computed, ref, watchEffect } from 'vue';
import categories from '@/mocks/categories';
import { setBodyScroll } from '@/utils';
import type { GoodsCategory, MainGoodsCategory, SubGoodsCategory } from '@/types/goodsCategories';

export const useCatalogStore = defineStore('catalog', () => {
  const isLoading = ref(true);
  const opened = ref(false);
  const catalog = ref<GoodsCategory[]>([]);

  const mainCategories = computed<MainGoodsCategory[]>(() => {
    if (catalog.value.length === 0) return [];
    else return catalog.value.map((el) => ({ title: el.title, slug: el.slug, id: el.id }));
  });

  const selectedMainId = ref<number | null>(catalog.value[0]?.id || null);

  //util
  const findCategory = () =>
    selectedMainId.value ? catalog.value.find((el) => el.id === selectedMainId.value) : null;

  const subCategories = computed<SubGoodsCategory[]>(() => findCategory()?.subcategories || []);

  const selectedMainTitle = computed(() => findCategory()?.title || '');

  watchEffect(() => {
    setBodyScroll(!opened.value);
  });

  setTimeout(
    () => (
      (catalog.value = categories),
      (isLoading.value = false),
      (selectedMainId.value = catalog.value[0].id)
    ),
    1000
  );

  return {
    isLoading,
    catalog,
    mainCategories,
    selectedMainId,
    subCategories,
    selectedMainTitle,
    opened
  };
});
