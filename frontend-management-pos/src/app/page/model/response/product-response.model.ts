export interface ProductResponse {
  id: number;
  code: string;
  name: string;
  publicId: string|null;
  imgUrl: string|null;
  quantity: number;
  price: number;
  sellPrice: number;
  publisher: string|null;
  translator: string|null;
  numOfPages: number|null;
  publishedYear: number|null;
  isActive:boolean;
  isDeleted: boolean;
  description: string;
  author: {
    id: number;
    name: string;
  };
  category: {
    id: number;
    name: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
