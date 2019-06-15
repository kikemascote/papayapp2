import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../../interfaces/producto.interface';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  producto: ProductoDescripcion;
  pid: string;

  constructor( private route: ActivatedRoute, public productoService: ProductosService) { }

  ngOnInit() {

    this.route.params
        .subscribe( parametros => {
           // console.log(parametros['id']);
          this.productoService.getProducto(parametros['id'])
              .subscribe( (producto: ProductoDescripcion) => {
                this.pid = parametros['id'];
                // console.log(producto);
                this.producto = producto;
              });
        });
  }

}
