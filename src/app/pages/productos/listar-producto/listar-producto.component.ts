import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/api/productos.service';


@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  productos=new Array();

  constructor(private api:ProductosService) { }

  ngOnInit(): void {
    /*this.api.getProducts().subscribe(data =>{
      console.log(data)
    })*/
  }


}
