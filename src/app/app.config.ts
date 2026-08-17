import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
//import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // <-- Importante para Angular Animations

import { routes } from './app.routes';
import { apiErrorInterceptor } from './core/interceptors/api-error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()), // Habilita paso de parámetros en rutas perezosas
    provideHttpClient(withInterceptors([apiErrorInterceptor])),
    //provideAnimations()
    provideAnimationsAsync() // <-- Activa el soporte de animaciones asíncronas sin penalizar la carga inicial
  ]
};
