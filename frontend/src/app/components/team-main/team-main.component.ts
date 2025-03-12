import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-main.component.html',
  styleUrl: './team-main.component.scss'
})
export class TeamMainComponent {
  @Input() dataHomePage: any;
  environment = environment;
}
