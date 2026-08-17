import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TourService } from '../../../../core/services/tour.service';
import { Tour } from '../../../../core/models/tour.model';
import { CarouselComponent } from '../../../../shared/components/carousel/carousel.component';
import { CardTourComponent } from '../../../../shared/components/card-tour/card-tour.component';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { ButtonCtaComponent } from '../../../../shared/components/button-cta/button-cta.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-full-days-section',
  standalone: true,
  imports: [CommonModule, CarouselComponent, CardTourComponent, SectionTitleComponent, ButtonCtaComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './full-days-section.component.html',
  styleUrl: './full-days-section.component.css'
})
export class FullDaysSectionComponent implements OnInit {
  fullDays: Tour[] = [];

  constructor(private tourService: TourService) { }

  ngOnInit() {
    this.tourService.getFullDays().subscribe(tours => {
      // Limit to 5 items as requested
      this.fullDays = tours.slice(0, 5);
    });
  }
}
