import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-step-presupuesto',
  standalone: true,
  imports: [NgClass],
  templateUrl: './step-presupuesto.component.html',
  styleUrl: './step-presupuesto.component.css'
})
export class StepPresupuestoComponent {
  @Input() value: number = 100;
  @Output() valueChange = new EventEmitter<number>();
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  selectBudget(budget: number) {
    this.value = budget;
    this.valueChange.emit(budget);
  }

  onNext() {
    this.next.emit();
  }

  onPrev() {
    this.prev.emit();
  }
}
