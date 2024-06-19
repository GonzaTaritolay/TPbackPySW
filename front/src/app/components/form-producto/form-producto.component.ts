import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../models/producto';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-producto',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form-producto.component.html',
  styleUrl: './form-producto.component.css'
})
export class FormProductoComponent {
  producto: Producto= new Producto();
  //productosDestacados: Array<Producto>=[];
  constructor(private productosService:ProductosService, private router: Router){

  }

  AgregarProducto(){
    this.productosService.postProductos(this.producto).subscribe(
      (data) => {
        if (data.status == 1){
          alert("Producto Agregado!");
          this.router.navigate(['/api/producto/destacado']);
        }
          
        },
      (error:any)=>{
          console.log(error);
      } 
      );
    this.producto = new Producto();
  }


}
