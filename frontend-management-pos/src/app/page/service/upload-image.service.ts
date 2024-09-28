import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ImageResponse} from "../model/response/image-response.model";

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  private http = inject(HttpClient);
  private url: string = "http://localhost:8080/api/v1/upload";

  uploadImage(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post<ImageResponse>(this.url, formData);
  }
}
