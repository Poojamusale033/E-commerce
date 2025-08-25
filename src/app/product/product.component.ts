import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productId: number | null = null;
  product: any;

  mobiles = [
    { id: 1, name: 'iPhone 15 Pro', price: 134999, description: 'Latest Apple iPhone with A17 Pro chip.', image: 'assets/mobiles/iphone15.jpg' },
    { id: 2, name: 'Samsung Galaxy S24', price: 99999, description: 'Flagship Samsung phone with stunning display.', image: 'assets/mobiles/s24.jpg' },
    { id: 3, name: 'OnePlus 12', price: 69999, description: 'Fast and smooth performance with OxygenOS.', image: 'assets/mobiles/oneplus12.jpg' },
    { id: 4, name: 'Xiaomi 14 Pro', price: 59999, description: 'Powerful device with great camera setup.', image: 'assets/mobiles/xiaomi14.jpg' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.mobiles.find(m => m.id === this.productId);
  }
}
