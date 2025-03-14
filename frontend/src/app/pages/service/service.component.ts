import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environments/environment';
import axios from 'axios';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})

export class ServiceComponent implements OnInit {
  services: any[] = [];
  currentPage: number = 1;
  pageSize: number = 4;
  totalServices: number = 0;
  hasMoreServices: boolean = true;
  isLoading: boolean = false;
  environment = environment;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchServices();
  }

  async fetchServices(page: number = 1) {
    try {
      const response = await axios.get(
        `${environment.api_url}/services?populate=*&sort=createdAt:desc&pagination[page]=${page}&pagination[pageSize]=${this.pageSize}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      );

      const data = response.data.data;
      const meta = response.data.meta;

      if (page === 1) {
        this.services = data;
      } else {
        this.services = [...this.services, ...data];
      }

      this.totalServices = meta.pagination.total;
      this.hasMoreServices = page < meta.pagination.pageCount;
      console.log('Services', this.services);
      console.log('Meta', meta);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      this.isLoading = false;
    }
  }

  loadMoreServices() {
    if (!this.isLoading) {
      this.isLoading = true;
      this.currentPage++;
      this.fetchServices(this.currentPage);
    }
  }
}
