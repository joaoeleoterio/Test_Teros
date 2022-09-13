const axios = require('axios');

// função para salvar dados da API
async function saveData() {
  const apiDB = await axios.get('https://data.directory.openbankingbrasil.org.br/participants');
    const companiesDB = apiDB.data;
    const filteredCompanies = [];
    // cria um novo array com os dados que serão inseridos na tabela
    companiesDB.map((company) => {
      const newCompany = {
        OrganisationName: company.OrganisationName,
        CustomerFriendlyLogoUri: company.AuthorisationServers[0].CustomerFriendlyLogoUri,
        AuthorisationServerId: company.AuthorisationServers[0].AuthorisationServerId,
      }
      filteredCompanies.push(newCompany);
    });
    console.log(filteredCompanies);
}

saveData();