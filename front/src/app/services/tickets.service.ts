import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Espectador } from '../models/espectador';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  urlEspectador: string = 'http://localhost:3000/api/espectador'
  urlTicket: string = 'http://localhost:3000/api/ticket'
  constructor(private http:HttpClient) { 
}

/******************ESPECTADOR*****************************/

  public getEspectador(): Observable<any>{
    const httpOptions ={
      headers: new HttpHeaders({
        
      })
    }
    return this.http.get(this.urlEspectador,httpOptions);
  }

  public getEspectadorDni(dni:string): Observable<any>{
    const httpOptions ={
          headers: new HttpHeaders({
            
          })
        }
        return this.http.get(this.urlEspectador+'/by?Dni='+dni,httpOptions);
  }

  public postEspectador(espectador:Espectador):Observable<any>{
    //console.log("entre a post")
    let httpOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    let body= JSON.stringify(espectador)
    return this.http.post(this.urlEspectador,body,httpOptions);
  }

/***********************TICKET**********************************/

  public getTicket():Observable<any>{
    const httpOptions={

    }
    return this.http.get(this.urlTicket,httpOptions);
  }
 
  public postTicket(ticket: Ticket):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    let body= JSON.stringify(ticket)
    return this.http.post(this.urlTicket,body,httpOptions);
  }

 public byTicket (id:string):Observable<any>{
  const httpOptions={
    headers: new HttpHeaders({
    })
  }
  return this.http.get(this.urlTicket+'/'+id,httpOptions);
 }

 public putTicket(ticket: Ticket):Observable<any>{
  const httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  let body= JSON.stringify(ticket)
  return this.http.put(this.urlTicket+'/'+ticket._id,body,httpOptions);
}

 public getTipoTicket(tipo:string):Observable<any>{
  const httpOptions={
  }
  return this.http.get(this.urlTicket+'/tipo?tipo='+tipo,httpOptions);
 }

 public deleteTicket(id:string):Observable<any>{
  const httpOptions={
  }
  return this.http.delete(this.urlTicket+'/'+id,httpOptions);
 }

}
