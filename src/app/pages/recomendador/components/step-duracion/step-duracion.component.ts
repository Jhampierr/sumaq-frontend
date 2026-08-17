import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-step-duracion',
  standalone: true,
  imports: [NgClass],
  templateUrl: './step-duracion.component.html',
  styleUrl: './step-duracion.component.css'
})
export class StepDuracionComponent {
  @Input() value: number = 1;
  @Output() valueChange = new EventEmitter<number>();
  @Output() next = new EventEmitter<void>();

  selectDays(days: number) {
    this.value = days;
    this.valueChange.emit(days);
  }

  onNext() {
    this.next.emit();
  }
}
