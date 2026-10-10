import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecomendacionRequest, RecomendacionResponse } from '../models/recomendacion.model';

@Injectable({
  providedIn: 'root'
})
export class RecomendadorService {
  constructor(private http: HttpClient) {}

  // En desarrollo, proxy.conf.json redirige /api al backend FastAPI (puerto 8000)
  obtenerRecomendacion(datos: RecomendacionRequest): Observable<RecomendacionResponse> {
    return this.http.post<RecomendacionResponse>('/api/recomendaciones', datos);
  }
}
