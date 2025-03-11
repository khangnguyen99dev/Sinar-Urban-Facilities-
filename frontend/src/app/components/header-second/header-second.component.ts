import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-second',
  standalone: true,
  imports: [],
  templateUrl: './header-second.component.html',
  styleUrl: './header-second.component.scss'
})
export class HeaderSecondComponent {

  currentRoute: string = '';
  constructor(private router: Router) {}

  ngOnInit() {
    this.currentRoute = this.router.url;
  }
}
