import { Component } from '@angular/core';
import { CommonModule, NgIf, NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecomendadorService } from '../../core/services/recomendador.service';
import { RecomendacionRequest, RecomendacionResult } from '../../core/models/recomendacion.model';
import { StepDuracionComponent } from './components/step-duracion/step-duracion.component';
import { StepPresupuestoComponent } from './components/step-presupuesto/step-presupuesto.component';
import { ResultadoRecomendacionComponent } from './components/resultado-recomendacion/resultado-recomendacion.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ButtonCtaComponent } from '../../shared/components/button-cta/button-cta.component';

@Component({
  selector: 'app-recomendador',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgIf,
    NgClass,
    NgFor,
    StepDuracionComponent,
    StepPresupuestoComponent,
    ResultadoRecomendacionComponent,
    SectionTitleComponent,
    ButtonCtaComponent
  ],
  templateUrl: './recomendador.component.html',
  styleUrl: './recomendador.component.css'
})
export class RecomendadorComponent {
  currentStep = 1;
  isAnalyzing = false;
  recommendationResult?: RecomendacionResult;

  // Initialize request model
  datosRequest: RecomendacionRequest = {
    duracion: 1,
    presupuesto: 150,
    tipoViajero: 'solitario',
    intereses: [],
    regionPreferida: 'costa',
    actividadPreferida: 'trekking',
    ritmoViaje: 'moderado',
    alojamiento: 'estandar',
    transporte: 'tervestre',
    clima: 'templado',
    temporada: 'seca',
    alimentacion: 'tipica',
    seguro: false,
    idioma: 'espanol',
    equipaje: 'mediano'
  };

  constructor(private recomendadorService: RecomendadorService) {}

  nextStep() {
    if (this.currentStep < 15) {
      this.currentStep++;
    } else if (this.currentStep === 15) {
      this.procesarRecomendacion();
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onInterestToggle(interest: string, event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.datosRequest.intereses.push(interest);
    } else {
      const index = this.datosRequest.intereses.indexOf(interest);
      if (index > -1) {
        this.datosRequest.intereses.splice(index, 1);
      }
    }
  }

  procesarRecomendacion() {
    this.isAnalyzing = true;
    this.recomendadorService.obtenerRecomendacion(this.datosRequest).subscribe({
      next: (res) => {
        this.recommendationResult = res;
        this.isAnalyzing = false;
        this.currentStep = 16; // Step 16 matches Result component view
      },
      error: (err) => {
        this.isAnalyzing = false;
        console.error(err);
      }
    });
  }

  resetForm = () => {
    this.currentStep = 1;
    this.recommendationResult = undefined;
    this.datosRequest = {
      duracion: 1,
      presupuesto: 150,
      tipoViajero: 'solitario',
      intereses: [],
      regionPreferida: 'costa',
      actividadPreferida: 'trekking',
      ritmoViaje: 'moderado',
      alojamiento: 'estandar',
      transporte: 'tervestre',
      clima: 'templado',
      temporada: 'seca',
      alimentacion: 'tipica',
      seguro: false,
      idioma: 'espanol',
      equipaje: 'mediano'
    };
  };
}
