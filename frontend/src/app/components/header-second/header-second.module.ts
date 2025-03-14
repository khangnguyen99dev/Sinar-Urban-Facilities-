import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSecondComponent } from './header-second.component';
import { RouterModule, RouterLinkActive } from '@angular/router';
@NgModule({
  declarations: [
    HeaderSecondComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterLinkActive
  ],
  exports: [
    HeaderSecondComponent
  ]
})
export class HeaderSecondModule { }
