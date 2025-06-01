import {Routes} from '@angular/router';
import {BookAddComponent} from './book-add/book-add.component';
import {BookListComponent} from './book-list/book-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    component: BookListComponent,
  },
  {
    path: 'book/add',
    component: BookAddComponent,
  }
];
