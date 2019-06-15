"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let ProductosService = class ProductosService {
    constructor(http) {
        this.http = http;
        this.cargando = true;
        this.productos = [];
        this.productosFiltrado = [];
        this.cargarProductos();
    }
    cargarProductos() {
        return new Promise((resolve, reject) => {
            this.http.get('https://papaya-db.firebaseio.com/productos_idx.json')
                .subscribe((resp) => {
                // console.log(resp);
                this.productos = resp;
                this.cargando = false;
                resolve();
                // setTimeout
            });
        });
    }
    getProducto(id) {
        return this.http.get(`https://papaya-db.firebaseio.com/productos/${id}.json`);
    }
    buscarProducto(termino) {
        if (this.productos.length === 0) {
            // cargar productos
            this.cargarProductos().then(() => {
                // callback ejecutar despues de tener los productos
                // aplicar filtro
                this.filtrarProductos(termino);
            });
        }
        else {
            // aplicar filtro
            this.filtrarProductos(termino);
        }
        // console.log( this.productosFiltrado );
    }
    filtrarProductos(termino) {
        // console.log( this.productos );
        this.productosFiltrado = [];
        termino = termino.toLowerCase();
        this.productos.forEach(prod => {
            const tituloLower = prod.titulo.toLowerCase();
            if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
                this.productosFiltrado.push(prod);
            }
        });
    }
};
ProductosService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], ProductosService);
exports.ProductosService = ProductosService;
