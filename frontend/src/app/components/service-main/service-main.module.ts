import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceMainComponent } from './service-main.component';


@NgModule({
  imports: [
    CommonModule,
    ServiceMainComponent
  ],
  exports: [ServiceMainComponent]
})
export class ServiceMainModule { }
