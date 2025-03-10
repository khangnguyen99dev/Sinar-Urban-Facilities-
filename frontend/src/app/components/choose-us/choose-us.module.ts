import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseUsComponent } from './choose-us.component';

@NgModule({
  declarations: [ChooseUsComponent],
  imports: [
    CommonModule,
    ChooseUsComponent
  ],
  exports: [ChooseUsComponent]
})
export class ChooseUsModule { }
