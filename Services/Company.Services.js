const companyModel = require('../Models/Company.Model');
const axios = require('axios');

const companyServices = {
  recreateTable: async () => {
    await companyModel.recreateTable();
  },
  getAll: async () => {
    const companies = await companyModel.getAll();
    // console.log(companies);
    return companies;
  },

  insertCompanies: async () => {
    const apiDB = await axios.get('https://data.directory.openbankingbrasil.org.br/participants');
    const companiesDB = apiDB.data;
    const filteredCompanies= [];
    companiesDB.map((company) => {
      const newCompany = {
        OrganisationName: company.OrganisationName,
        CustomerFriendlyLogoUri: company.AuthorisationServers[0].CustomerFriendlyLogoUri,
        AuthorisationServerId: company.AuthorisationServers[0].AuthorisationServerId,
      }
      filteredCompanies.push(newCompany);
    });
    console.log(filteredCompanies);
    await companyModel.insertCompanies(filteredCompanies);
  }
};

module.exports = companyServices;