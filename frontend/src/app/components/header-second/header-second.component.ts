import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header-second',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-second.component.html',
  styleUrl: './header-second.component.scss'
})
export class HeaderSecondComponent {

  currentRoute: string = '';
  constructor(private router: Router) {}
  @Input() CompanyInfo: any;

  ngOnInit() {
    this.currentRoute = this.router.url;
  }
}
