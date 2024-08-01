export interface Product {
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
  author: AuthorResponse;
  category: CategoryResponse;
  createdAt: Date;
  updatedAt: Date;
}

interface AuthorResponse {
  id: number;
  name: string;
}

interface CategoryResponse {
  id: number;
  name: string;
}
