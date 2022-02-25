import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoProductos } from '../interfaces/info-productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  productos:InfoProductos[]=[];
  productosFiltrad:InfoProductos[]=[];
  cargando = true;

  constructor(private http:HttpClient) {
    this.cargarProductos();
   }

  //metodo cargar productos
  private cargarProductos(){
    return new Promise((resolve,reject)=>{
      this.http.get<InfoProductos[]>('https://angular-html-3fc44-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((resp:InfoProductos[]) =>{
     
      this.productos = resp;
      //console.log(this.productos);
      setTimeout(()=>{this.cargando = false;},2000);
      resolve();
      
    })
    })
    //obtener json
    
  }
 //obtener producto
  getProducto(id:string){
    return this.http.get(`https://angular-html-3fc44-default-rtdb.firebaseio.com/productos/${id}.json`)
  }

  buscarProducto(termino:string){
    if(this.productos.length === 0){
      //cargar productos
      this.cargarProductos().then(()=>{
        //despues de tener productos
        this.filtarProductos(termino);
      });
    }else{
      this.filtarProductos(termino);
    }
    
  }
  private filtarProductos(termino:string){

    this.productosFiltrad=[];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach(prod=>{
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if(prod.categoria.indexOf(termino)>=0 || tituloLower.indexOf(termino)>=0){
        this.productosFiltrad.push(prod);
      }
    })
  }
}
