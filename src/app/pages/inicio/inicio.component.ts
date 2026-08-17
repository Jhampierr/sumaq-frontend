import { Component } from '@angular/core';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FullDaysSectionComponent } from './components/full-days-section/full-days-section.component';
import { DestinosRegionSectionComponent } from './components/destinos-region-section/destinos-region-section.component';
import { PaquetesSectionComponent } from './components/paquetes-section/paquetes-section.component';
import { TestimoniosSectionComponent } from './components/testimonios-section/testimonios-section.component';
import { RespaldoSectionComponent } from './components/respaldo-section/respaldo-section.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    HeroSectionComponent,
    FullDaysSectionComponent,
    DestinosRegionSectionComponent,
    PaquetesSectionComponent,
    TestimoniosSectionComponent,
    RespaldoSectionComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {}
