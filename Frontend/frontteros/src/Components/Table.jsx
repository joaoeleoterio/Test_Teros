import React from "react";
const axios = require('axios');

const Table = () => {
  const [openBankings, setOpenBankings] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:3001/companies")
      .then((response) => {
        setOpenBankings(response.data);
      });
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
          {openBankings.map((openBanking) => (
            <tr key={openBanking.OrganisationName}>
              <td className="logo"><img src={openBanking.CustomerFriendlyLogoUri} alt={openBanking.OrganisationName}></img></td>
              <td>{openBanking.OrganisationName}</td>
              <td>{openBanking.OpenIDDiscoveryDocument}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;