import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ContactRequest {
  nombre: string;
  email: string;
  telefono: string;
  destino: string;
  mensaje: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  enviarMensajeContacto(request: ContactRequest): Observable<boolean> {
    console.log('Contacto enviado al Backend principal (NestJS):', request);
    // Simular llamada al backend
    return of(true);
  }
}
