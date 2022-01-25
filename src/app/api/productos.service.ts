import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../../app/models/producto.interface'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url:string = 'https://localhost:8000/api/productos'

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<Producto[]>(this.url);
  }


}
