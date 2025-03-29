import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getProduto(id: string): Observable<any> {
    return this.http.get<any>(`${environment.api}produto/obter-por-id?id=${id}`);
  }



getProdutos(): Observable<any> {
  return this.http.get<any>(`${environment.api}produto/obter-todos`);
}

}
