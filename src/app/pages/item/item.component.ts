import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { infoProducto } from 'src/app/interfaces/info-producto.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto:infoProducto={};
  id:string='';
  constructor(private route:ActivatedRoute, public productosService:ProductosService) { }

  ngOnInit(): void {

    //llamar route
    this.route.params
      .subscribe(paramentros=>{
        //console.log(paramentros['id']);
        
        //obtener informacion producto
        this.productosService.getProducto(paramentros['id'])
        .subscribe((producto:infoProducto)=>{
         // console.log(producto);
          this.id = paramentros['id'];
          this.producto = producto;
        })
      })
  }

}
