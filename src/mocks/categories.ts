import type { GoodsCategory } from '@/types/goodsCategories';

export default [
  {
    title: 'Электроника',
    slug: 'electronics',
    id: 1,
    subcategories: [
      {
        title: 'Ноутбуки',
        slug: 'notebooks',
        id: 2
      },
      {
        title: 'Смартфоны',
        slug: 'smartphones',
        id: 3
      },
      {
        title: 'Часы',
        slug: 'watches',
        id: 4
      },
      {
        title: 'Наушники',
        slug: 'headphones',
        id: 5
      },
      {
        title: 'Телевизоры',
        slug: 'tv',
        id: 6
      }
    ]
  },
  {
    title: 'Одежда и обувь',
    slug: 'сlothers-and-shoes',
    id: 7,

    subcategories: [
      {
        title: 'Мужская одежда',
        slug: 'men-clother',
        id: 8
      },
      {
        title: 'Женская одежда',
        slug: 'women-clothers',
        id: 9
      },
      {
        title: 'Мужская обувь',
        slug: 'men-shoes',
        id: 10
      },
      {
        title: 'Женская обувь',
        slug: 'woman-shoes',
        id: 11
      }
    ]
  },
  {
    title: 'Бытовая техника',
    slug: 'appliances',
    id: 12,

    subcategories: [
      {
        title: 'Утюги',
        slug: 'irons',
        id: 13
      },
      {
        title: 'Микроволновки',
        slug: 'microvawe-ovens',
        id: 14
      },
      {
        title: 'Холодилники',
        slug: 'fridges',
        id: 15
      },
      {
        title: 'Пылесосы',
        slug: 'vacuum-cleaners',
        id: 16
      }
    ]
  }
] as GoodsCategory[];
