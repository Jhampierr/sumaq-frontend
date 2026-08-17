import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf, NgClass, CurrencyPipe } from '@angular/common';
import { Tour } from '../../../core/models/tour.model';

@Component({
  selector: 'app-card-tour',
  standalone: true,
  imports: [RouterLink, NgIf, NgClass, CurrencyPipe],
  templateUrl: './card-tour.component.html',
  styleUrl: './card-tour.component.css'
})
export class CardTourComponent {
  @Input() tour!: Tour;
}
