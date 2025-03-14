import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AboutMainComponent } from '../../components/about-main/about-main.component';
import { PricingPlanComponent } from '../../components/pricing-plan/pricing-plan.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    AboutMainComponent,
    PricingPlanComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  dataHomePage: { about: any; pricingPlans: any; } = { about: null, pricingPlans: null };

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getDataAbout();
    this.getDataPricingPlan();
  }

  async getDataAbout() {
    const defaultParams = 'populate=*&sort=createdAt:desc&pagination[limit]=1';
    const data = await this.apiService.get('about-uses', defaultParams);
    this.dataHomePage.about = data[0];
  }

  async getDataPricingPlan() {
    const defaultParams = 'populate=*&sort=createdAt:desc&pagination[limit]=3';
    const data = await this.apiService.get('pricing-plans', defaultParams);
    this.dataHomePage.pricingPlans = data;
  }
}
