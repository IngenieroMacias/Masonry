import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { productosDescripcion } from 'src/app/interfaces/productos-pagina.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
 producto:productosDescripcion;
 id:string;
  constructor(private route : ActivatedRoute,public productoservice:ProductosService) { }

  ngOnInit() {
    this.route.params
    .subscribe(parametros =>{
      this.productoservice.getProductos(parametros['id'])
      .subscribe((prod:productosDescripcion) =>{
       this.id=parametros['id'];
       this.producto=prod;
       console.log(this.producto);
      });
    });
  }

}
