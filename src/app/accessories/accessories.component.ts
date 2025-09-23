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
      images: [
        "assets/pixel-10-pro-black.png",
        "assets/pixel-10-pro-blue.png",
        "assets/pixel-10-pro-green.png",
      ],
      currentSlide: 0,
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
      images: [
        "assets/pixel-10-black.png",
        "assets/pixel-10-white.png",
      ],
      currentSlide: 0,
      selectedColor: "#000000",
      selectedImage: "assets/pixel-10-black.png",
    },
    {
      title: "Pixel 10 Pro Fold",
      badge: "Coming soon",
      images: ["assets/pixel-10-fold.png"],
      currentSlide: 0,
      selectedImage: "assets/pixel-10-fold.png",
    },
    { title: "Pixel 9 Pro and Pro XL", price: 79900, images: ["assets/pixel-9-pro.png"], currentSlide: 0, selectedImage: "assets/pixel-9-pro.png" },
    { title: "Pixel 9", price: 59900, images: ["assets/pixel-9.png"], currentSlide: 0, selectedImage: "assets/pixel-9.png" },
    { title: "Pixel 9a", price: 39900, images: ["assets/pixel-9a.png"], currentSlide: 0, selectedImage: "assets/pixel-9a.png" },
    { title: "Pixel 8 Pro", price: 49900, images: ["assets/pixel-8-pro.png"], currentSlide: 0, selectedImage: "assets/pixel-8-pro.png" },
    { title: "Pixel 8a", price: 34900, images: ["assets/pixel-8a.png"], currentSlide: 0, selectedImage: "assets/pixel-8a.png" },
    { title: "Pixel Watch 3", price: 29900, images: ["assets/pixel-watch.png"], currentSlide: 0, badge: "New", selectedImage: "assets/pixel-watch.png" },
    { title: "Pixel Buds Pro", price: 15900, images: ["assets/pixel-buds.png"], currentSlide: 0, selectedImage: "assets/pixel-buds.png" },
    { title: "Pixel Tablet", price: 49900, images: ["assets/pixel-tablet.png"], currentSlide: 0, selectedImage: "assets/pixel-tablet.png" },
    { title: "Pixel Cases", price: 4900, images: ["assets/cases.png"], currentSlide: 0, selectedImage: "assets/cases.png" },
    { title: "Pixel Accessories", images: ["assets/accessories.png"], currentSlide: 0, selectedImage: "assets/accessories.png" },
    { title: "Pixel Charger 30W", price: 2500, images: ["assets/charger.png"], currentSlide: 0, selectedImage: "assets/charger.png" },
    { title: "Compare Phones", images: ["assets/compare.png"], currentSlide: 0, selectedImage: "assets/compare.png" },
  ];

  // Change color
  selectColor(product: any, color: any) {
    product.selectedColor = color.hex;
    product.selectedImage = color.img;
    product.currentSlide = product.images.indexOf(color.img);
  }

  // Carousel controls
  nextSlide(product: any) {
    if (!product.images) return;
    product.currentSlide = (product.currentSlide + 1) % product.images.length;
    product.selectedImage = product.images[product.currentSlide];
  }

  prevSlide(product: any) {
    if (!product.images) return;
    product.currentSlide =
      (product.currentSlide - 1 + product.images.length) % product.images.length;
    product.selectedImage = product.images[product.currentSlide];
  }

  // Set slide via dot click
  goToSlide(product: any, index: number) {
    product.currentSlide = index;
    product.selectedImage = product.images[index];
  }
}
