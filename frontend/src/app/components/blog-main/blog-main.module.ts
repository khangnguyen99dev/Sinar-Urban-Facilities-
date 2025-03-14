import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogMainComponent } from './blog-main.component';

@NgModule({
  declarations: [BlogMainComponent],
  imports: [
    CommonModule,
    BlogMainComponent
  ],
  exports: [BlogMainComponent]
})
export class BlogMainModule { }
