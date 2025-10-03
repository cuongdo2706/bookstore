export interface ProductResponse {
    id: number;
    code: string;
    name: string;
    publicId: string | null;
    imgUrl: string | null;
    quantity: number;
    price: number;
    translator: string | null;
    numOfPages: number | null;
    publishedYear: number | null;
    isActive: boolean;
    description: string;
    authors: {
        id: number;
        name: string;
    }[];
    categories: {
        id: number;
        name: string;
    }[];
    publisher:{
        id: number;
        name: string;
    }
}
