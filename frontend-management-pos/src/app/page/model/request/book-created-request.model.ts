export interface BookCreatedRequest {
  name: string;
  publicId?: string;
  imgUrl?: string;
  quantity: number;
  price: number;
  publisher: string|null;
  translator: string|null;
  numOfPages: number|null;
  publishedYear: number|null;
  isActive:boolean;
  description: string|null;
  authorId: number;
  categoryId: number;
}
