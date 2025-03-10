import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeforeAfterComponent } from './before-after.component';


@NgModule({
  imports: [
    CommonModule,
    BeforeAfterComponent
  ],
  exports: [BeforeAfterComponent]
})
export class BeforeAfterModule { }
