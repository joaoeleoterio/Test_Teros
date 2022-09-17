const companyModel = require('../Models/Company.Model');
const axios = require('axios');

const companyServices = {
  recreateTable: async () => {
    await companyModel.recreateTable();
  },
  
  getAll: async () => {
    const companies = await companyModel.getAll();
    return companies;
  },

  insertCompanies: async () => {
    const apiDB = await axios.get('https://data.directory.openbankingbrasil.org.br/participants');
    const companiesDB = apiDB.data;
    const filteredCompanies = [];
    companiesDB.map((company) => {
      const newCompany = {
        OrganisationName: company.OrganisationName,
        CustomerFriendlyLogoUri: company.AuthorisationServers[0].CustomerFriendlyLogoUri,
        OpenIDDiscoveryDocument: company.AuthorisationServers[0].OpenIDDiscoveryDocument,
      }
      filteredCompanies.push(newCompany);
    });
    await companyModel.insertCompanies(filteredCompanies);
  },

};

module.exports = companyServices;