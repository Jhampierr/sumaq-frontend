import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tour } from '../models/tour.model';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  // Catálogo con las fotos propias de Sumaq (public/images). Precios de los full days: precio_oficial
  // del dataset del backend. Duración, precio y fechas de los paquetes y viajes de promoción son
  // provisionales hasta contar con la BD.
  private tours: Tour[] = [
    // ---------- Salidas diarias (full days) ----------
    {
      id: 'ica-paracas',
      name: 'Paracas e Ica Completo',
      description: 'Islas Ballestas en lancha, Reserva de Paracas y adrenalina en tubulares y sandboarding en la Huacachina.',
      longDescription: 'Un día completo al sur de Lima. Navega hacia las Islas Ballestas para ver lobos marinos y aves guaneras, recorre la Reserva Nacional de Paracas y termina la tarde en el Oasis de Huacachina con un paseo en tubulares y sandboarding sobre las dunas.',
      price: 115,
      image: '/images/PARACAS-ICA/7e3c876c-648d-4eec-ab0a-3d26cd7a419c.webp',
      duration: '1 Día',
      type: 'full-day',
      location: 'Paracas - Ica',
      highlights: ['Paseo en lancha a las Islas Ballestas', 'Reserva Nacional de Paracas', 'Tubulares y sandboarding en la Huacachina'],
      included: ['Transporte turístico de ida y vuelta', 'Guía de turismo', 'Paseo a las Islas Ballestas', 'Tubulares y sandboarding en Huacachina'],
      notIncluded: ['Alimentación', 'Entrada a la Reserva de Paracas e impuestos del embarcadero'],
      departures: 'Salidas Diarias'
    },
    {
      id: 'yakupark',
      name: 'Yakupark e Ica',
      description: 'Parque acuático inflable sobre el mar de Paracas y una tarde de aventura en la Huacachina.',
      longDescription: 'Diviértete en Yakupark, el parque acuático inflable flotante en la bahía de Paracas, con toboganes, saltos y obstáculos sobre el mar. Completamos el día en Ica con tubulares y sandboarding en el Oasis de Huacachina.',
      price: 95,
      image: '/images/YAKU/WhatsApp Image 2026-02-21 at 9.54.28 PM (3).webp',
      duration: '1 Día',
      type: 'full-day',
      location: 'Yakupark',
      highlights: ['Parque acuático inflable Yakupark', 'Tubulares y sandboarding en la Huacachina'],
      included: ['Transporte turístico de ida y vuelta', 'Guía de turismo', 'Tubulares y sandboarding en Huacachina'],
      notIncluded: ['Entrada a Yakupark (45 min)', 'Alimentación'],
      departures: 'Salidas Diarias'
    },
    {
      id: 'dromedarius',
      name: 'Dromedarius e Ica',
      description: 'Paseo en dromedario por el desierto, vestimenta árabe y aventura en la Huacachina.',
      longDescription: 'Vive una experiencia única cerca de Lima: recorre el desierto sobre un dromedario, tómate fotos con la vestimenta típica y disfruta de una carpa árabe en Dromedarius. Luego seguimos a Ica para los tubulares y el sandboarding en el Oasis de Huacachina.',
      price: 165,
      image: '/images/DROMEDARIUS/dromedarius1_cerca.webp',
      duration: '1 Día',
      type: 'full-day',
      location: 'Dromedarius - Ica',
      highlights: ['Paseo en dromedario', 'Vestimenta árabe y carpa temática', 'Tubulares y sandboarding en la Huacachina'],
      included: ['Transporte turístico de ida y vuelta', 'Guía de turismo', 'Entrada a Dromedarius', 'Paseo en dromedario y vestimenta', 'Tubulares y sandboarding en Huacachina'],
      notIncluded: ['Alimentación'],
      departures: 'Salidas Diarias'
    },
    {
      id: 'la-mina',
      name: 'Playa La Mina y Yakupark',
      description: 'La playa más bonita de la Reserva de Paracas, con acantilados y aguas tranquilas, más diversión en Yakupark.',
      longDescription: 'Disfruta de Playa La Mina, en la Reserva Nacional de Paracas, rodeada de acantilados y de aguas calmadas ideales para nadar. Para completar el día, visitamos Yakupark, el parque acuático inflable sobre el mar.',
      price: 100,
      image: '/images/LA-MINA/99c55ce1-2556-405c-98be-231266247deb.webp',
      duration: '1 Día',
      type: 'full-day',
      location: 'La Mina - Paracas',
      highlights: ['Playa La Mina en la Reserva de Paracas', 'Mirador y acantilados', 'Parque acuático Yakupark'],
      included: ['Transporte turístico de ida y vuelta', 'Guía de turismo', 'Visita a Playa La Mina'],
      notIncluded: ['Entrada a la Reserva de Paracas', 'Entrada a Yakupark (45 min)', 'Alimentación'],
      departures: 'Salidas Diarias'
    },
    {
      id: 'lunahuana',
      name: 'Aventura en Lunahuaná',
      description: 'Canotaje en el río Cañete, canopy y cuatrimotos en Cerro Azul.',
      longDescription: 'El destino de aventura por excelencia cerca de Lima. Baja los rápidos del río Cañete en canotaje, cruza el valle en canopy y recorre la costa de Cerro Azul en cuatrimotos.',
      price: 75,
      image: '/images/LUNAHUANA/29068974-a125-4c0f-ac6a-11ca7d552d3e.webp',
      duration: '1 Día',
      type: 'full-day',
      location: 'Lunahuaná',
      highlights: ['Canotaje en el río Cañete', 'Canopy sobre el valle', 'Cuatrimotos en Cerro Azul'],
      included: ['Transporte turístico de ida y vuelta', 'Guía de turismo'],
      notIncluded: ['Canotaje, canopy y cuatrimotos (se pagan aparte)', 'Alimentación'],
      departures: 'Salidas Diarias'
    },

    // ---------- Paquetes (viajes cortos) ----------
    {
      id: 'paquete-paracas-ica',
      name: 'Paquete Paracas e Ica',
      description: 'Más tiempo para recorrer Paracas, las Islas Ballestas y las dunas de la Huacachina.',
      longDescription: 'Una escapada más relajada al sur: Islas Ballestas, Reserva Nacional de Paracas, tubulares y sandboarding en la Huacachina, con tiempo para disfrutar la costa de Ica sin apuros.',
      price: 115,
      image: '/images/PARACAS-ICA/94c21ffd-7adf-434f-a4e1-23f9558149ad.webp',
      duration: '2 Días / 1 Noche',
      type: 'paquete',
      category: 'viajes-cortos',
      location: 'Paracas - Ica',
      highlights: ['Islas Ballestas', 'Reserva Nacional de Paracas', 'Tubulares y sandboarding'],
      departures: 'Consultar fechas'
    },
    {
      id: 'paquete-lunahuana',
      name: 'Paquete Lunahuaná',
      description: 'Fin de semana de aventura: canotaje, canopy y cuatrimotos con tiempo para disfrutar el valle.',
      longDescription: 'Pasa más tiempo en el valle de Lunahuaná: canotaje en el río Cañete, canopy, cuatrimotos en Cerro Azul y visita a una apícola local.',
      price: 75,
      image: '/images/LUNAHUANA/IMG-20241124-WA0028.webp',
      duration: '2 Días / 1 Noche',
      type: 'paquete',
      category: 'viajes-cortos',
      location: 'Lunahuaná',
      highlights: ['Canotaje en el río Cañete', 'Canopy', 'Cuatrimotos en Cerro Azul'],
      departures: 'Consultar fechas'
    },
    {
      id: 'paquete-huancaya',
      name: 'Paquete Huancaya',
      description: 'Lagunas turquesas y cascadas en la Reserva Paisajística Nor Yauyos Cochas.',
      longDescription: 'Recorre Huancaya, uno de los paisajes más impresionantes de Yauyos: lagunas de color turquesa, cascadas y puentes colgantes, con paseos en bote y caminatas entre montañas.',
      price: 140,
      image: '/images/HUANCYA/1deb9119-f46c-4e60-a5f5-340554c1ee0e.webp',
      duration: '2 Días / 1 Noche',
      type: 'paquete',
      category: 'viajes-cortos',
      location: 'Huancaya',
      highlights: ['Lagunas turquesas de Huancaya', 'Cascadas y miradores', 'Paseo en bote'],
      departures: 'Consultar fechas'
    },
    {
      id: 'paquete-jauja',
      name: 'Paquete Jauja y Cañón de Shucto',
      description: 'Mirador del cañón, valle del Mantaro y la ciudad de Jauja.',
      longDescription: 'Conoce el Cañón de Shucto con sus miradores sobre el valle, la laguna de Paca y la ciudad de Jauja, en un viaje por la sierra central.',
      price: 149,
      image: '/images/JAUJA/476354333_472824402548008_6017257720206496113_n.webp',
      duration: '2 Días / 1 Noche',
      type: 'paquete',
      category: 'viajes-cortos',
      location: 'Jauja',
      highlights: ['Cañón de Shucto', 'Laguna de Paca', 'Ciudad de Jauja'],
      departures: 'Consultar fechas'
    },

    // ---------- Paquetes (viajes de promoción) ----------
    {
      id: 'promo-paracas',
      name: 'Promoción Escolar: Paracas e Ica',
      description: 'Viaje de promoción con Islas Ballestas, buggies, sandboarding y noche de fogata para todo el grupo.',
      longDescription: 'Un viaje de fin de curso pensado para grupos: recorrido por Paracas y las Islas Ballestas, buggies en las dunas, sandboarding, canopy y noche de fogata, con coordinadores acompañando al grupo en todo momento.',
      price: 115,
      image: '/images/VIAJE-DE-PROMOCION/IMG_20241123_081403.webp',
      duration: '2 Días / 1 Noche',
      type: 'paquete',
      category: 'viajes-promocion',
      location: 'Paracas - Ica',
      highlights: ['Paracas e Islas Ballestas', 'Buggies y sandboarding', 'Noche de fogata'],
      departures: 'Bajo Cotización'
    },
    {
      id: 'promo-lunahuana',
      name: 'Promoción Escolar: Lunahuaná y Cerro Azul',
      description: 'Canotaje, canopy y cuatrimotos para grupos de promoción, con coordinadores permanentes.',
      longDescription: 'Aventura para promociones escolares en Lunahuaná y Cerro Azul: canotaje en el río Cañete, canopy, cuatrimotos y actividades grupales, con coordinadores acompañando al grupo.',
      price: 75,
      image: '/images/VIAJE-DE-PROMOCION/IMG_6606.webp',
      duration: '2 Días / 1 Noche',
      type: 'paquete',
      category: 'viajes-promocion',
      location: 'Lunahuaná',
      highlights: ['Canotaje en el río Cañete', 'Canopy', 'Cuatrimotos en Cerro Azul'],
      departures: 'Bajo Cotización'
    }
  ];

  getTours(): Observable<Tour[]> {
    return of(this.tours);
  }

  getTourById(id: string): Observable<Tour | undefined> {
    const tour = this.tours.find(t => t.id === id);
    return of(tour);
  }

  getFullDays(): Observable<Tour[]> {
    return of(this.tours.filter(t => t.type === 'full-day'));
  }

  getPaquetes(): Observable<Tour[]> {
    return of(this.tours.filter(t => t.type === 'paquete'));
  }

  getViajesCortos(): Observable<Tour[]> {
    return of(this.tours.filter(t => t.type === 'paquete' && t.category === 'viajes-cortos'));
  }

  getViajesPromocion(): Observable<Tour[]> {
    return of(this.tours.filter(t => t.type === 'paquete' && t.category === 'viajes-promocion'));
  }

  getSpotlightTour(): Observable<Tour | undefined> {
    // Spotlight is Ica - Paracas
    return this.getTourById('ica-paracas');
  }
}
