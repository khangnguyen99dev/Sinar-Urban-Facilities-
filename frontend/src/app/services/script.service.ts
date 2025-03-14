import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {
  private scripts: any = {};

  constructor() {
    this.scripts = {
      jquery: { src: 'assets/js/jquery.min.js', loaded: false },
      bootstrap: { src: 'assets/js/bootstrap.bundle.min.js', loaded: false },
      waypoints: { src: 'assets/js/waypoints.js', loaded: false },
      appear: { src: 'assets/js/appear.min.js', loaded: false },
      odometer: { src: 'assets/js/odometer.min.js', loaded: false },
      niceSelect: { src: 'assets/js/jquery.nice-select.min.js', loaded: false },
      swiper: { src: 'assets/js/swiper-bundle.js', loaded: false },
      imagesloaded: { src: 'assets/js/imagesloaded-pkgd.js', loaded: false },
      magnificPopup: { src: 'assets/js/magnific-popup.js', loaded: false },
      isotope: { src: 'assets/js/isotope.pkgd.min.js', loaded: false },
      meanmenu: { src: 'assets/js/meanmenu.js', loaded: false },
      wow: { src: 'assets/js/wow.js', loaded: false },
      beforeafter: { src: 'assets/js/beforeafter.jquery-1.0.0.min.js', loaded: false },
      main: { src: 'assets/js/main.js', loaded: false }
    };
  }

  load(...scripts: string[]) {
    const promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      if (this.scripts[name].loaded) {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      } else {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        script.onload = () => {
          this.scripts[name].loaded = true;
          resolve({ script: name, loaded: true, status: 'Loaded' });
        };
        script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  }
}