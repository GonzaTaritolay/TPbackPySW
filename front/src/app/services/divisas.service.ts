import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Divisas } from '../models/divisas';
@Injectable({
  providedIn: 'root'
})
export class DivisasService {
  UrlBase= "http://localhost:3000/api/agente"
  constructor(private http:HttpClient) { }
  
  public getMonedas(): Observable<any>{
    const httpOptions ={
          headers: new HttpHeaders({
            'x-rapidapi-key': '485a94b0efmsh5e569bed2b827f6p1fad95jsnf0e5c7762783',
		        'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com' 
          })
        }
        return this.http.get('https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest',httpOptions);
  }

  public postMonedas(from:string, to:string, amount:number): Observable<any>{
    const httpOptions ={
          headers: new HttpHeaders({
            'x-rapidapi-key': '485a94b0efmsh5e569bed2b827f6p1fad95jsnf0e5c7762783',
		        'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com' 
          })
        }
        return this.http.get('https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from='+from+'&to='+to+'&amount='+amount,httpOptions);
  }
  public getDivisas(): Observable<any>{
    const httpOptions ={
          headers: new HttpHeaders({
            
          })
        }
        return this.http.get(this.UrlBase,httpOptions);
  }

  public postDivisas(divisa:Divisas):Observable<any>{
    console.log("entre a post")
    let httpOptions ={
      headers: new HttpHeaders({
        'Content-Type':  'application/json' //ES NECESARIO CUANDO ES POST Y PUT
      })
    }
    let body = JSON.stringify(divisa)
    return this.http.post(this.UrlBase,body,httpOptions);
  }

  public getDivisasEmail(email:string): Observable<any>{
    const httpOptions ={
          headers: new HttpHeaders({
            
          })
        }
        return this.http.get(this.UrlBase+'/transacciones?email='+email,httpOptions);
  }
 
  public getDivisasTipo(origen:string, destino:string): Observable<any>{
    const httpOptions ={
          headers: new HttpHeaders({
            
          })
        }
        return this.http.get(this.UrlBase+'/divisas?origen='+origen+'&destino='+destino,httpOptions);
  }
}
