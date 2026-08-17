export interface Tour {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  image: string;
  duration: string;
  type: 'full-day' | 'paquete';
  category?: 'viajes-cortos' | 'viajes-promocion';
  location: string;
  highlights?: string[];
  itinerary?: string[];
  included?: string[];
  notIncluded?: string[];
  departures?: string;
}
