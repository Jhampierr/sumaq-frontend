import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgFor } from '@angular/common';
import { TestimonioService } from '../../../../core/services/testimonio.service';
import { Testimonio } from '../../../../core/models/testimonio.model';
import { CarouselComponent } from '../../../../shared/components/carousel/carousel.component';
import { CardTestimonioComponent } from '../../../../shared/components/card-testimonio/card-testimonio.component';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-testimonios-section',
  standalone: true,
  imports: [NgFor, CarouselComponent, CardTestimonioComponent, SectionTitleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './testimonios-section.component.html',
  styleUrl: './testimonios-section.component.css'
})
export class TestimoniosSectionComponent implements OnInit {
  testimonios: Testimonio[] = [];

  constructor(private testimonioService: TestimonioService) { }

  ngOnInit() {
    this.testimonioService.getTestimonios().subscribe(data => {
      // Limit to 5 items as requested
      this.testimonios = data.slice(0, 5);
    });
  }
}
