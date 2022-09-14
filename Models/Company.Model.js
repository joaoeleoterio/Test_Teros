const connection = require('../connection');

const companyModel = {
  createTable: async () => {
    const sql = `
      CREATE TABLE teros.companies (
        id INT NOT NULL AUTO_INCREMENT,
        OrganisationName VARCHAR(255) NOT NULL,
        CustomerFriendlyLogoUri VARCHAR(255) NOT NULL,
        OpenIDDiscoveryDocument VARCHAR(255) NOT NULL,
        PRIMARY KEY (id));
    `;
    await connection.query(sql);
  },

  recreateTable: async () => {
    await connection.query('DROP TABLE IF EXISTS teros.companies');
    await companyModel.createTable();
  },

  getAll: async () => {
    const query = 'SELECT * FROM teros.companies';
    const [rows] = await connection.query(query);
    return rows;
  },

  insertCompanies: (companies) => {
    companies.forEach((company) => {
      const query = `
      INSERT INTO teros.companies (OrganisationName, CustomerFriendlyLogoUri, OpenIDDiscoveryDocument)
      VALUES (?, ?, ?);
    `;
      connection.query(query, [company.OrganisationName, company.CustomerFriendlyLogoUri, company.OpenIDDiscoveryDocument]);
    }
    );
  }
};

module.exports = companyModel;
