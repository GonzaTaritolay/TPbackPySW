import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';
import { TipoService } from '../../services/tipo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from '../../models/ticket';
import { Espectador } from '../../models/espectador';
import { Tipo } from '../../models/tipo';


@Component({
  selector: 'app-form-ticket',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-ticket.component.html',
  styleUrls: ['./form-ticket.component.css']
})
export class FormTicketComponent implements OnInit {
  accion!: string;
  //ticket: Ticket = new Ticket();
  ticket!: Ticket;
  espectador!: Array<Espectador>;
  tipo!: Array<Tipo>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private ticketsService: TicketsService,
    private tipoService: TipoService,
    private router: Router 
  ) { 
    this.mostrarEspectador(),
    this.mostrarTipo(),
    this.iniciarVariable()

  }

  
  iniciarVariable(){
    this.ticket= new Ticket();
    this.espectador= new Array<Espectador> ();
    this.tipo= new Array<Tipo> ();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0") {
        this.accion = "new";
        this.cargarForm();
       // console.log(this.ticket._id)
      } else {
        this.accion = "update";
        this.cargarByForm(params['id']);
       
      }
    });
    
  }

  cargarByForm(id: string): void {
    this.ticketsService.byTicket(id).subscribe(
      data => {
        Object.assign(this.ticket, data);
        
      },
      error => {
        console.log(error);
      }
    );
  }

  cargarForm(): void {
    this.ticket= new Ticket()
    console.log(this.ticket);
    // Inicializar el formulario con valores vacíos o por defecto
  }

  mostrarEspectador(){
    this.ticketsService.getEspectador().subscribe(
      data => {
        let e: Espectador= new Espectador();
        data.forEach((element:any) => {
          Object.assign(e, element);
          this.espectador.push(e);
          e= new Espectador();
        });
      },
      error => {
        console.log(error);
      }
    )

  }
  mostrarTipo(){
    this.tipoService.getTipo().subscribe(
      data => {
        let e: Tipo= new Tipo();
        data.forEach((element:any) => {
          Object.assign(e, element);
          this.tipo.push(e);
          e= new Tipo();
        });
      },
      error => {
        console.log(error);
      }
    )

  }
  actualizar(){
    if(this.ticket._id!=undefined){
      this.ticketsService.putTicket(this.ticket).subscribe(
        data => {
          alert("TICKET ACTUALIZADO")
          this.router.navigate(['/ticket']);
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    }
    else{
      this.ticketsService.postTicket(this.ticket).subscribe(
        data => {
          alert("TICKET AGREGADO")
          this.router.navigate(['/ticket']);
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
    }
    
  }

}
