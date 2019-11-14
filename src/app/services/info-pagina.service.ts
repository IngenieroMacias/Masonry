import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfPagInter } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  //Declaracion de Variables
  info:InfPagInter={};
  cargada=false;
  equipo:any[]=[];
  cargarEqu=false;

  //Se le inyecta el http y es tipo HttpClient
  constructor(private http: HttpClient) { 
   
    console.log('Cargando Consola del Servicio');

    this.cargarInfo();
    this.cargarEquipo();
  
  }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp:InfPagInter )=>{
      // Este llama el cargado cuando carga lo pone true
      this.cargada=true;
      //Este envia la respuesta en el arreglo Info
      this.info=resp;
      console.log(resp);
    }
    )
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-80c18.firebaseio.com/equipo.json')
    .subscribe((respuesta:any[])=>{
     this.cargarEqu=true;
     this.equipo=respuesta;
     console.log(respuesta);
    })
  }
}
