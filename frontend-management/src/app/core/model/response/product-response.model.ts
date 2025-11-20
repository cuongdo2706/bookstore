import {ImageResponse} from "./image-response.model";

export interface ProductResponse {
    id: number;
    code: string;
    name: string;
    image: ImageResponse | null;
    quantity: number;
    price: number;
    translator: string | null;
    numOfPages: number | null;
    publishedYear: number | null;
    isPublished: boolean;
    description: string;
    authors: {
        id: number;
        name: string;
    }[];
    categories: {
        id: number;
        name: string;
    }[];
    publisher: {
        id: number;
        name: string;
    };
}
