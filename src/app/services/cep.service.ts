import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  private apiUrl = 'https://viacep.com.br/ws';
  private http: HttpClient;
  
  constructor(http: HttpClient) {
    this.http = http;
  }
  
  // recupera cep da api https://viacep.com.br/ws/${cep}/json
  recuperaCep(cep: string) {
    return this.http.get(`${this.apiUrl}/${cep}/json`);
  }
}
