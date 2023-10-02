import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { CardLabelComponent } from './components/main-card/card-label/card-label.component';
import { CardPricingComponent } from './components/main-card/card-pricing/card-pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCardComponent,
    MenuBarComponent,
    HomeComponent,
    CardLabelComponent,
    CardPricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
