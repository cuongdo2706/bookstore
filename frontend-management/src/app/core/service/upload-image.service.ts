import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ImageResponse} from "../model/response/image-response.model";
import {AppConstants} from "../../app.constants";

@Injectable({
    providedIn: 'root'
})
export class UploadImageService {
    private http = inject(HttpClient);
    private readonly url: string = AppConstants.API_BASE_URL + "upload";

    uploadImage(file: File) {
        const formData = new FormData();
        formData.append("file", file);
        return this.http.post<ImageResponse>(this.url, formData);
    }

    updateImage(file: File, publicId: string) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("publicId", publicId);
        return this.http.put<ImageResponse>(this.url, formData);
    }
}
