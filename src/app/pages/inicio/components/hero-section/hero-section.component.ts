import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarouselComponent } from '../../../../shared/components/carousel/carousel.component';
import { ButtonCtaComponent } from '../../../../shared/components/button-cta/button-cta.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CarouselComponent, ButtonCtaComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent { }
