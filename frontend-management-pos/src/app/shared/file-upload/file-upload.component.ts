import {Component, input, output} from '@angular/core';
import {ImageModule} from "primeng/image";

@Component({
    selector: 'app-file-upload',
    imports: [
        ImageModule
    ],
    templateUrl: './file-upload.component.html',
    styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  onSelect = output<File | null>();
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;
  private acceptedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

  onFileSelected(event: Event): void {
    let errMessage: string | null = null;
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
      if (this.selectedFile.size <= 10240) {
        this.previewImage();
        this.onSelect.emit(this.selectedFile);
        errMessage = null;
      } else {
        errMessage = "File quá lớn, kích thước cho phép là 10MB";
        input.value = "";
      }
    }
  }

  previewImage(): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.previewUrl = e.target?.result as string;
    };
    reader.readAsDataURL(this.selectedFile as Blob);
  }

  clearSelection(): void {
    this.selectedFile = null;
    this.previewUrl = null;
    this.onSelect.emit(null);
  }

}
