import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tour } from '../models/tour.model';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private tours: Tour[] = [
    {
      id: 'ica-paracas',
      name: 'Ica y Paracas Completo',
      description: 'Disfruta del oasis de la Huacachina en tubulares y explora la fauna marina en las Islas Ballestas.',
      longDescription: 'Emprende un viaje inolvidable hacia el sur de Lima. Descubre la Reserva Nacional de Paracas y navega hacia las Islas Ballestas para ver pingüinos de Humboldt, lobos marinos y aves guaneras. Por la tarde, viajaremos a Ica para visitar bodegas vitivinícolas artesanales y vivir la adrenalina de los carros areneros (tubulares) y el sandboarding en el espectacular Oasis de Huacachina.',
      price: 149,
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
      duration: '1 Día',
      type: 'full-day',
      location: 'Ica - Paracas',
      highlights: ['Paseo en lancha en Islas Ballestas', 'Degustación de Vinos y Piscos en Ica', 'Sandboarding y Tubulares en la Huacachina'],
      itinerary: [
        '04:30 AM - Partida con destino a la Bahía de Paracas.',
        '08:00 AM - Llegada al embarcadero El Chaco y navegación en deslizador a las Islas Ballestas.',
        '10:30 AM - Salida con dirección a la ciudad de Ica.',
        '12:30 PM - Almuerzo y visita a bodega vitivinícola artesanal "El Catador".',
        '04:00 PM - Traslado al Oasis de Huacachina, paseo en tubulares y sandboarding.',
        '06:30 PM - Salida de retorno a Lima.'
      ],
      included: ['Transporte turístico bioseguro de ida y vuelta', 'Guía Oficial de Turismo', 'Excursión a las Islas Ballestas', 'Tubulares y sandboarding en Huacachina', 'Degustación gratuita de vinos, piscos y chocolates'],
      notIncluded: ['Almuerzo', 'Impuestos turísticos (SERNANP + Embarcadero: S/. 27 total)'],
      departures: 'Salidas Diarias'
    },
    {
      id: 'churin',
      name: 'Baños Termales de Churín',
      description: 'Relájate y renueva tus energías en las propiedades medicinales de las aguas termales de Churín.',
      longDescription: 'Escápate de la rutina urbana y sumérgete en las relajantes aguas termominerales de Churín. Conocido por sus fuentes de azufre, hierro y litio con propiedades medicinales y terapéuticas. Visitaremos los principales complejos termales de Mamahuarmi y la Juventud, y realizaremos un recorrido por la plaza del pueblo y la Iglesia Matriz.',
      price: 119,
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      duration: '1 Día',
      type: 'full-day',
      location: 'Churín',
      highlights: ['Complejo Termal Mamahuarmi', 'Pozo de la Eterna Juventud', 'Visita al pueblito de Sayán (Dulce de Sayán)'],
      itinerary: [
        '05:00 AM - Partida hacia el norte chico rumbo a Churín.',
        '08:30 AM - Breve parada en Sayán, "Tierra del Sol", para desayunar y probar dulces artesanales.',
        '11:00 AM - Llegada a Churín y visita al Complejo Termal Mamahuarmi y sus diversas pozas.',
        '01:30 PM - Almuerzo libre (Platos típicos a base de trucha y pachamanca).',
        '03:00 PM - Recorrido por el centro de Churín y compras de quesos, panes de molde y alfajores.',
        '05:00 PM - Retorno hacia la ciudad de Lima.'
      ],
      included: ['Transporte turístico ida y vuelta', 'Guía conductor certificado', 'Entradas al Complejo Termal Mamahuarmi', 'Visita guiada en Sayán y Churín'],
      notIncluded: ['Desayuno y Almuerzo', 'Gastos personales'],
      departures: 'Salidas Diarias'
    },
    {
      id: 'marcahuasi',
      name: 'Marcahuasi Místico y Aventura',
      description: 'Una caminata exigente pero mágica por las colosales formaciones rocosas sobre las nubes.',
      longDescription: 'Marcahuasi es una meseta de origen volcánico rodeada de un halo de misterio y misticismo. Ubicado a 4,000 m.s.n.m. en la provincia de Huarochirí. Ideal para los amantes del trekking, fotografía de paisajes andinos y conexión espiritual. Podremos observar figuras rocosas icónicas como el Monumento a la Humanidad (Peca Gasha).',
      price: 129,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      duration: '1 Día',
      type: 'full-day',
      location: 'Marcahuasi',
      highlights: ['Trekking de altura', 'Monumento a la Humanidad', 'Mirador del Anfiteatro'],
      itinerary: [
        '04:00 AM - Reunión y salida hacia San Pedro de Casta.',
        '08:00 AM - Llegada al pueblo de San Pedro de Casta para aclimatación.',
        '09:00 AM - Inicio del trekking (aprox. 3 horas) o alquiler de caballos (opcional) hacia la meseta.',
        '12:00 PM - Llegada a la meseta, exploración del Monumento a la Humanidad y el Anfiteatro.',
        '02:30 PM - Descenso a San Pedro de Casta y almuerzo.',
        '04:30 PM - Retorno a Lima.'
      ],
      included: ['Transporte turístico privado de ida y vuelta', 'Guía local experto en alta montaña', 'Entradas a la comunidad y meseta', 'Botiquín de primeros auxilios y asistencia'],
      notIncluded: ['Alquiler de caballos (S/. 30-40 aprox.)', 'Alimentación'],
      departures: 'Fines de Semana'
    },
    {
      id: 'canta-obrajillo',
      name: 'Canta y Obrajillo Tradicional',
      description: 'Hermosa campiña limeña, cataratas naturales y un día de relax al aire libre.',
      longDescription: 'Escápate al aire puro de la sierra limeña en Canta y el hermoso pueblito de Obrajillo. Disfruta de paseos a caballo, degustación de truchas frescas a la parrilla y vistas a hermosas cascadas. En la ruta visitaremos también el histórico Santuario de Santa Rosa de Quives.',
      price: 89,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      duration: '1 Día',
      type: 'full-day',
      location: 'Canta - Obrajillo',
      highlights: ['Santuario de Santa Rosa de Quives', 'Catarata Lucle en Obrajillo', 'Paseo a caballo campestre'],
      included: ['Transporte turístico Lima - Canta - Obrajillo - Lima', 'Guía de turismo', 'Visitas según itinerario', 'Seguro de pasajeros'],
      notIncluded: ['Paseo a caballo', 'Alimentación'],
      departures: 'Salidas Diarias'
    },
    {
      id: 'lunahuana',
      name: 'Aventura Extrema en Lunahuaná',
      description: 'Siente la adrenalina del canotaje, canopy y cuatrimotos en el valle de Lunahuaná.',
      longDescription: 'El destino de aventura por excelencia cerca de Lima. Lunahuaná nos recibe con su excelente clima templado todo el año. Disfruta del canotaje en el caudaloso río Cañete, cruza el valle en canopy a gran velocidad o recorre los caminos de herradura en cuatrimotos. Cerramos el día catando ricos piscos y vinos locales.',
      price: 99,
      image: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=800&q=80',
      duration: '1 Día',
      type: 'full-day',
      location: 'Lunahuaná',
      highlights: ['Canotaje en Río Cañete', 'Degustación de Vinos en Bodega Catena', 'Pueblo de Catapalla'],
      included: ['Transporte de turismo ida y vuelta', 'Guía de turismo', 'Degustación de vinos y piscos gratis', 'Uso de botiquín'],
      notIncluded: ['Actividades deportivas de aventura (Canotaje: S/. 35, Canopy: S/. 50, Cuatrimoto: S/. 45)', 'Almuerzo'],
      departures: 'Salidas Diarias'
    },
    {
      id: 'huaraz-express',
      name: 'Huaraz Mágico y Laguna Churup',
      description: 'Explora la imponencia del Parque Nacional Huascarán y la bella laguna Churup.',
      longDescription: 'Una aventura de 3 días y 2 noches en la capital del trekking peruano. Rodeado de picos nevados espectaculares en la Cordillera Blanca. Visitaremos el emblemático Callejón de Huaylas, la impresionante Laguna de Llanganuco (Chinancocha) con aguas turquesas cristalinas y realizaremos un exigente pero gratificante trekking hacia la mística Laguna Churup a los pies del nevado.',
      price: 349,
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
      duration: '3 Días / 2 Noches',
      type: 'paquete',
      category: 'viajes-cortos',
      location: 'Huaraz',
      highlights: ['Laguna de Llanganuco', 'Laguna Churup trekking', 'Callejón de Huaylas y Caraz'],
      included: ['Traslados Terminal - Hotel - Terminal', '2 noches de alojamiento en hotel 3 estrellas', 'Tours guiados compartidos', 'Tickets de ingreso al Parque Nacional Huascarán'],
      notIncluded: ['Pasajes terrestres Lima - Huaraz - Lima', 'Alimentos no descritos'],
      departures: 'Fines de Semana'
    },
    {
      id: 'selva-central',
      name: 'Chanchamayo y Oxapampa Exótico',
      description: 'Cruza los Andes hacia el paraíso verde de Oxapampa y las cataratas de Chanchamayo.',
      longDescription: 'Adéntrate en el pulmón de la selva central del Perú. En este paquete de 3 días conocerás Chanchamayo con sus espectaculares cataratas como Bayoz y Velo de Novia, además de interactuar con la Comunidad Nativa Asháninka. En el segundo día, visitaremos Oxapampa para conocer la maravillosa fusión cultural Austro-Alemana en su arquitectura, danzas tradicionales y exquisitos lácteos.',
      price: 299,
      image: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=800&q=80',
      duration: '3 Días / 2 Noches',
      type: 'paquete',
      category: 'viajes-cortos',
      location: 'Chanchamayo',
      highlights: ['Catarata Bayoz y Velo de Novia', 'Comunidad Nativa Asháninka', 'Pueblo de Oxapampa y Pozuzo'],
      included: ['Transporte interno privado para los tours', '2 noches de hospedaje turístico', 'Tickets de ingreso a todos los atractivos', 'Guías locales especializados'],
      notIncluded: ['Alimentos', 'Pasajes de Lima a la Merced ida y vuelta'],
      departures: 'Fines de Semana'
    },
    {
      id: 'cusco-clasico',
      name: 'Cusco Imperial y Machu Picchu',
      description: 'El clásico viaje que todo peruano debe hacer: templos incas y la gran maravilla del mundo.',
      longDescription: 'Déjate cautivar por la magia de los Incas. Nuestro paquete cubre los atractivos indispensables del Cusco: un city tour colonial e inca por Sacsayhuamán y Qorikancha, un día de exploración en el fértil Valle Sagrado (Pisac y Ollantaytambo), y la inolvidable visita a la Ciudadela Perdida de Machu Picchu, viajando en los cómodos trenes Expedition o Voyager.',
      price: 799,
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=800&q=80',
      duration: '4 Días / 3 Noches',
      type: 'paquete',
      category: 'viajes-cortos',
      location: 'Cusco',
      highlights: ['Boleto de Ingreso a Machu Picchu', 'Tren Expedition ida y vuelta', 'City Tour en Cusco colonial e inca'],
      included: ['Traslados Aeropuerto - Hotel - Aeropuerto', '3 noches en hotel céntrico en Cusco con desayuno', 'Boleto Turístico del Cusco (BTC)', 'Entrada y guiado en Machu Picchu', 'Tickets de tren Cusco - Aguas Calientes - Cusco'],
      notIncluded: ['Boletos aéreos', 'Almuerzos y cenas no especificados'],
      departures: 'Salidas Diarias'
    },
    {
      id: 'cusco-promo',
      name: 'Cusco Promoción Escolar Deluxe',
      description: 'El viaje de promoción escolar soñado con excursiones completas, seguridad y fiesta de gala.',
      longDescription: 'El viaje de fin de curso más seguro y divertido para los colegios de todo el Perú. Un paquete todo incluido diseñado para mantener a los alumnos entretenidos y seguros. Visitamos Machu Picchu, las Salineras de Maras, Moray, el Valle Sagrado y cerramos con una espectacular cena y fiesta de gala de promoción en un exclusivo local cusqueño.',
      price: 650,
      image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80',
      duration: '5 Días / 4 Noches',
      type: 'paquete',
      category: 'viajes-promocion',
      location: 'Cusco',
      highlights: ['Tour completo a Machu Picchu', 'Maras y Moray en Cuatrimotos', 'Fiesta de Promoción de Gala'],
      included: ['Vuelos o pasajes terrestres grupales', 'Hospedaje grupal exclusivo para el colegio', 'Pensión completa (Desayunos, Almuerzos y Cenas diarios)', 'Personal médico de asistencia 24 horas', '1 liberado por cada 15 alumnos pagantes'],
      notIncluded: ['Seguro de viajes individual opcional'],
      departures: 'Bajo Cotización'
    },
    {
      id: 'tarapoto-promo',
      name: 'Tarapoto Aventura Escolar',
      description: 'Un viaje de promoción en la selva con diversión acuática en la Laguna Azul y cataratas.',
      longDescription: 'Una aventura selvática inigualable para promociones escolares. Descubre Tarapoto con su clima caluroso y su desbordante naturaleza. Los estudiantes disfrutarán del paseo en bote y deportes acuáticos en la hermosa Laguna Azul del Sauce, caminatas a la Catarata de Ahuashiyacu y un día completo de aventura extrema con canopy y caminatas ecológicas.',
      price: 550,
      image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80',
      duration: '4 Días / 3 Noches',
      type: 'paquete',
      category: 'viajes-promocion',
      location: 'Tarapoto',
      highlights: ['Excursión y almuerzo en la Laguna Azul', 'Baño en Catarata de Ahuashiyacu', 'Canopy y canopy de aventura'],
      included: ['Pasajes aéreos o terrestres grupales', 'Alojamiento en resort con piscina', 'Alimentación completa tipo buffet', 'Guías y coordinadores grupales permanentes', 'Noche de fogata y fiesta caribeña de despedida'],
      notIncluded: ['Propinas a guías locales'],
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
