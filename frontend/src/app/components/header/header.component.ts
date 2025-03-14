import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentRoute: string = '';
  constructor(private router: Router) {}
  @Input() CompanyInfo: any;

  ngOnInit() {
    this.currentRoute = this.router.url;
  }
}
