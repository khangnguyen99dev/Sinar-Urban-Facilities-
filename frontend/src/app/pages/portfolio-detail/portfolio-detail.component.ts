import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environments/environment';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-portfolio-detail',
  standalone: true,
  imports: [
    NgFor,
    NgIf
  ],
  templateUrl: './portfolio-detail.component.html',
  styleUrl: './portfolio-detail.component.scss'
})
export class PortfolioDetailComponent implements OnInit {
  slug: string = '';
  dataPortfolio: any;
  url_image = environment.site_url;
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.route.params.subscribe(params => { 
      this.slug = params['slug'];
      this.fetchPortfolioDetail();
    });
  }

  async fetchPortfolioDetail() {
    const params = `populate[image][populate]=*&populate[portfolio_detail][populate]=*&filters[slug][$eq]=${this.slug}`;
    const res = await this.apiService.get('portfolios', params);
    this.dataPortfolio = res[0];
  }
}
