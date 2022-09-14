const express = require('express');

const companyControllers = require('../Controllers/Company.Controllers');

const companyRouter = express.Router();

companyRouter.get('/', companyControllers.getAll);
companyRouter.post('/recreatetable', companyControllers.recreateTable);
companyRouter.post('/insertcompanies', companyControllers.insertCompanies);

module.exports = companyRouter;