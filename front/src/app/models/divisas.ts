export class Divisas {
    _id!: string;
    monedaOrigen: string
    cantidadOrigen: number
    monedaDestino:string
    cantidadDestino:number
    emailCliente:string
    tasaConversion:number
    constructor() {
        this.monedaOrigen="";
        this.cantidadDestino=0;
        this.monedaDestino="";
        this.cantidadOrigen=0;
        this.emailCliente="";
        this.tasaConversion=0;
    }
    
}
