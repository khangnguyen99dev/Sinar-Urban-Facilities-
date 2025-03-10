import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMainComponent } from './contact-main.component';


@NgModule({
  declarations: [ContactMainComponent],
  imports: [
    CommonModule,
    ContactMainComponent
  ],
  exports: [ContactMainComponent]
})
export class ContactMainModule { }
