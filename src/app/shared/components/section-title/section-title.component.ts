import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.css'
})
export class SectionTitleComponent {
  @Input() title: string = '';
  @Input() subtitle?: string = '';
  @Input() align: 'center' | 'left' = 'center';
}
