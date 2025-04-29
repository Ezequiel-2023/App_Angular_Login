import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
// funtion extraer los datos del ususario de la base de datos y mostrarlos en el html
user = {
  handle : '',
  description : ''
}

getUserData() {
  this.user.handle = 'usuario123';
  this.user.description = 'Este es un ejemplo de descripción del usuario.';
  
 }
}
