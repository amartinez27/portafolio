import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoEquipo } from '../interfaces/info-equipo.interface';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  //definir interfaz
  info:infoPagina={};
  equipo:infoEquipo={};
  cargada= false;
  constructor(private http:HttpClient) { 
    //console.log('servicio de infopagina cargado');
    this.cargarInfo();
    this.cargarEquipo();
    
  }

  private cargarInfo(){
    //leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp:infoPagina) =>{

      //cambiar variables
      this.cargada = true;
      this.info = resp;
      console.log(this.info);
    });
  } 

  private cargarEquipo(){
    //leer el archivo JSON
    this.http.get('https://angular-html-3fc44-default-rtdb.firebaseio.com/equipo.json')
    .subscribe((resp:infoEquipo) =>{

      //almacenar datos
      this.cargada = true;
      this.equipo = resp;
      console.log(resp);
    });
  }
}
