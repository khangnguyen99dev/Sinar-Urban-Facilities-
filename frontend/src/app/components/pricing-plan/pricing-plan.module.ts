import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingPlanComponent } from './pricing-plan.component';


@NgModule({
  declarations: [PricingPlanComponent],
  imports: [
    CommonModule,
    PricingPlanComponent
  ],
  exports: [PricingPlanComponent]
})
export class PricingPlanModule { }
