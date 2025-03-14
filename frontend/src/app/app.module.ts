import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderWrapperComponent } from './components/loader-wrapper/loader-wrapper.component';
import { BackToTopWrapperComponent } from './components/back-to-top-wrapper/back-to-top-wrapper.component';
import { SearchPopupComponent } from './components/search-popup/search-popup.component';
import { CartMiniComponent } from './components/cart-mini/cart-mini.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderSecondComponent } from './components/header-second/header-second.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    HeaderSecondComponent,
    LoaderWrapperComponent,
    BackToTopWrapperComponent,
    FooterComponent,
    SearchPopupComponent,
    CartMiniComponent,
    HamburgerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
