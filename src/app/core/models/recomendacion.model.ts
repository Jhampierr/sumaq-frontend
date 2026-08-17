export interface RecomendacionRequest {
  duracion: number;
  presupuesto: number;
  tipoViajero: string;
  intereses: string[];
  regionPreferida: string;
  actividadPreferida: string;
  ritmoViaje: string;
  alojamiento: string;
  transporte: string;
  clima: string;
  temporada: string;
  alimentacion: string;
  seguro: boolean;
  idioma: string;
  equipaje: string;
}

export interface RecomendacionResult {
  recommendedTours: string[]; // Tour IDs
  matchScore: number;
  reasoning: string;
}
