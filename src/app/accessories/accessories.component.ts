import { Component } from '@angular/core';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent {

  products = [
    {
      title: "Pixel 10 Pro and Pro XL",
      price: 89900,
      badge: "New",
      colors: [
        { hex: "#000000", img: "assets/pixel-10-pro-black.png" },
        { hex: "#4285F4", img: "assets/pixel-10-pro-blue.png" },
        { hex: "#34A853", img: "assets/pixel-10-pro-green.png" },
      ],
      selectedColor: "#4285F4",
      selectedImage: "assets/pixel-10-pro-blue.png",
    },
    {
      title: "Pixel 10",
      price: 69900,
      badge: "New",
      colors: [
        { hex: "#000000", img: "assets/pixel-10-black.png" },
        { hex: "#FFFFFF", img: "assets/pixel-10-white.png" },
      ],
      selectedColor: "#000000",
      selectedImage: "assets/pixel-10-black.png",
    },
    {
      title: "Pixel 10 Pro Fold",
      badge: "Coming soon",
      selectedImage: "assets/pixel-10-fold.png",
    },
    { title: "Pixel 9 Pro and Pro XL", price: 79900, selectedImage: "assets/pixel-9-pro.png" },
    { title: "Pixel 9", price: 59900, selectedImage: "assets/pixel-9.png" },
    { title: "Pixel 9a", price: 39900, selectedImage: "assets/pixel-9a.png" },
    { title: "Pixel 8 Pro", price: 49900, selectedImage: "assets/pixel-8-pro.png" },
    { title: "Pixel 8a", price: 34900, selectedImage: "assets/pixel-8a.png" },
    { title: "Pixel Watch 3", price: 29900, selectedImage: "assets/pixel-watch.png", badge: "New" },
    { title: "Pixel Buds Pro", price: 15900, selectedImage: "assets/pixel-buds.png" },
    { title: "Pixel Tablet", price: 49900, selectedImage: "assets/pixel-tablet.png" },
    { title: "Pixel Cases", price: 4900, selectedImage: "assets/cases.png" },
    { title: "Pixel Accessories", selectedImage: "assets/accessories.png" },
    { title: "Pixel Charger 30W", price: 2500, selectedImage: "assets/charger.png" },
    { title: "Compare Phones", selectedImage: "assets/compare.png" },
  ];

  // ✅ Only ONE selectColor function
  selectColor(product: any, color: any) {
    product.selectedColor = color.hex;
    product.selectedImage = color.img;
  }
}
