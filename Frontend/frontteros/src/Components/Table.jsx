import React from "react";
const axios = require('axios');

const Table = () => {
  const [openBankings, setOpenBankings] = React.useState([]);

  const getOpenBankings = async () => {
    const response = await axios.get('http://localhost:3001/companies');
    setOpenBankings(response.data);
  };

  const updateOpenBankings = async () => {
    axios.post('http://localhost:3001/companies/recreateDB');
    axios.post('http://localhost:3001/companies/insertcompanies')
    window.location.reload();
  };

  const timeRefreshMinutes = (minutes) => (minutes * 60 * 1000);

  React.useEffect(() => {
    getOpenBankings();
    setInterval(updateOpenBankings, timeRefreshMinutes(1));
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