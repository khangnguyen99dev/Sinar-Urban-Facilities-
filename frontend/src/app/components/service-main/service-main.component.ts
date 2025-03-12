import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-main.component.html',
  styleUrl: './service-main.component.scss'
})
export class ServiceMainComponent {
  @Input() dataHomePage: any;
  environment = environment;
}
