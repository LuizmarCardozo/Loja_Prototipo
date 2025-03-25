import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseUrl = '/json/';

  constructor(private http: HttpClient) { }

  getProdutos(fileName: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${fileName}`);
  }
}

