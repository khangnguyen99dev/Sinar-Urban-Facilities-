import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-pricing-plan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-plan.component.html',
  styleUrl: './pricing-plan.component.scss'
})
export class PricingPlanComponent {
 @Input() dataHomePage: any;
 environment = environment;

}
