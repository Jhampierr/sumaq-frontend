import { Component, signal } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CommonModule, NgIf, NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecomendadorService } from '../../core/services/recomendador.service';
import { RecomendacionRequest, RecomendacionResponse } from '../../core/models/recomendacion.model';
import { ResultadoRecomendacionComponent } from './components/resultado-recomendacion/resultado-recomendacion.component';

type Preferencia = keyof Pick<
  RecomendacionRequest,
  'aventura' | 'naturaleza' | 'relax' | 'apto_grupos_mixtos' | 'cultural' | 'adrenalina' | 'esfuerzo_fisico'
>;

const TOTAL_PASOS = 4;

@Component({
  selector: 'app-recomendador',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgIf,
    NgClass,
    NgFor,
    ResultadoRecomendacionComponent
  ],
  templateUrl: './recomendador.component.html',
  styleUrl: './recomendador.component.css'
})
export class RecomendadorComponent {
  readonly totalPasos = TOTAL_PASOS;
  readonly hoy = new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD en hora local

  // Los 7 atributos que usa el modelo (PREF_COLS del notebook), escala 0 a 5
  readonly preferencias: { clave: Preferencia; titulo: string; descripcion: string }[] = [
    { clave: 'aventura', titulo: 'Aventura', descripcion: 'Explorar y hacer actividades al aire libre' },
    { clave: 'naturaleza', titulo: 'Naturaleza', descripcion: 'Paisajes, ríos, montañas y campo' },
    { clave: 'relax', titulo: 'Relax', descripcion: 'Descansar y viajar con calma' },
    { clave: 'apto_grupos_mixtos', titulo: 'Apto para grupos mixtos', descripcion: 'Que lo disfruten personas de distintas edades' },
    { clave: 'cultural', titulo: 'Cultural', descripcion: 'Historia, arqueología y tradiciones' },
    { clave: 'adrenalina', titulo: 'Adrenalina', descripcion: 'Deportes extremos como canotaje, tubulares o sandboard' },
    { clave: 'esfuerzo_fisico', titulo: 'Esfuerzo físico', descripcion: 'Nivel de caminata y exigencia física que buscas' }
  ];

  // Signals: Angular 22 usa OnPush por defecto y la respuesta HTTP llega de forma asíncrona
  currentStep = signal(1);
  isAnalyzing = signal(false);
  errorMessage = signal('');
  recommendationResult = signal<RecomendacionResponse | undefined>(undefined);
  datosRequest: RecomendacionRequest = this.valoresIniciales();

  constructor(
    private recomendadorService: RecomendadorService,
    private location: Location,
    private router: Router
  ) {}

  get fechaValida(): boolean {
    return !!this.datosRequest.fecha_viaje && this.datosRequest.fecha_viaje >= this.hoy;
  }

  salir() {
    // navigationId > 1 means the user arrived from another page inside the app
    if ((history.state?.navigationId ?? 0) > 1) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/inicio');
    }
  }

  nextStep() {
    if (this.currentStep() === 1 && !this.fechaValida) {
      return;
    }
    if (this.currentStep() < TOTAL_PASOS) {
      this.currentStep.update(paso => paso + 1);
    } else if (this.currentStep() === TOTAL_PASOS) {
      this.procesarRecomendacion();
    }
  }

  prevStep() {
    if (this.currentStep() > 1) {
      this.currentStep.update(paso => paso - 1);
    }
  }

  procesarRecomendacion() {
    this.isAnalyzing.set(true);
    this.errorMessage.set('');
    this.recomendadorService.obtenerRecomendacion(this.datosRequest).subscribe({
      next: (res) => {
        this.recommendationResult.set(res);
        this.isAnalyzing.set(false);
        this.currentStep.set(TOTAL_PASOS + 1);
      },
      error: () => {
        this.isAnalyzing.set(false);
        this.errorMessage.set('No se pudo obtener la recomendación. Verifica que el servidor del recomendador esté activo e inténtalo nuevamente.');
      }
    });
  }

  resetForm = () => {
    this.currentStep.set(1);
    this.errorMessage.set('');
    this.recommendationResult.set(undefined);
    this.datosRequest = this.valoresIniciales();
  };

  private valoresIniciales(): RecomendacionRequest {
    return {
      fecha_viaje: '',
      aventura: 3,
      naturaleza: 3,
      relax: 3,
      apto_grupos_mixtos: 3,
      cultural: 3,
      adrenalina: 3,
      esfuerzo_fisico: 3,
      presupuesto: 100,
      distancia_max_km: 250,
      tiempo_max_horas: 4
    };
  }
}
