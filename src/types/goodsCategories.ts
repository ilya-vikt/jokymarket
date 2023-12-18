export type SubGoodsCategory = {
  id: number;
  slug: string;
  title: string;
};

export type MainGoodsCategory = {
  id: number;
  title: string;
  slug: string;
};

export type GoodsCategory = MainGoodsCategory & {
  subcategories: SubGoodsCategory[];
};
