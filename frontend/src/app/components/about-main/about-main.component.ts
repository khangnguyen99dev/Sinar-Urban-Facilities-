import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-about-main',
  standalone: true,
  imports: [],
  templateUrl: './about-main.component.html',
  styleUrl: './about-main.component.scss'
})
export class AboutMainComponent {
  @Input() dataHomePage: any;
  environment = environment;
}
