import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderWrapperComponent } from './loader-wrapper.component';


@NgModule({
  declarations: [LoaderWrapperComponent],
  imports: [
    CommonModule,
    LoaderWrapperComponent
  ],
  exports: [LoaderWrapperComponent]
})
export class LoaderWrapperModule { }