import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentRoute: string = '';
  constructor(private router: Router) {}

  ngOnInit() {
    this.currentRoute = this.router.url;
  }
}
