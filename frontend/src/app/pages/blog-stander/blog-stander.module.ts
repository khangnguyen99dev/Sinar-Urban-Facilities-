import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogStanderComponent } from './blog-stander.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BlogStanderComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogStanderModule { }
