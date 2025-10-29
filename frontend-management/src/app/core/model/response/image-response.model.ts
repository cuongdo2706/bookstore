export interface ImageResponse {
    publicId: string;
    relativePath: string;
    fileExtension:string;
    originalName:string;
    fileSize:number;
    width:number;
    height:number;
    contentType:string;
    createdAt:Date;
    updatedAt:Date;
}
