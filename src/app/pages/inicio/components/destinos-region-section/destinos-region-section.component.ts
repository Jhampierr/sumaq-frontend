import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { TourService } from '../../../../core/services/tour.service';
import { Tour } from '../../../../core/models/tour.model';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { ButtonCtaComponent } from '../../../../shared/components/button-cta/button-cta.component';

@Component({
  selector: 'app-destinos-region-section',
  standalone: true,
  imports: [NgIf, NgFor, SectionTitleComponent, ButtonCtaComponent],
  templateUrl: './destinos-region-section.component.html',
  styleUrl: './destinos-region-section.component.css'
})
export class DestinosRegionSectionComponent implements OnInit {
  spotlightTour?: Tour;

  constructor(private tourService: TourService) { }

  ngOnInit() {
    this.tourService.getSpotlightTour().subscribe(tour => {
      this.spotlightTour = tour;
    });
  }
}
