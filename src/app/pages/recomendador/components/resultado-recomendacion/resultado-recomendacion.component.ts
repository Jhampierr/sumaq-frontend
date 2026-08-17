import { Component, Input, OnInit } from '@angular/core';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { RecomendacionResult } from '../../../../core/models/recomendacion.model';
import { TourService } from '../../../../core/services/tour.service';
import { Tour } from '../../../../core/models/tour.model';
import { CardTourComponent } from '../../../../shared/components/card-tour/card-tour.component';
import { ButtonCtaComponent } from '../../../../shared/components/button-cta/button-cta.component';

@Component({
  selector: 'app-resultado-recomendacion',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, CardTourComponent, ButtonCtaComponent],
  templateUrl: './resultado-recomendacion.component.html',
  styleUrl: './resultado-recomendacion.component.css'
})
export class ResultadoRecomendacionComponent implements OnInit {
  @Input() result!: RecomendacionResult;
  @Input() resetForm!: () => void;
  recommendedTour?: Tour;

  constructor(private tourService: TourService) {}

  ngOnInit() {
    if (this.result && this.result.recommendedTours.length > 0) {
      const tourId = this.result.recommendedTours[0];
      this.tourService.getTourById(tourId).subscribe(tour => {
        this.recommendedTour = tour;
      });
    }
  }

  onReset() {
    this.resetForm();
  }
}
