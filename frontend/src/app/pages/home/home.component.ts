import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';
import { AboutMainComponent } from '../../components/about-main/about-main.component';
import { ServiceMainComponent } from '../../components/service-main/service-main.component';
import { TeamMainComponent } from '../../components/team-main/team-main.component';
import { BeforeAfterComponent } from '../../components/before-after/before-after.component';
import { ChooseUsComponent } from '../../components/choose-us/choose-us.component';
import { PricingPlanComponent } from '../../components/pricing-plan/pricing-plan.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
import { ContactMainComponent } from '../../components/contact-main/contact-main.component';
import { TestimonialComponent } from '../../components/testimonial/testimonial.component';
import { BlogMainComponent } from '../../components/blog-main/blog-main.component';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SliderComponent,
    AboutMainComponent,
    ServiceMainComponent,
    TeamMainComponent,
    BeforeAfterComponent,
    ChooseUsComponent,
    PricingPlanComponent,
    PortfolioComponent,
    ContactMainComponent,
    TestimonialComponent,
    BlogMainComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  dataHomePage: any;
  environment = environment;
  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {  
    this.fetchHomePageData();
  }
  async fetchHomePageData() {
    try {
      const res = await this.apiService.get('get-home-page');
      this.dataHomePage = res;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
