import {Component, inject, input, model, OnInit, output, signal} from '@angular/core';
import {DialogModule} from "primeng/dialog";
import {Button} from "primeng/button";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {FloatLabelModule} from "primeng/floatlabel";
import {DropdownModule} from "primeng/dropdown";
import {CategoryService} from "../../../../service/category.service";
import {AuthorService} from "../../../../service/author.service";
import {Author} from "../../../../model/response/author.model";
import {Category} from "../../../../model/response/category.model";
import {InputTextareaModule} from "primeng/inputtextarea";
import {FileUploadEvent, FileUploadModule} from "primeng/fileupload";

@Component({
  selector: 'app-save-form',
  standalone: true,
  imports: [
    DialogModule,
    Button,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabelModule,
    DropdownModule,
    InputTextareaModule,
    FileUploadModule
  ],
  templateUrl: './save-form.component.html',
  styleUrl: './save-form.component.css'
})
export class SaveFormComponent implements OnInit {
  ngOnInit(): void {
    this.fetchAuthors();
    this.fetchCategories();
  }

  private fb = inject(FormBuilder);
  private categoryService = inject(CategoryService);
  private authorService = inject(AuthorService);
  visible = model(false);
  authors: Author[] = [];
  categories: Category[] = [];
  onSave=output();

  saveForm = this.fb.group({
    name: ['', [Validators.required]],
    imgFile: [null, [Validators.required]],
    publisher: '',
    translator: '',
    author: [null, [Validators.required]],
    category: [null, [Validators.required]],
    quantity: [null, [Validators.required]],
    defaultPrice: [null, [Validators.required]],
    sellPrice: [null, [Validators.required]],
    numOfPages: null,
    publishedYear: null,
    description: '',
  })

  fetchAuthors() {
    this.authorService.fetchAuthors().subscribe({
      next: res => {
        this.authors = res;
      }
    })
  }

  fetchCategories() {
    this.categoryService.fetchCategories().subscribe({
      next: res => {
        this.categories = res;
      }
    })
  }

  closeDialog() {
    this.visible.set(false);
  }

  chooseImage(event: any) {
    const file = event.files[0];
    console.log(event.files[0])
    const fileControl = this.saveForm.get('imageFile');
    this.saveForm.patchValue({imgFile: file});
    if (fileControl) {
      fileControl.markAsDirty();
      fileControl.markAsTouched();
    }

  }

  onSubmit() {
    this.onSave.emit(this.saveForm.value)
    console.log(this.saveForm.value)
  }
}
