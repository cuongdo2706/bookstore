export interface ProductResponse {
  id: number;
  code: string;
  name: string;
  publicId: string;
  imgUrl: string;
  quantity: number;
  defaultPrice: number;
  sellPrice: number;
  publisher: string;
  translator: string;
  numOfPages: number;
  publishedYear: number;
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
