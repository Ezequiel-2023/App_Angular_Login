import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-layouts',
  imports: [RouterModule],
  templateUrl: './admin-layouts.component.html',
  styleUrl: './admin-layouts.component.css'
})
export class AdminLayoutsComponent {
  constructor(private router : Router) { }
  cambiarVista(event: Event) {
    const ruta = (event.target as HTMLSelectElement).value;
    this.router.navigate([ruta]);
  }
}
