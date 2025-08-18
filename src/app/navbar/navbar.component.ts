import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  // ✅ Property for menu toggle
  isMenuOpen: boolean = false;

  // ✅ Method for toggling menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // ✅ Property for cart items count (default 0)
  cartItemsCount: number = 0;

  // Example: you can later update cartItemsCount from a service
  // increaseCart() {
  //   this.cartItemsCount++;
  // }
}
