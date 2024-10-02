// src/app/features/home/components/home.component.ts

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  events = [
    {
      id: 1,
      name: 'Live Music Event',
      description: 'Join us for an evening of live music!',
      date: '2024-10-15',
      imageUrl:
        'https://image.wedmegood.com/resized/450X/uploads/member/525015/1724480180__R9A9654.JPG?crop=7,96,1347,757',
    },
    {
      id: 2,
      name: 'Art Exhibition',
      description: 'Explore the latest art pieces from local artists.',
      date: '2024-10-22',
      imageUrl:
        'https://image.wedmegood.com/resized/450X/uploads/member/3501985/1664971410_IMG_20220716_WA0028.jpg?crop=7,86,737,414',
    },
    {
      id: 3,
      name: 'Bougainvillea Banquets',
      description: 'Banquet Halls, 3 Star Hotels with Banquets',
      date: '2024-11-05',
      imageUrl:
        'https://image.wedmegood.com/resized/450X/uploads/member/24977015/1722237231_IMG_20230417_150441.jpg?crop=6,138,1348,758',
    },
  ];

  addToCart(event: any): void {
    alert(`${event.name} has been added to your cart!`);
  }
}
