import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {routes} from '../app.routes';
import {finalize, tap} from 'rxjs';

@Component({
  selector: 'app-book-add',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css'
})
export class BookAddComponent {
  bookForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,
              private apiService: ApiService) {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      isbn: ['', [Validators.required]],
      publicationYear: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      this.apiService.saveBook(this.bookForm.value)
        .subscribe({
          next: (res: any) => {
            console.log("Book added successfully", res);
            this.router.navigateByUrl("books");
          },
          error: (err) => {
            console.error("Error adding book", err);
          }
        });
    }
  }
}
