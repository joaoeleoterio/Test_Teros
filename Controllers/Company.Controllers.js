const companyServices = require('../Services/Company.Services');

const companyControllers = {
  recreateTable: async (req, res) => {
    await companyServices.recreateTable();
    res.status(200).send('Table recreated');
  },

  getAll: async (req, res) => {
    const companies = await companyServices.getAll();
    res.status(200).json(companies);
  },

  insertCompanies: async (req, res) => {
    await companyServices.insertCompanies();
    res.status(200).send('Companies inserted');
  }
};

module.exports = companyControllers;