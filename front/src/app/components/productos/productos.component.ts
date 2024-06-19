import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productosDestacados: Array<Producto>=[];
  TodosProductos: Array<Producto>=[];
  constructor(private productosService: ProductosService, private router: Router) {
    this.ObtenerProductosDest();
    this.ObtenerTodosProductos();
  }
  ObtenerProductosDest(){
    this.productosService.getProductosDest().subscribe(
      data => {
          let products: Producto= new Producto();
          data.forEach((element:any) => {
            Object.assign(products, element);
            this.productosDestacados.push(products);
            products= new Producto();
          });
        });
  }
  ObtenerTodosProductos(){
    this.productosService.getProductos().subscribe(
      data => {
          let products: Producto= new Producto();
          data.forEach((element:any) => {
            Object.assign(products, element);
            this.TodosProductos.push(products);
            products= new Producto();
          });
        });
  }
  AgregarProducto(){
    this.router.navigate(['/api/producto/a']);
  }



}
