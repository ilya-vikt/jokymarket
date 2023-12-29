export type SecondaryCategory = {
  id: number;
  slug: string;
  title: string;
};

export type PrimaryCategory = {
  id: number;
  title: string;
  slug: string;
};

export type GoodsCategory = PrimaryCategory & {
  secondaryCategories: SecondaryCategory[];
};
