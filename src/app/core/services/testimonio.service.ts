import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Testimonio } from '../models/testimonio.model';

@Injectable({
  providedIn: 'root'
})
export class TestimonioService {
  private testimonios: Testimonio[] = [
    {
      id: 't1',
      clientName: 'Milagros Cárdenas',
      clientAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      destination: 'Ica - Paracas',
      date: '12 de Julio, 2026',
      comment: 'Excelente organización. El paseo por las Islas Ballestas fue increíble y los tubulares en la Huacachina súper divertidos. Recomiendo totalmente.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 't2',
      clientName: 'Roberto Palacios',
      clientAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      destination: 'Churín',
      date: '28 de Mayo, 2026',
      comment: 'Las aguas termales son lo máximo para relajarse. El guía muy atento en todo momento y el pueblo Sayán tiene unos alfajores riquísimos.',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 't3',
      clientName: 'Andrea Falconí',
      clientAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
      destination: 'Cusco',
      date: '05 de Agosto, 2026',
      comment: 'Machu Picchu superó todas mis expectativas. Sumaq Perú organizó los trenes y hospedaje de manera impecable. Un viaje sin preocupaciones.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 't4',
      clientName: 'Carlos Benavides',
      clientAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      destination: 'Lunahuaná',
      date: '15 de Junio, 2026',
      comment: 'Hicimos canotaje en Lunahuaná con mi familia y nos encantó. El guía de canotaje muy profesional y seguro. La cata de vinos estuvo genial.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 't5',
      clientName: 'Sandro Espinoza',
      clientAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      destination: 'Marcahuasi',
      date: '22 de Abril, 2026',
      comment: 'La caminata es exigente pero las vistas en la meseta y las formaciones son espectaculares. Recomiendo alquilar caballo para la subida.',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=80'
    }
  ];

  getTestimonios(): Observable<Testimonio[]> {
    return of(this.testimonios);
  }
}
