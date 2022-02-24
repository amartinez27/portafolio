import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoProductos } from '../interfaces/info-productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  productos:infoProductos={};
  cargando = true;

  constructor(private http:HttpClient) {
    this.cargarProductos();
   }

  //metodo cargar productos
  private cargarProductos(){
    //obtener json
    this.http.get('https://angular-html-3fc44-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((resp: infoProductos) =>{
      console.log(resp);
      this.productos = resp;
      setTimeout(()=>{this.cargando = false;},2000);
      
    })
  }
}
