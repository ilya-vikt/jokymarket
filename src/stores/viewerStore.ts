import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export const useViewerStore = defineStore('viewerStore', () => {
  const userName = ref('Илья Викторов');
  const isLogin = ref(false);
  const currency = reactive<{
    ticker: string;
    symbol: string;
  }>({
    ticker: 'Руб.',
    symbol: '₽'
  });

  return { currency, userName, isLogin };
});
