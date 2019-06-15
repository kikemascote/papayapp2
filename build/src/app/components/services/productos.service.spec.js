"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const productos_service_1 = require("./productos.service");
describe('ProductosService', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = testing_1.TestBed.get(productos_service_1.ProductosService);
        expect(service).toBeTruthy();
    });
});
