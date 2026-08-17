import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ButtonCtaComponent } from '../../shared/components/button-cta/button-cta.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [SectionTitleComponent, ButtonCtaComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {}
