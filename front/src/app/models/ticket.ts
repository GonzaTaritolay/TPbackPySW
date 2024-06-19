import { Espectador } from "./espectador"
import  { Tipo } from "./tipo"

export class Ticket {
  _id!: string;
  precioTicket: number
  categoriaEspectador: string
  fechaCompra: string
  espectador: Espectador
  tipo:Tipo
  constructor(){
    this.precioTicket = 0
    this.categoriaEspectador = ""
    this.fechaCompra = ""
    this.espectador = new Espectador()
    this.tipo = new Tipo()
  }
}
