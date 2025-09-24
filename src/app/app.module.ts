import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Navbar + Menu components
import { NavbarComponent } from './navbar/navbar.component';
import { PhonesComponent } from './phones/phones.component';
import { EarbudsComponent } from './earbuds/earbuds.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { OfferComponent } from './offers/offers.component';
import { SupportsComponent } from './supports/supports.component';
import { WatchComponent } from './watch/watch.component';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PhonesComponent,
    EarbudsComponent,
    AccessoriesComponent,
    OfferComponent,
    WatchComponent,
    SupportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
