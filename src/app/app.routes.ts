import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/layout/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      },
      {
        path: 'inicio',
        loadComponent: () => import('./pages/inicio/inicio.component').then(m => m.InicioComponent)
      },
      {
        path: 'full-days',
        loadComponent: () => import('./pages/full-days/full-days.component').then(m => m.FullDaysComponent)
      },
      {
        path: 'salidas-diarias',
        loadComponent: () => import('./pages/salidas-diarias/salidas-diarias.component').then(m => m.SalidasDiariasComponent)
      },
      {
        path: 'paquetes',
        loadComponent: () => import('./pages/paquetes/paquetes.component').then(m => m.PaquetesComponent)
      },
      {
        path: 'nosotros',
        loadComponent: () => import('./pages/nosotros/nosotros.component').then(m => m.NosotrosComponent)
      },
      {
        path: 'contacto',
        loadComponent: () => import('./pages/contacto/contacto.component').then(m => m.ContactoComponent)
      },
      {
        path: 'tour/:id',
        loadComponent: () => import('./pages/tour-detalle/tour-detalle.component').then(m => m.TourDetalleComponent)
      },
      {
        path: 'recomendador',
        loadComponent: () => import('./pages/recomendador/recomendador.component').then(m => m.RecomendadorComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];
