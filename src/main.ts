import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { register as registerSwiper } from 'swiper/element/bundle';

// Registrar los elementos personalizados de Swiper.js para carruseles
registerSwiper();

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
