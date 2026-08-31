import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-button-cta',
  standalone: true,
  imports: [RouterLink, NgClass, NgIf],
  templateUrl: './button-cta.component.html',
  styleUrl: './button-cta.component.css'
})
export class ButtonCtaComponent {
  @Input() text: string = '';
  @Input() link?: string;
  @Input() styleType: 'primary' | 'secondary' | 'outline' | 'white' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' = 'button';
  @Output() btnClick = new EventEmitter<void>();

  onClick(event: Event) {
    if (!this.disabled) {
      if (!this.link) {
        event.preventDefault();
      }
      this.btnClick.emit();
    }
  }

  get isExternalLink(): boolean {
    return !!this.link && /^(https?:)?\/\/|^mailto:|^tel:/i.test(this.link);
  }
}
