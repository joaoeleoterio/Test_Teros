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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const axios_1 = __importDefault(require("axios"));
class CompaniesController {
    constructor(companiesServices) {
        this.companiesServices = companiesServices;
    }
    static insertCompanies(arg0, insertCompanies) {
        throw new Error('Method not implemented.');
    }
    insertCompanies(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const companies = yield axios_1.default.get('https://data.directory.openbankingbrasil.org.br/participants');
            console.log(companies);
            // const companiesInserted = await this.companiesServices.insertCompanies(companies);
            res.status(http_status_codes_1.StatusCodes.CREATED);
        });
    }
}
exports.default = CompaniesController;
