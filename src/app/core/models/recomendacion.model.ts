// Contrato de POST /api/recomendaciones (sumaq-backend, app/schemas.py)

export interface RecomendacionRequest {
  fecha_viaje: string; // YYYY-MM-DD
  aventura: number; // 0 a 5
  naturaleza: number;
  relax: number;
  apto_grupos_mixtos: number;
  cultural: number;
  adrenalina: number;
  esfuerzo_fisico: number;
  presupuesto: number; // soles por persona
  distancia_max_km: number; // desde Lima, solo ida
  tiempo_max_horas: number; // desde Lima, solo ida
}

export interface Recomendacion {
  rank: number;
  destino_id: string;
  destino: string;
  region: string;
  precio_base: number;
  distancia_km: number;
  tiempo_horas: number;
  score: number;
  componentes: Record<string, number>;
}

export interface RecomendacionResponse {
  fecha_viaje: string;
  recomendaciones: Recomendacion[];
}
