import { Component, OnInit, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgClass],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {
  // Registrar los componentes de Swiper
  ngOnInit() {
    register(); // <-- Activa los Web Components de Swiper en el navegador
  }

  @Input() slidesPerView: number | string = 3;
  @Input() spaceBetween: number = 24;
  @Input() loop: boolean = true;
  @Input() autoplay: boolean = true;
  @Input() autoplayDelay: number = 3500;
  @Input() navigation: boolean = true;
  @Input() pagination: boolean = true;
  @Input() centeredSlides: boolean = false;

  // Default responsive breakpoints for 3 columns on desktop, 2 on tablet, 1 on mobile
  @Input() breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 16
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: this.slidesPerView === 'auto' ? 'auto' : Math.min(Number(this.slidesPerView), 3),
      spaceBetween: 24
    }
  };

  get isSingleSlide(): boolean {
    return this.slidesPerView === 1 || this.slidesPerView === '1';
  }

  get breakpointsAttr(): string {
    return JSON.stringify(this.breakpoints);
  }
}
