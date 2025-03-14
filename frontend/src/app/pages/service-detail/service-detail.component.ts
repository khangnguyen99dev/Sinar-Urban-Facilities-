import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environments/environment';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss'
})
export class ServiceDetailComponent implements OnInit {
  service: any;
  services: any[] = [];
  serviceDetail: any = {};
  serviceQualities: any[] = [];
  serviceQuestions: any[] = [];
  environment = environment.site_url;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(async (params: any) => {
      const slug = params['slug'];

      if (slug) {
        await this.fetchServiceDetail(slug);
        this.fetchServices();
      } else {
        this.loadDumpData();
      }
    });
  }

  async fetchServiceDetail(slug: string) {
    try {
      const data = await this.apiService.get(
        'services',
        `populate[image][populate]=*&populate[service_detail][populate]=*&filters[slug][$eq]=${slug}`
      );
      this.service = data[0];
      if (this.service.service_detail) {
        this.serviceDetail = this.service.service_detail;
        this.serviceQualities = this.service.service_detail.service_qualities || [];
        this.serviceQuestions = this.service.service_detail.service_questions || [];
        console.log('Service detail', this.serviceDetail);
      } else {
        this.serviceDetail = null;
        this.serviceQualities = [];
        this.serviceQuestions = [];
        console.log('Service does not have service_detail');
      }
    } catch (error) {
      console.log('Error fetching service detail:', error);
    }
  }

  async fetchServices() {
    try {
      const otherServices = await this.apiService.get(
        'services',
        `populate=*&sort=createdAt:desc&pagination[limit]=4&filters[id][$ne]=${this.service.id}`
      );
      if (otherServices.length > 0) {
        this.services = [this.service, ...otherServices];
      } else {
        this.services = [this.service];
      }
      console.log('Services', this.services);
    } catch (error) {
      console.log('Error fetching services:', error);
    }
  }

  isCurrentService(slug: string): boolean {
    return this.service?.slug === slug;
  }

  // Dump data for path /service-details
  dumpData = {
    title: 'Home Cleaning',
    image: 'assets/images/service/service-4.jpg',
    slug: 'home-cleaning',
    service_detail: {
      title_paragraph_1: 'We give the best Services',
      description_paragraph_1: 'Deep cleaning services go beyond regular maintenance cleaning to tackle areas that are often overlooked, such as baseboards, behind appliances, inside cabinets, and other hard-to-reach places. This type of cleaning is usually recommended for spring cleaning or before special events. Some cleaning companies offer specialized services such as carpet cleaning, upholstery cleaning, tile and grout cleaning.',
      description_paragraph_2: 'For environmentally conscious customers, some cleaning services offer green cleaning options that use eco-friendly products and practices to minimize environmental impact.',
      title_paragraph_2: 'Service Quality',
      image_1_paragraph_1: 'assets/images/service/service-5.jpg',
      image_2_paragraph_1: 'assets/images/service/service-6.jpg',
      image_1_paragraph_2: 'assets/images/service/service-7.jpg',
      service_qualities: [
        {
          title: 'The Bright Choice for a Clean Home.',
        },
        {
          title: 'Where Cleanliness Meets Perfection',
        },
        {
          title: 'Transforming Spaces, One Clean at a Time',
        },
        {
          title: 'Effortless Clean, Exceptional Results',
        },
      ],
      service_questions: [
        {
          title: 'What should I do to prepare for a cleaning service?',
          description: "Your satisfaction is our top priority. If you're not happy with our service, please contact us within 24 hours and we will re-clean the area at  additional charge. Your satisfaction our top priority. If you're not happy any with our service, please contact us within 24 hours and we will re-clean"
        },
        {
          title: 'What if I\'m not satisfied with the cleaning?',
          description: "Your satisfaction is our top priority. If you're not happy with our service, please contact us within 24 hours and we will re-clean the area at  additional charge. Your satisfaction our top priority. If you're not happy any with our service, please contact us within 24 hours and we will re-clean"
        },
        {
          title: 'Are the cleaning products safe for my family and pets?',
          description: "Yes, we use only the safest and most effective cleaning products. All products are non-toxic and safe for your family and pets."
        }
      ]
    }
  };

  loadDumpData() {
    this.service = {
      title: this.dumpData.title,
      image: this.dumpData.image,
      slug: this.dumpData.slug,
    };
    
    this.serviceDetail = this.dumpData.service_detail;
    this.serviceQualities = this.dumpData.service_detail.service_qualities || [];
    this.serviceQuestions = this.dumpData.service_detail.service_questions || [];
    
    this.services = [
      {
        title: this.dumpData.title,
        slug: this.dumpData.slug,
      },
      {
        title: 'Indoor Cleaning',
        slug: 'indoor-cleaning',
      },
      {
        title: 'Outdoor Cleaning',
        slug: 'outdoor-cleaning',
      },
      {
        title: 'Plumbing Cleaning',
        slug: 'plumbing-cleaning',
      },
      {
        title: 'Window Cleaning',
        slug: 'window-cleaning',
      },
    ];
    this.isCurrentService(this.dumpData.slug);
  }
  // End of dump data for path /service-details
}
