import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { Testimonio } from '../../../core/models/testimonio.model';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-card-testimonio',
  standalone: true,
  imports: [RouterLink, NgIf, StarRatingComponent],
  templateUrl: './card-testimonio.component.html',
  styleUrl: './card-testimonio.component.css'
})
export class CardTestimonioComponent {
  @Input() testimonio!: Testimonio;
}
