import { Component } from '@angular/core';
import { ViajesCortosSectionComponent } from './components/viajes-cortos-section/viajes-cortos-section.component';
import { ViajesPromocionSectionComponent } from './components/viajes-promocion-section/viajes-promocion-section.component';

@Component({
  selector: 'app-paquetes',
  standalone: true,
  imports: [ViajesCortosSectionComponent, ViajesPromocionSectionComponent],
  templateUrl: './paquetes.component.html',
  styleUrl: './paquetes.component.css'
})
export class PaquetesComponent {}
