import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  obterprodutorId(id:number): Observable<any>{
    return this.http.get<any>(`${environment.api}${id}.json`);
  }
}
