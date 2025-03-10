import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMainComponent } from './about-main.component';

@NgModule({
  imports: [
    CommonModule,
    AboutMainComponent
  ],
  exports: [AboutMainComponent]
})
export class AboutMainModule { }