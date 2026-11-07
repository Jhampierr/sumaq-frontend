import { Component, Input } from '@angular/core';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { Recomendacion, RecomendacionResponse } from '../../../../core/models/recomendacion.model';
import { ButtonCtaComponent } from '../../../../shared/components/button-cta/button-cta.component';

// Foto por destino_id (D004 Dromedarius, D009 Mapi Limeño, D011 Churín, D012 Chancay)
// mientras no haya BD; los destinos sin carpeta muestran el logo de Sumaq
const IMAGEN_POR_DESTINO: Record<string, string> = {
  D012: '/images/CHANCAY/castillo1_medio.webp',
  D011: '/images/CHURIN/churin_medio.webp',
  D009: '/images/MAPI/machu-picchu-limeño1.webp',
  D004: '/images/DROMEDARIUS/dromedarius1_cerca.webp'
};
const LOGO_SUMAQ = '/images/LOGO_SUMAQ.webp';

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

  imagen(destinoId: string): string {
    return IMAGEN_POR_DESTINO[destinoId] ?? LOGO_SUMAQ;
  }

  esLogo(destinoId: string): boolean {
    return !(destinoId in IMAGEN_POR_DESTINO);
  }

  onReset() {
    this.resetForm();
  }
}
