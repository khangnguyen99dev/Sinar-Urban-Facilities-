import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environments/environment';
import { NgFor } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    NgFor,
    RouterModule,
    RouterLink
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {
  dataPortfolio: any;
  url_image = environment.site_url;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchPortfolioData();
  }

  async fetchPortfolioData() {
    try {
      const params = "populate=image&sort=createdAt:desc&pagination[limit]=6";
      const res = await this.apiService.get('portfolios', params);
      this.dataPortfolio = res;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
