import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgFor, NgIf } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    NgIf,
    NgFor 
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent implements OnInit {
  data: any[] = [];
  url_image = environment.site_url;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    const params = "populate=*&sort=createdAt:desc&pagination[limit]=8";
    this.apiService.get('teams', true, params).then((data: any) => {
      this.data = data;
    });
  }
}
