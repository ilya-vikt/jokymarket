import { useViewerSettings } from '@/stores/viewerSettings'

export const priceFormatter = (price: number): string => {
  const { currency } = useViewerSettings()
  const formatter = new Intl.NumberFormat(undefined, { useGrouping: true })
  return `${formatter.format(price)} ${currency.symbol}`
}
