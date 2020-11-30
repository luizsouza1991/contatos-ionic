import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  constructor(private http: HttpClient) { }

  getContatos():Observable<any> {
    return this.http.get('http://localhost:3000/api/contatos');
  }
}
