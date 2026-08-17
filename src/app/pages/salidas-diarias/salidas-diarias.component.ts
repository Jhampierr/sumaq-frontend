import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { TourService } from '../../core/services/tour.service';
import { Tour } from '../../core/models/tour.model';
import { CardTourComponent } from '../../shared/components/card-tour/card-tour.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ButtonCtaComponent } from '../../shared/components/button-cta/button-cta.component';

@Component({
  selector: 'app-salidas-diarias',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, CardTourComponent, SectionTitleComponent, ButtonCtaComponent],
  templateUrl: './salidas-diarias.component.html',
  styleUrl: './salidas-diarias.component.css'
})
export class SalidasDiariasComponent implements OnInit {
  dailyTours: Tour[] = [];

  constructor(private tourService: TourService) {}

  ngOnInit() {
    this.tourService.getTours().subscribe(tours => {
      this.dailyTours = tours.filter(t => t.departures === 'Salidas Diarias');
    });
  }
}
