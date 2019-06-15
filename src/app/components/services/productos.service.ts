import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../../interfaces/producto.interface';
import { resolve, reject } from 'bluebird';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor( private http: HttpClient) {

    this.cargarProductos();
   }
   private cargarProductos() {

    return new Promise( ( resolve, reject ) => {

      this.http.get('https://papaya-db.firebaseio.com/productos_idx.json')
          .subscribe( (resp: Producto[]) => {
            // console.log(resp);
            this.productos = resp;
            this.cargando = false;
            resolve();
            // setTimeout
          });
    });
  }

  getProducto(id: string) {

    return this.http.get(`https://papaya-db.firebaseio.com/productos/${ id }.json`);

  }

  buscarProducto( termino: string){

    if ( this.productos.length === 0 ){
      // cargar productos
    } else {
      // aplicar filtro
    }

    this.productosFiltrado = this.productos.filter( producto => {
      return true;
    } );

    console.log( this.productosFiltrado );

  }
}
