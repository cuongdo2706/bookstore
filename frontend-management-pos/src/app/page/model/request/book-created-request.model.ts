export interface BookCreatedRequest {
  name: string;
  publicId?: string;
  imgUrl?: string;
  quantity: number;
  price: number;
  publisher?: string;
  translator?: string;
  numOfPages?: number;
  publishedYear?: number;
  isActive:boolean;
  description?: string;
  authorId: number;
  categoryId: number;
}
