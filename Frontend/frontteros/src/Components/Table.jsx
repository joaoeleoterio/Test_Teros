import React from "react";
const axios = require('axios');

const Table = () => {
  const [openBankings, setOpenBankings] = React.useState([]);

  const getOpenBankings = async () => {
    const response = await axios.get('http://localhost:3001/companies');
    console.log(response.data);
    setOpenBankings(response.data);
  };

  const refreshPage = (seconds) => {
    setTimeout(() => {
      window.location.reload(false);
      axios.post('http://localhost:3001/companies/recreateDB');
      axios.post('http://localhost:3001/companies/insertcompanies')
      console.log('recreateDB and insertcompanies');
    }, seconds * 1000);
  };

  React.useEffect(() => {
    getOpenBankings();
    refreshPage(15);
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Logo</th>
            <th>Nome</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          { !openBankings ? (<h1>"Loading..."</h1>) : (openBankings.map((openBanking) => (
            <tr key={openBanking.OrganisationName}>
              <td className="logo"><img src={openBanking.CustomerFriendlyLogoUri} alt={openBanking.OrganisationName}></img></td>
              <td>{openBanking.OrganisationName}</td>
              <td>{openBanking.OpenIDDiscoveryDocument}</td>
            </tr>
          )))}
        </tbody>
      </table>
    </>
  );
}

export default Table;