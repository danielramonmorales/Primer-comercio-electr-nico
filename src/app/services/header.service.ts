import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private token = '';
  public headers: HttpHeaders = new HttpHeaders();

  constructor(private sessionStorage: SessionStorageService) {
    this.loadToken();
  }

  // Método para cargar el token desde sessionStorage
  private loadToken(): void {
    const storedToken = this.sessionStorage.getItem('token');
    if (storedToken && storedToken.token) {
      this.token = storedToken.token;
      this.headers = new HttpHeaders({
        'Authorization': `Bearer ${this.token}` // Asegúrate de usar "Bearer" seguido del token
      });
    }
  }
}
