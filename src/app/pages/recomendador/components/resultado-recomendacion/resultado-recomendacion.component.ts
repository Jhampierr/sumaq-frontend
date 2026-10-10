import { Component, Input } from '@angular/core';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { Recomendacion, RecomendacionResponse } from '../../../../core/models/recomendacion.model';
import { ButtonCtaComponent } from '../../../../shared/components/button-cta/button-cta.component';

// Imagen genérica por región hasta contar con fotos de cada destino
const IMAGEN_POR_REGION: Record<string, string> = {
  Costa: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
  Sierra: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80'
};

// Nombres de los componentes del modelo (COMPONENTS del notebook)
const ETIQUETAS_COMPONENTES: { clave: string; etiqueta: string }[] = [
  { clave: 'FuzzyTOPSIS', etiqueta: 'Coincidencia con tus preferencias y límites' },
  { clave: 'FCM', etiqueta: 'Afinidad con el grupo de destinos' },
  { clave: 'Content', etiqueta: 'Similitud con tu perfil' },
  { clave: 'Demand', etiqueta: 'Demanda histórica' },
  { clave: 'TemporalContext', etiqueta: 'Preferencia en la fecha elegida' },
  { clave: 'PriceFit', etiqueta: 'Ajuste a tu presupuesto' }
];

@Component({
  selector: 'app-resultado-recomendacion',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, ButtonCtaComponent],
  templateUrl: './resultado-recomendacion.component.html',
  styleUrl: './resultado-recomendacion.component.css'
})
export class ResultadoRecomendacionComponent {
  @Input() result!: RecomendacionResponse;
  @Input() resetForm!: () => void;

  readonly etiquetasComponentes = ETIQUETAS_COMPONENTES;

  // Se respeta el orden rank devuelto por el modelo (MMR); no se reordena por score
  get recomendaciones(): Recomendacion[] {
    return this.result.recomendaciones;
  }

  get principal(): Recomendacion {
    return this.result.recomendaciones[0];
  }

  imagen(region: string): string {
    return IMAGEN_POR_REGION[region] ?? IMAGEN_POR_REGION['Costa'];
  }

  onReset() {
    this.resetForm();
  }
}
