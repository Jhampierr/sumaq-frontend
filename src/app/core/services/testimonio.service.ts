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
      destination: 'Paracas - Ica',
      date: '12 de Julio, 2026',
      comment: 'Excelente organización. El paseo por las Islas Ballestas fue increíble y los tubulares en la Huacachina súper divertidos. Recomiendo totalmente.',
      rating: 5,
      image: '/images/PARACAS-ICA/94c21ffd-7adf-434f-a4e1-23f9558149ad.webp'
    },
    {
      id: 't2',
      clientName: 'Roberto Palacios',
      clientAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      destination: 'Huancaya',
      date: '28 de Mayo, 2026',
      comment: 'Las lagunas turquesas son impresionantes. El guía estuvo atento en todo momento y el paisaje valió cada hora de viaje.',
      rating: 4,
      image: '/images/HUANCYA/4502940a-4db2-4721-be21-627738400dc4.webp'
    },
    {
      id: 't3',
      clientName: 'Andrea Falconí',
      clientAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
      destination: 'Yakupark',
      date: '05 de Agosto, 2026',
      comment: 'Yakupark fue lo mejor del viaje, fuimos en familia y los chicos no querían salir del agua. Todo muy bien organizado por Sumaq Perú.',
      rating: 5,
      image: '/images/YAKU/FB_IMG_1708461192332.webp'
    },
    {
      id: 't4',
      clientName: 'Carlos Benavides',
      clientAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      destination: 'Lunahuaná',
      date: '15 de Junio, 2026',
      comment: 'Hicimos canotaje en Lunahuaná con mi familia y nos encantó. El guía de canotaje muy profesional y seguro. Volveremos pronto.',
      rating: 5,
      image: '/images/LUNAHUANA/IMG-20241124-WA0030.webp'
    },
    {
      id: 't5',
      clientName: 'Sandro Espinoza',
      clientAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      destination: 'Jauja',
      date: '22 de Abril, 2026',
      comment: 'Las vistas del cañón son espectaculares y la atención de Sumaq Perú fue excelente de principio a fin. Muy recomendado.',
      rating: 4,
      image: '/images/JAUJA/476610582_472824185881363_231333668135876351_n.webp'
    }
  ];

  getTestimonios(): Observable<Testimonio[]> {
    return of(this.testimonios);
  }
}
