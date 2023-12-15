import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useViewerSettings = defineStore('viewerSettings', () => {
  const currency = reactive<{
    ticker: string
    symbol: string
  }>({
    ticker: 'Руб.',
    symbol: '₽'
  })

  return { currency }
})
