export type GoodsCardDto = {
  id: number;
  img: string;
  alt?: string;
  title: string;
  price: number;
  marketingPrice?: number;
  description: string;
  category: string;
};
