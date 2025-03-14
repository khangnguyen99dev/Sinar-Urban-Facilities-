import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogGridComponent } from './blog-grid.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BlogGridComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogGridModule { }
