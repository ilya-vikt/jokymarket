import { useViewerStore } from '@/stores/viewerStore';

export const priceFormatter = (price: number): string => {
  const { currency } = useViewerStore();
  const formatter = new Intl.NumberFormat(undefined, { useGrouping: true });
  return `${formatter.format(price)} ${currency.symbol}`;
};
