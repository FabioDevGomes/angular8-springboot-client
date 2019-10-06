import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private baseUrl = 'http://localhost:8080/api/v1/pessoa';
  private baseUrlList = 'http://localhost:8080/api/v1/pessoas';

  constructor(private http: HttpClient) { }

  getPessoa(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPessoa(pessoa: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, pessoa);
  }

  deletePessoa(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPessoasList(): Observable<any> {
    return this.http.get(`${this.baseUrlList}`);
  }

  updatePessoa(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
