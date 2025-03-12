import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-blog-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-main.component.html',
  styleUrl: './blog-main.component.scss'
})
export class BlogMainComponent {
  @Input() dataHomePage: any;
  environment = environment;
}
