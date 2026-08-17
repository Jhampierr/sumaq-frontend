import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourService } from '../../../../core/services/tour.service';
import { Tour } from '../../../../core/models/tour.model';
import { CardTourComponent } from '../../../../shared/components/card-tour/card-tour.component';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-viajes-cortos-section',
  standalone: true,
  imports: [CommonModule, CardTourComponent, SectionTitleComponent],
  templateUrl: './viajes-cortos-section.component.html',
  styleUrl: './viajes-cortos-section.component.css'
})
export class ViajesCortosSectionComponent implements OnInit {
  viajesCortos: Tour[] = [];

  constructor(private tourService: TourService) { }

  ngOnInit() {
    this.tourService.getViajesCortos().subscribe(tours => {
      this.viajesCortos = tours;
    });
  }
}
