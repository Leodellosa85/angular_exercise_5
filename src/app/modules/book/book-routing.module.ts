import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookFormComponent } from './pages/book-form/book-form.component';
import { bookResolver } from './resolvers/book.resolver';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
    resolve: {books: bookResolver},
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'book-form',
    component: BookFormComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class BookRoutingModule { }
