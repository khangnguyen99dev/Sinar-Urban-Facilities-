import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environments/environment';
import { NgFor, NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

interface Team {
  name: string;
  role_name: string;
  phone: string;
  url_facebook: string;
  url_x: string;
  url_linkedin: string;
  url_vimeo: string;
  clients_satisfaction: string;
  cleaning_services: string;
  email: string;
  description: string;
  slug: string;
  avatar: { url: string } | null;
  services: { title: string; }[];
}

@Component({
  selector: 'app-team-detail',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    RouterLink
  ],
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.scss'
})
export class TeamDetailComponent implements OnInit, OnDestroy {
  slug: string = '';
  data!: Team;
  url_image = environment.site_url;
  teams: Team[] = [];
  private routeSub!: Subscription;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug') || '';
      this.loadData();
    });
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  async loadData() {
    const params = `filters[slug][$eq]=${this.slug}&populate=*`;
    try {
      const response = await this.apiService.get('teams', false, params) as any;
      this.data = response[0] as Team;

      const paramsTeam = `filters[slug][$ne]=${this.slug}&populate=*&pagination[limit]=4`;
      const responseTeam = await this.apiService.get('teams', false, paramsTeam) as any;
      this.teams = responseTeam as Team[];
    } catch (error) {
      console.log(error);
    }
  }
}
