import { Pool } from "mysql2/promise";

export default class CompaniesModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  // cria tabela com os dados da api JSON
  public async createCompaniesTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS companies (
        id INT NOT NULL AUTO_INCREMENT,
        OrganisationName VARCHAR(255) NOT NULL,
        CustomerFriendlyLogoUri VARCHAR(255) NOT NULL,
        AuthorisationServerId VARCHAR(255) NOT NULL,
      );
    `;
    const [rows] = await this.connection.execute(query);
    return rows;
  }

  // insere dados na tabela
  public async insertCompanies(companies: any) {
    const query = `
      INSERT INTO companies (OrganisationName, CustomerFriendlyLogoUri, ApiDiscoveryId, ApiEndpoint)
      VALUES (?, ?, ?, ?);
    `;
    const [rows] = await this.connection.execute(query, [companies]);
    return rows;
  }

  public async resetCompanies() {
    const query = `DROP TABLE IF EXISTS companies;`;
    const [rows] = await this.connection.query(query);
    return rows;
  }

  public async getCompanies(): Promise<any> {
    const query = "SELECT * FROM companies";
    const [rows] = await this.connection.execute(query);
    return rows;
  }
}