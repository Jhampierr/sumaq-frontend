import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { RecomendacionRequest, RecomendacionResult } from '../models/recomendacion.model';

@Injectable({
  providedIn: 'root'
})
export class RecomendadorService {
  obtenerRecomendacion(datos: RecomendacionRequest): Observable<RecomendacionResult> {
    console.log('Llamando al Backend ML (FastAPI / Python)...', datos);
    
    // Algoritmo local de recomendación inteligente para simular el modelo de Machine Learning
    let tourRecomendado = 'ica-paracas'; // Default fallback
    let matchScore = 85;
    let reasoning = '';

    const duracionDeseada = datos.duracion;
    const presupuestoMax = datos.presupuesto;
    const interesPrincipal = datos.intereses && datos.intereses.length > 0 ? datos.intereses[0] : '';
    const region = datos.regionPreferida;

    // Determinar si prefiere Full Day o Paquete
    if (duracionDeseada <= 1) {
      // Filtrar por presupuesto y región/interés en Full Days
      if (region === 'sierra' || interesPrincipal === 'relax') {
        if (presupuestoMax < 100) {
          tourRecomendado = 'canta-obrajillo';
          reasoning = 'Recomendado porque buscas un full day económico a la sierra limeña con paisajes naturales y relajo.';
        } else if (interesPrincipal === 'relax') {
          tourRecomendado = 'churin';
          reasoning = 'Recomendado por su enfoque de bienestar y relajación en baños termales de aguas medicinales, dentro de tu presupuesto.';
        } else {
          tourRecomendado = 'marcahuasi';
          reasoning = 'Recomendado para tu perfil aventurero que prefiere trekking de altura y misticismo en la meseta andina.';
        }
      } else {
        // Costa/Valle
        if (interesPrincipal === 'aventura' && presupuestoMax >= 100) {
          tourRecomendado = 'ica-paracas';
          reasoning = 'Recomendado por la combinación de aventura en la arena (tubulares/sandboard) y biodiversidad en las Islas Ballestas.';
        } else {
          tourRecomendado = 'lunahuana';
          reasoning = 'Recomendado por la gran variedad de deportes de aventura como canotaje, canopy y cuatrimotos en un valle templado.';
        }
      }
    } else {
      // Paquetes de viaje de varios días
      if (datos.tipoViajero === 'escolar' || datos.tipoViajero === 'promocion') {
        // Viajes de promoción
        if (region === 'selva') {
          tourRecomendado = 'tarapoto-promo';
          reasoning = 'Elegido por su ambiente tropical, actividades recreativas en la Laguna Azul y cataratas aptas para grupos escolares.';
        } else {
          tourRecomendado = 'cusco-promo';
          reasoning = 'El clásico e insuperable viaje de promoción escolar que combina historia en Machu Picchu, aventura en cuatrimotos y fiesta de gala.';
        }
      } else {
        // Paquetes tradicionales (Viajes Cortos)
        if (region === 'selva') {
          tourRecomendado = 'selva-central';
          reasoning = 'Perfecto para conectarte con la selva central del Perú, visitando Oxapampa y hermosas cataratas en un viaje de pocos días.';
        } else if (region === 'sierra' && interesPrincipal === 'aventura') {
          tourRecomendado = 'huaraz-express';
          reasoning = 'Ideal para los amantes del trekking y la alta montaña, ofreciendo visitas a lagunas turquesas y vistas a la Cordillera Blanca.';
        } else {
          tourRecomendado = 'cusco-clasico';
          reasoning = 'Recomendado por excelencia: recorre el Valle Sagrado, Cusco colonial y la inigualable ciudadela de Machu Picchu en tren.';
        }
      }
    }

    // Generar un score realista
    matchScore = Math.floor(Math.random() * (99 - 85 + 1)) + 85;

    const result: RecomendacionResult = {
      recommendedTours: [tourRecomendado],
      matchScore,
      reasoning
    };

    // Añadir delay de 1.5s para simular carga del modelo IA
    return of(result).pipe(delay(1500));
  }
}
