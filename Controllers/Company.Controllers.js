const companyServices = require('../Services/Company.Services');

const companyControllers = {
  recreateTable: async (req, res) => {
    await companyServices.recreateTable();
    res.status(200).send('Tables recreated');
  },

  getAll: async (req, res) => {
    const companies = await companyServices.getAll();
    res.status(200).json(companies);
  },

  insertCompanies: async (req, res) => {
    await companyServices.insertCompanies();
    res.status(200).send('Companies inserted');
  },

  updateCompanies: async (req, res) => {
    const message = await companyServices.updateCompanies();
    res.status(200).send(message);
  }
};

module.exports = companyControllers;