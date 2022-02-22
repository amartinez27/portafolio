import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  //definir interfaz
  info:infoPagina={};
  cargada= false;
  constructor(private http:HttpClient) { 
    //console.log('servicio de infopagina cargado');

    //leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp:infoPagina) =>{

      //cambiar variables
      this.cargada = true;
      this.info = resp;
      console.log(this.info);
    });
  }
}
