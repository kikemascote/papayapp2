"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
// import { Producto } from '../../../interfaces/producto.interface';
let ItemDetailComponent = class ItemDetailComponent {
    constructor(route, productoService) {
        this.route = route;
        this.productoService = productoService;
    }
    ngOnInit() {
        this.route.params
            .subscribe(parametros => {
            // console.log(parametros['id']);
            this.productoService.getProducto(parametros['id'])
                .subscribe((producto) => {
                this.pid = parametros['id'];
                // console.log(producto);
                this.producto = producto;
            });
        });
    }
};
ItemDetailComponent = __decorate([
    core_1.Component({
        selector: 'app-item-detail',
        templateUrl: './item-detail.component.html',
        styleUrls: ['./item-detail.component.css']
    })
], ItemDetailComponent);
exports.ItemDetailComponent = ItemDetailComponent;
