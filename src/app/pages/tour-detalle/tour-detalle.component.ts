import { Component, Input, OnInit } from '@angular/core';
import { NgIf, NgFor, CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TourService } from '../../core/services/tour.service';
import { Tour } from '../../core/models/tour.model';
import { ButtonCtaComponent } from '../../shared/components/button-cta/button-cta.component';

@Component({
  selector: 'app-tour-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink, NgIf, NgFor, CurrencyPipe, ButtonCtaComponent],
  templateUrl: './tour-detalle.component.html',
  styleUrl: './tour-detalle.component.css'
})
export class TourDetalleComponent implements OnInit {
  @Input() id!: string;
  tour?: Tour;

  constructor(private tourService: TourService) {}

  ngOnInit() {
    if (this.id) {
      this.tourService.getTourById(this.id).subscribe(data => {
        this.tour = data;
      });
    }
  }
}
