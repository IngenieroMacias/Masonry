import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {cargaProductos} from '../interfaces/data-producto.interface';
import { reject } from 'q';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  dataProducto:cargaProductos[]=[];
  productosfiltrados:cargaProductos[]=[];
  cargarProducto=true;
  constructor(private http:HttpClient) {
    
    console.log("Funciona productos servicios");
    this.cargarProductos();
   }

   cargarProductos(){
     return new  Promise((resolve,reject)=>{
      this.http.get('https://angular-html-80c18.firebaseio.com/productos_idx.json')
      .subscribe((resproductos: cargaProductos[])=>{
          this.dataProducto=resproductos;
          setTimeout(() => {
           this.cargarProducto=false;
          }, 2000);
         resolve();
      })
     });  
   }

  getProductos(id:string){
   return this.http.get(`https://angular-html-80c18.firebaseio.com/productos/${id}.json`);
  }

  buscarProductos(termino:string){
    if(this.dataProducto.length===0){
      this. cargarProductos().then(()=>{
      this.filtrarProductos(termino);
      });
    }else{
      this.filtrarProductos(termino);
    }
  
  }
  private filtrarProductos(termino:string){
    console.log(this.dataProducto);
   this.dataProducto.forEach(prod=>{
     if(prod.categoria.indexOf (termino)>=0){
      this.productosfiltrados.push(prod);
     }else{

     }
     });
    }
  } 

