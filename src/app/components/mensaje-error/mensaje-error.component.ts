import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mensaje-error',
  imports: [CommonModule],
  templateUrl: './mensaje-error.component.html',
  styleUrl: './mensaje-error.component.css'
})
export class MensajeErrorComponent implements OnChanges {

  @Input() mensaje: string = '';
  @Input() tipo: 'error' | 'exito' = 'error';

  visible: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mensaje'] && this.mensaje) {
      this.visible = true;

      // Ocultar automáticamente después de 5 segundos
      setTimeout(() => {
        this.visible = false;
      }, 3000);
    }
  }

  cerrarMensaje(): void {
    this.visible = false;
  }
}
