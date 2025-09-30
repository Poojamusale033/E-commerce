import { Component, HostListener, OnInit } from '@angular/core';

interface CartItem {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  isScrolled = false;
  
  cartItemsCount = 3;
  cartItems: CartItem[] = [
    {
      name: 'Pixel Case 10 Pro',
      price: 4900,
      image: '../../assets/images/pixel-case-thumb.jpg',
      quantity: 1
    },
    {
      name: 'Pixel Buds Pro 2',
      price: 22900,
      image: '../../assets/images/buds-pro-thumb.jpg',
      quantity: 1
    },
    {
      name: 'Watch Sport Band',
      price: 3999,
      image: '../../assets/images/watch-band-thumb.jpg',
      quantity: 2
    }
  ];

  ngOnInit() {
    // Initialize any required functionality
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  getCartTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  viewCart() {
    console.log('View cart clicked');
    // Navigate to cart page
  }

  checkout() {
    console.log('Checkout clicked');
    // Navigate to checkout page
  }

  removeFromCart(item: CartItem) {
    console.log('Remove item:', item.name);
    // Implement remove from cart functionality
  }
}