import { Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { FormProductoComponent } from './components/form-producto/form-producto.component';
import { FormTicketComponent } from './components/form-ticket/form-ticket.component';

export const routes: Routes = [
    { path: 'api/producto/destacado', component: ProductosComponent },
    { path: 'api/producto/a', component: FormProductoComponent },
    { path: 'divisas', component: DivisasComponent },
    { path: 'ticket', component: TicketComponent },
    { path: 'ticket/:id', component: FormTicketComponent },
    { path: '**', redirectTo: 'productos', pathMatch: 'full' }
];
