import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }
  public getProductos(): Observable<any>{
    const httpOptions ={
      headers: new HttpHeaders({
        
      })
    }
    return this.http.get('http://localhost:3000/api/producto',httpOptions);
  }

  public getProductosDest(): Observable<any>{
    const httpOptions ={
      headers: new HttpHeaders({
        
      })
    }
    return this.http.get('http://localhost:3000/api/producto/destacado',httpOptions);
  }

  public postProductos(producto:Producto):Observable<any>{
    console.log("entre a post")
    let httpOptions ={
      headers: new HttpHeaders({
        'Content-Type':  'application/json' //ES NECESARIO CUANDO ES POST Y PUT
      })
    }
    let body : any = JSON.stringify(producto);
    console.log(body)
    return this.http.post('http://localhost:3000/api/producto/a',body,httpOptions);
  }
    








}
