import { Component, Input } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {
  @Input() rating: number = 5;
  stars = [1, 2, 3, 4, 5];
}
