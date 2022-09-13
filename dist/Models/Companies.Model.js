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
class CompaniesModel {
    constructor(connection) {
        this.connection = connection;
    }
    // cria tabela com os dados da api JSON
    createCompaniesTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
      CREATE TABLE IF NOT EXISTS companies (
        id INT NOT NULL AUTO_INCREMENT,
        OrganisationName VARCHAR(255) NOT NULL,
        CustomerFriendlyLogoUri VARCHAR(255) NOT NULL,
        ApiDiscoveryId VARCHAR(255) NOT NULL,
        ApiEndpoint VARCHAR(255) NOT NULL
      );
    `;
            const [rows] = yield this.connection.execute(query);
            return rows;
        });
    }
    // insere dados na tabela
    insertCompanies(companies) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
      INSERT INTO companies (OrganisationName, CustomerFriendlyLogoUri, ApiDiscoveryId, ApiEndpoint)
      VALUES (?, ?, ?, ?);
    `;
            const [rows] = yield this.connection.execute(query, [companies]);
            return rows;
        });
    }
    resetCompanies() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `DROP TABLE IF EXISTS companies;`;
            const [rows] = yield this.connection.query(query);
            return rows;
        });
    }
    getCompanies() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM companies";
            const [rows] = yield this.connection.execute(query);
            return rows;
        });
    }
}
exports.default = CompaniesModel;
