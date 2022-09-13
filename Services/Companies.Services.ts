import CompaniesModel from "../Models/Companies.Model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import axios from "axios";

export default class CompaniesServices {
  private companiesModel: CompaniesModel;

  constructor(companiesModel: CompaniesModel) {
    this.companiesModel = companiesModel;
  }

  public async createCompaniesTable() {
    const companies = await this.companiesModel.createCompaniesTable();
    return companies;
  }

  public async insertCompanies(companies: any) {
    const apiDB = await axios.get('https://data.directory.openbankingbrasil.org.br/participants');
    const companiesDB = apiDB.data;
    const filteredCompanies: any = [];
    companiesDB.map((company: any) => {
      const newCompany = {
        OrganisationName: company.OrganisationName,
        CustomerFriendlyLogoUri: company.AuthorisationServers[0].CustomerFriendlyLogoUri,
        AuthorisationServerId: company.AuthorisationServers[0].AuthorisationServerId,
      }
      filteredCompanies.push(newCompany);
    });
    console.log(filteredCompanies);
    
  }

  public async resetCompanies() {
    const companiesReset = await this.companiesModel.resetCompanies();
    return companiesReset;
  }

  public async getCompanies() {
    const companies = await this.companiesModel.getCompanies();
    return companies;
  }
}