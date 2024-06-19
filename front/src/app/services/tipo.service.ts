import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tipo } from '../models/tipo';

@Injectable({
  providedIn: 'root'
})
export class TipoService {
  constructor(private http:HttpClient) { 
}

/******************TIPO*****************************/

  public getTipo(): Observable<any>{
    const httpOptions ={
      headers: new HttpHeaders({
        
      })
    }
    return this.http.get('http://localhost:3000/api/tipo',httpOptions);
  }

  public postTipo(tipo:Tipo): Observable<any>{
    let httpOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    let body= JSON.stringify(tipo)
    return this.http.post('http://localhost:3000/api/tipo',body,httpOptions);
  }
}