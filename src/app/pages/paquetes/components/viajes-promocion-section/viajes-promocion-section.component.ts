import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { TourService } from '../../../../core/services/tour.service';
import { Tour } from '../../../../core/models/tour.model';
import { CardTourComponent } from '../../../../shared/components/card-tour/card-tour.component';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-viajes-promocion-section',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, CardTourComponent, SectionTitleComponent],
  templateUrl: './viajes-promocion-section.component.html',
  styleUrl: './viajes-promocion-section.component.css'
})
export class ViajesPromocionSectionComponent implements OnInit {
  viajesPromocion: Tour[] = [];

  constructor(private tourService: TourService) {}

  ngOnInit() {
    this.tourService.getViajesPromocion().subscribe(tours => {
      this.viajesPromocion = tours;
    });
  }
}
