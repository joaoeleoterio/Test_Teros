"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class CompaniesServices {
    constructor(companiesModel) {
        this.companiesModel = companiesModel;
    }
    createCompaniesTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const companies = yield this.companiesModel.createCompaniesTable();
            return companies;
        });
    }
    insertCompanies(companies) {
        return __awaiter(this, void 0, void 0, function* () {
            const companiesInserted = yield this.companiesModel.insertCompanies(companies);
            return companiesInserted;
        });
    }
    resetCompanies() {
        return __awaiter(this, void 0, void 0, function* () {
            const companiesReset = yield this.companiesModel.resetCompanies();
            return companiesReset;
        });
    }
    getCompanies() {
        return __awaiter(this, void 0, void 0, function* () {
            const companies = yield this.companiesModel.getCompanies();
            return companies;
        });
    }
}
exports.default = CompaniesServices;
