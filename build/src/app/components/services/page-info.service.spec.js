"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const page_info_service_1 = require("./page-info.service");
describe('PageInfoService', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = testing_1.TestBed.get(page_info_service_1.PageInfoService);
        expect(service).toBeTruthy();
    });
});
