import { Component } from '@angular/core';
import { Router } from '@angular/router';

type Mobile = {
  id: number;
  name: string;
  price: number;
  mrp?: number;
  discount?: number; // percentage
  rating: number;    // 0..5
  image: string;
  slug?: string;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  categories = [
    {
      name: 'Flagship',
      slug: 'flagship',
      image:
        'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600&auto=format&fit=crop'
    },
    {
      name: 'Mid-range',
      slug: 'mid-range',
      image:
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop'
    },
    {
      name: 'Budget',
      slug: 'budget',
      image:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop'
    },
    {
      name: 'Accessories',
      slug: 'accessories',
      image:
        'https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=600&auto=format&fit=crop'
    }
  ];

  topDeals: Mobile[] = [
    {
      id: 1,
      name: 'Samsung Galaxy S24 Ultra',
      price: 99999,
      mrp: 119999,
      discount: 17,
      rating: 4.7,
      image:
        'https://images.samsung.com/is/image/samsung/p6pim/in/galaxy-s24-ultra'
    },
    {
      id: 2,
      name: 'iPhone 15',
      price: 74999,
      mrp: 79999,
      discount: 6,
      rating: 4.6,
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15'
    },
    {
      id: 3,
      name: 'OnePlus 12',
      price: 69999,
      mrp: 75999,
      discount: 8,
      rating: 4.5,
      image:
        'https://image01.oneplus.net/ebp/202312/29/1-m00-5e-0c-rb8bw2c8kpiadjugaahjrbib2vu702.png'
    },
    {
      id: 4,
      name: 'Nothing Phone (2a)',
      price: 23999,
      mrp: 27999,
      discount: 14,
      rating: 4.3,
      image:
        'https://images.ctfassets.net/uwf0n1j71a7j/phone-2a/hero.png'
    }
  ];

  newArrivals: Mobile[] = [
    {
      id: 5,
      name: 'Pixel 9',
      price: 82999,
      rating: 4.6,
      image:
        'https://store.google.com/us/product/pixel_9?hl=en-US'
    },
    {
      id: 6,
      name: 'Realme GT 7 Pro',
      price: 44999,
      rating: 4.4,
      image:
        'https://dummyimage.com/800x800/eeeeee/111111&text=Realme+GT+7+Pro'
    },
    {
      id: 7,
      name: 'Xiaomi 14',
      price: 56999,
      rating: 4.2,
      image:
        'https://dummyimage.com/800x800/eeeeee/111111&text=Xiaomi+14'
    },
    {
      id: 8,
      name: 'Moto Edge 50',
      price: 34999,
      rating: 4.1,
      image:
        'https://dummyimage.com/800x800/eeeeee/111111&text=Moto+Edge+50'
    }
  ];

  stars(rating: number): number[] {
    const r = Math.round(rating);
    return Array(r).fill(0);
  }

  addToCart(m: Mobile) {
    // hook up to your cart service here
    alert(`${m.name} added to cart!`);
  }

  viewDetails(m: Mobile) {
    this.router.navigate(['/products'], { queryParams: { id: m.id } });
  }

  goToCategory(slug: string) {
    this.router.navigate(['/products'], { queryParams: { category: slug } });
  }
}
