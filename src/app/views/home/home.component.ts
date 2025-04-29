import { Component, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { MensajeErrorComponent } from '../../components/mensaje-error/mensaje-error.component';


@Component({
  selector: 'app-home',
  imports: [
    RouterModule,
    ReactiveFormsModule, // <-- necesario para formGroup y formControlName
    CommonModule,
    MensajeErrorComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService : AuthService,
    private router: Router,
  ){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  mensajeGlobal: string | null = null;
  tipoMensaje: 'error' | 'exito' | null = null;
  
  onLogin() {
    if (this.loginForm.invalid) return;
  
    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.message); // token en el localStorage
        this.mensajeGlobal = 'Bienvenido';
        this.tipoMensaje = 'exito';
      },
      complete: () => {
        console.log('Inicio de sesión completado'); // Debug
        this.router.navigate(['profile']); // Redirigir a la página de inicio después de iniciar sesión
        this.loginForm.reset(); // Limpiar el formulario después de iniciar sesión
      },
      error: (err) => {
        this.mensajeGlobal = err.error?.error || 'Error al iniciar sesión';
        this.tipoMensaje = 'error';
        this.loginForm.reset(); // Limpiar el formulario en caso de error
      },

    });
  }
  

}
