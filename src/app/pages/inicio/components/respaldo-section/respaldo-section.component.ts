import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { ButtonCtaComponent } from '../../../../shared/components/button-cta/button-cta.component';

@Component({
  selector: 'app-respaldo-section',
  standalone: true,
  imports: [SectionTitleComponent, ButtonCtaComponent],
  templateUrl: './respaldo-section.component.html',
  styleUrl: './respaldo-section.component.css'
})
export class RespaldoSectionComponent {}
