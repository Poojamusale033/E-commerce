import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements AfterViewInit {

  // Color palette selection
  selectedColor: string = '';

  colors: string[] = ['#000000', '#ffffff', '#4285f4', '#34a853', '#fbbc05', '#ea4335'];

  selectColor(color: string) {
    this.selectedColor = color;
  }

  // Carousel logic
  ngAfterViewInit() {
    const carousels = document.querySelectorAll("[data-carousel]");

    carousels.forEach(carousel => {
      const track = carousel.querySelector(".carousel-track") as HTMLElement;
      const slides = Array.from(track.children);
      const prevBtn = carousel.querySelector(".prev") as HTMLElement;
      const nextBtn = carousel.querySelector(".next") as HTMLElement;

      let index = 0;

      function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;
      }

      nextBtn.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        updateCarousel();
      });

      prevBtn.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
      });
    });
  }
}
