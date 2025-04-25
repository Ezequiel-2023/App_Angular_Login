import { inject, Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private backendUrl = 'http://localhost:4000';
  private http = inject(HttpClient);

  register(data: any): Observable<any> {
    return this.http.post(`${this.backendUrl}/auth/register`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.backendUrl}/auth/login`, data);
  }

  getUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get(`${this.backendUrl}/user`, { headers });
  }
}

