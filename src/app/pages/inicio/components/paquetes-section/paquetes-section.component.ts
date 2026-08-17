import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { TourService } from '../../../../core/services/tour.service';
import { Tour } from '../../../../core/models/tour.model';
import { CarouselComponent } from '../../../../shared/components/carousel/carousel.component';
import { CardTourComponent } from '../../../../shared/components/card-tour/card-tour.component';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { ButtonCtaComponent } from '../../../../shared/components/button-cta/button-cta.component';

@Component({
  selector: 'app-paquetes-section',
  standalone: true,
  imports: [NgFor, NgIf, CarouselComponent, CardTourComponent, SectionTitleComponent, ButtonCtaComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './paquetes-section.component.html',
  styleUrl: './paquetes-section.component.css'
})
export class PaquetesSectionComponent implements OnInit {
  paquetes: Tour[] = [];

  constructor(private tourService: TourService) { }

  ngOnInit() {
    this.tourService.getPaquetes().subscribe(tours => {
      // Limit to 5 items as requested
      this.paquetes = tours.slice(0, 5);
    });
  }
}
