import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../models/endereco';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  
  constructor(private http : HttpClient) { }
  
  
  buscaCep(cep:String): Observable<Endereco>{
    return this.http.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`);
  }

}
