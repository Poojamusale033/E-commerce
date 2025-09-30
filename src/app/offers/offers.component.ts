import { Component } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
  
})
export class OfferComponent {
  selectedFilter: string = 'All offers';
  selectedSort: string = 'Relevance';
  

  filters: string[] = ['All offers', 'Phones', 'Accessories'];

  offers = [
    {
      id: 1,
      title: 'Get 1 year of Google AI Pro on us when you buy any new Pixel 10 Pro phone.',
      image: 'assets/images/pixel10-pro.png',
      tag: 'New'
    },
    {
      id: 2,
      title: 'Pixel 10 includes 6 months of both the Google One Premium and YouTube Premium.',
      image: 'assets/images/pixel10-blue.png',
      tag: 'New'
    },
    {
      id: 3,
      title: 'Buy a Pixel 9 Pro or Pixel 9 Pro XL and pay over time with no-cost EMIs.',
      image: 'assets/images/pixel9-pro.png'
    }
  ];

  selectFilter(filter: string) {
    this.selectedFilter = filter;
  }


  selectSort(event: Event) {
  const value = (event.target as HTMLSelectElement).value;
  this.selectedSort = value;
}

}
