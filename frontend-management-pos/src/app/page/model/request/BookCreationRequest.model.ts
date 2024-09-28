export interface BookCreationRequest {
  name: string;
  publicId: string|null;
  imgUrl: string|null;
  quantity: number;
  defaultPrice: number;
  sellPrice: number;
  publisher: string|null;
  translator: string|null;
  numOfPages: number|null;
  publishedYear: number|null;
  isActive:boolean;
  description: string|null;
  authorId: number;
  categoryId: number;
}
