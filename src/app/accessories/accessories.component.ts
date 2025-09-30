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
    this.initializeAllCarousels();
  }

  private initializeAllCarousels() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach((carousel, index) => {
      this.initializeCarousel(carousel, index);
    });
  }

  private initializeCarousel(carousel: Element, carouselIndex: number) {
    const track = carousel.querySelector('.carousel-track') as HTMLElement;
    const slides = Array.from(track.children) as HTMLElement[];
    const prevBtn = carousel.querySelector('.carousel-btn.prev') as HTMLElement;
    const nextBtn = carousel.querySelector('.carousel-btn.next') as HTMLElement;
    const dots = carousel.querySelectorAll('.carousel-dots span');

    if (!track || !prevBtn || !nextBtn) {
      console.warn(`Carousel ${carouselIndex} elements not found`);
      return;
    }

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Function to update carousel position
    const updateCarousel = () => {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Update dots if they exist
      if (dots.length > 0) {
        dots.forEach((dot, index) => {
          if (index === currentIndex) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
      }
    };

    // Next button event
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    });

    // Previous button event
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    });

    // Dot click events
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
      });
    });

    // Initialize carousel position
    updateCarousel();

    // Touch/swipe support for mobile
    this.addTouchSupport(track, () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    }, () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    });
  }

  private addTouchSupport(element: HTMLElement, nextCallback: () => void, prevCallback: () => void) {
    let startX: number;
    let endX: number;

    element.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    element.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      this.handleSwipe(startX, endX, nextCallback, prevCallback);
    });
  }

  private handleSwipe(startX: number, endX: number, nextCallback: () => void, prevCallback: () => void) {
    const swipeThreshold = 50;
    const diff = startX - endX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextCallback(); // Swipe left - next
      } else {
        prevCallback(); // Swipe right - previous
      }
    }
  }
}