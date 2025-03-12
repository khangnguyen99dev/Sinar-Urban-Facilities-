import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})

export class ServiceComponent implements OnInit {
  services: any[] = [];
  environment = environment;

  constructor(private apiService: ApiService) {}

  async fetchServices() {
    try {
      const data = await this.apiService.get('services', 'populate=*&sort=createdAt:desc&pagination[limit]=4');
      this.services = data;
      console.log('Services:', this.services);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  }

  ngOnInit() {
    this.fetchServices();
  }
}
