import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-team-detail',
  standalone: true,
  imports: [],
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.scss'
})
export class TeamDetailComponent {
  slug: string = '';
  data: any;
  url_image = environment.site_url;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
    // this.loadData();
  }

  // async loadData() {
  //   const params = `filters[slug][$eq]=${this.slug}&populate=*&sort=createdAt:desc&pagination[limit]=1`;
  //   this.apiService.get('services', true, params).then((data: any) => {
  //     this.data = data.data[0];
  //     console.log(this.data);
  //   });
  // }
}

