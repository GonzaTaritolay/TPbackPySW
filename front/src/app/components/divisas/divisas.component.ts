import { Component } from '@angular/core';
import { Divisas } from '../../models/divisas';
import { DivisasService } from '../../services/divisas.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DosDecimalesPipe } from '../../pipes/dos-decimales.pipe';

@Component({
  selector: 'app-divisas',
  standalone: true,
  imports: [CommonModule,FormsModule,DosDecimalesPipe],
  templateUrl: './divisas.component.html',
  styleUrl: './divisas.component.css'
})
export class DivisasComponent {


  constructor(private divisasService: DivisasService){
    this.GetMonedas();
  }
  divisaCorreo:Array<Divisas>=[]
  divisas:Array<Divisas>=[]
  Postdivisas:Divisas= new Divisas()
  destino!: number;
  TipoMonedas:any[]=[];

  filtro:boolean = false
  moneda:boolean =  false
  correo:boolean =  false
  GetMonedas(){
    this.divisasService.getMonedas().subscribe(
      data=>{
        this.TipoMonedas=Object.keys(data.rates);
        
        console.log(this.TipoMonedas);
      },
      error=>{
        console.log(error);
      }
    )
  }
  PostMonedas(from:string, to:string, amount:number){
    this.divisasService.postMonedas(from,to,amount).subscribe(
      data=>{
        this.Postdivisas.tasaConversion=data.info.rate
        this.Postdivisas.cantidadDestino=data.result
        console.log(this.Postdivisas.tasaConversion);
      },
      error=>{
        console.log(error);
      })

  }
  ObtenerDivisas(){
    this.divisasService.getDivisas().subscribe(
      data=>{
        this.divisas=data;
        //console.log(this.divisas);
      },
      error=>{
        console.log(error);
      }
    )
  }
/*
  calcularTasa(origen:number, tasa:number){
    this.destino= origen * tasa
    //console.log(this.destino)
    this.Postdivisas.cantidadDestino=this.destino
  }
  */
  Convertir(){
    this.divisasService.postDivisas(this.Postdivisas).subscribe(
      data=>{
        console.log(data);
        //this.ObtenerDivisas();
      },
      error=>{
        console.log(error);
      }
    )
    this.Postdivisas= new Divisas()
    this.destino=0;
    
  }

  RecuperarFiltro(){
    this.filtro=true
  }
  FiltroCorreoForm(){
    this.correo=true
  }
  FiltroMonedaForm(){
    this.moneda=true
  }

  BuscarCorreo(){
    this.divisasService.getDivisasEmail(this.Postdivisas.emailCliente).subscribe(
      data=>{
        this.divisaCorreo=data;
        //console.log(this.divisaCorreo);
      },
      error=>{
        console.log(error);
      }
    )
  }

  BuscarMoneda(){
    this.divisasService.getDivisasTipo(this.Postdivisas.monedaOrigen, this.Postdivisas.monedaDestino).subscribe(
      data=>{
        this.divisaCorreo=data;
        //console.log(this.divisaCorreo);
      },
      error=>{
        console.log(error);
      }
    )
  }

  

}
