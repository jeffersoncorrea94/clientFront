import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:8090'; // Reemplaza por la URL real del servicio

  constructor(private http: HttpClient) { }

  getClienteInfo(tipoDocumento: string, numeroDocumento: string): Observable<any> {
    // Realiza la solicitud HTTP al servicio
    return this.http.get(`${this.apiUrl}/cliente?tipoDocumento=${tipoDocumento}&numeroDocumento=${numeroDocumento}`);
  }
}
