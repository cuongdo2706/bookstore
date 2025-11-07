import {ENV} from "../../environment";

export function buildImgUrl(publicId:string):string{
    return `${ENV.API_BASE_URL}images/${publicId}`
}