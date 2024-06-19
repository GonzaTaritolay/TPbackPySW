import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Ticket } from '../../models/ticket';
import { TicketsService } from '../../services/tickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  ticket: Array<Ticket>=[]
  postTicket: Ticket= new Ticket()
  tipo:string="";
  mostrar:boolean = false;

  constructor( private ticketService: TicketsService, private router: Router){
    this.MostrarTicket();
  }

  MostrarTicket(){
    this.ticketService.getTicket().subscribe(
      data => {
        this.ticket = data;
        console.log(this.ticket);
      },
      error => {
        console.log(error);
      }
    );
  }
  MostrarForm(){
    this.mostrar=true;
  }
  TipoTicket(){
    this.ticketService.getTipoTicket(this.tipo).subscribe(
      (data) => {
        this.ticket = data;
        console.log(this.ticket);
      },
      error => {
        console.log(error);
      }
    );
  }
  agregarTicket(){
    this.router.navigate(['ticket/',0])
  }
  Modificar(id:string){
    this.router.navigate(['ticket/',id])
  }

  Eliminar(id:string){
    this.ticketService.deleteTicket(id).subscribe(
    (data) =>{
      alert("Ticket Eliminado")
      this.MostrarTicket();
    },
    error =>{
      console.log(error)
    }
    )

  }

}
