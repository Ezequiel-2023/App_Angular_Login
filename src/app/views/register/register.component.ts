import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MensajeErrorComponent } from '../../components/mensaje-error/mensaje-error.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true, // Necesario para los componentes independientes
  imports: [
    RouterModule,
    ReactiveFormsModule, // <-- necesario para formGroup y formControlName
    MensajeErrorComponent,
    CommonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {

  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService : AuthService,
  ){
    this.registerForm = this.formBuilder.group({
      handle: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]+$')]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', [Validators.required]],
    }, {
      validators: this.passwordsMatchValidator
    });
}

passwordsMatchValidator(form: FormGroup) {
  const pass = form.get('password')?.value;
  const confirm = form.get('password_confirmation')?.value;
  return pass === confirm ? null : { passwordsMismatch: true };
}


mensajeGlobal: string | null = null;
tipoMensaje: 'error' | 'exito' | null = null;

onSubmit(): void {
  if (this.registerForm.invalid) return;
  const formData = this.registerForm.value;
  this.authService.register(formData).subscribe({
    next: (respuesta) => {
      console.log('Respuesta exitosa:', respuesta); // Debug
      this.mensajeGlobal = respuesta.message;
      this.tipoMensaje = 'exito';
    },
    complete: () => {// Se ejecuta al completar la suscripción
      console.log('Registro completado'); // Debug
      this.registerForm.reset();
    }, 
    error: (error) => {
      console.log('Error:', error); // Debug
      this.mensajeGlobal = error.error?.error || 'Error en el registro';
      this.tipoMensaje = 'error';
      this.registerForm.reset(); // Limpiar el formulario después de un error
    },
  });
}
}
