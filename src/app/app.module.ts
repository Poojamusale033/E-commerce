import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ✅ Required for ngModel

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // ✅ Include this!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
