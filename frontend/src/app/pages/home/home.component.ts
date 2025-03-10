import { Component } from '@angular/core';
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
export class HomeComponent {

}
