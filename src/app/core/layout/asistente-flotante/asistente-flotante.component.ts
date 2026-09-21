import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

const STORAGE_KEY = 'sumaq-asistente-cerrado';

@Component({
  selector: 'app-asistente-flotante',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './asistente-flotante.component.html',
  styleUrl: './asistente-flotante.component.css'
})
export class AsistenteFlotanteComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private timer?: ReturnType<typeof setTimeout>;

  enRecomendador = signal(false);
  mensajeAbierto = signal(false);

  ngOnInit(): void {
    this.enRecomendador.set(this.router.url.startsWith('/recomendador'));
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(e => this.enRecomendador.set(e.urlAfterRedirects.startsWith('/recomendador')));

    if (!this.leerCerrado()) {
      this.timer = setTimeout(() => this.mensajeAbierto.set(true), 4000);
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  alternar(): void {
    this.mensajeAbierto.update(v => !v);
    if (!this.mensajeAbierto()) this.guardarCerrado();
  }

  cerrar(): void {
    this.mensajeAbierto.set(false);
    this.guardarCerrado();
  }

  private leerCerrado(): boolean {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      return false;
    }
  }

  private guardarCerrado(): void {
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {}
  }
}
