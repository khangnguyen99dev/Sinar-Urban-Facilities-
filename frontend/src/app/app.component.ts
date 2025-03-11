import { Component, OnInit } from '@angular/core';
import { ScriptService } from './services/script.service';

declare var $: any;
declare var WOW: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private scriptService: ScriptService) {}

  ngOnInit() {
    // Load scripts theo thứ tự
    this.scriptService.load('jquery')
      .then(() => this.scriptService.load('bootstrap'))
      .then(() => this.scriptService.load('waypoints'))
      .then(() => this.scriptService.load('appear'))
      .then(() => this.scriptService.load('odometer'))
      .then(() => this.scriptService.load('niceSelect'))
      .then(() => this.scriptService.load('swiper'))
      .then(() => this.scriptService.load('imagesloaded'))
      .then(() => this.scriptService.load('magnificPopup'))
      .then(() => this.scriptService.load('isotope'))
      .then(() => this.scriptService.load('meanmenu'))
      .then(() => this.scriptService.load('wow'))
      .then(() => this.scriptService.load('beforeafter'))
      .then(() => this.scriptService.load('main'))
      .then(() => {
        // Khởi tạo các plugin sau khi tất cả script đã load
        this.initializePlugins();
      })
      .catch(error => console.log('Error loading script', error));
  }

  private initializePlugins() {
    // Đợi DOM load xong
    $(document).ready(() => {
      // Khởi tạo WOW.js
      new WOW().init();

      // Khởi tạo Nice Select
      $('select').niceSelect();

      // Các khởi tạo plugin khác...
    });
  }
}
