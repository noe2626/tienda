import { RouterModule, Routes } from '@angular/router';
import { ListarProductoComponent } from './productos/listar-producto/listar-producto.component';
import { NuevoProductoComponent } from './productos/nuevo-producto/nuevo-producto.component';

export const routes: Routes = [
    { path: 'productos', component: ListarProductoComponent},
    { path: 'productos/nuevo', component: NuevoProductoComponent}
];