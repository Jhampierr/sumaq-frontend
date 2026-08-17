import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, CommonModule } from '@angular/common';
import { ClienteService, ContactRequest } from '../../core/services/cliente.service';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ButtonCtaComponent } from '../../shared/components/button-cta/button-cta.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf, SectionTitleComponent, ButtonCtaComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  formData: ContactRequest = {
    nombre: '',
    email: '',
    telefono: '',
    destino: '',
    mensaje: ''
  };

  isSubmitted = false;
  isSending = false;

  constructor(private clienteService: ClienteService) {}

  onSubmit() {
    if (this.formData.nombre && this.formData.email && this.formData.mensaje) {
      this.isSending = true;
      this.clienteService.enviarMensajeContacto(this.formData).subscribe({
        next: () => {
          this.isSending = false;
          this.isSubmitted = true;
          // Reset form
          this.formData = {
            nombre: '',
            email: '',
            telefono: '',
            destino: '',
            mensaje: ''
          };
          setTimeout(() => {
            this.isSubmitted = false;
          }, 5000);
        },
        error: (err) => {
          this.isSending = false;
          console.error(err);
        }
      });
    }
  }
}
