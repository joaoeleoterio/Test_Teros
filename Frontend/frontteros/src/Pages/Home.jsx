import React from "react";
import Table from "../Components/Table";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <h1 id="titulo">Listagem de OpenBankings</h1>
        <Table />
      </div>
    </div>
  );
}

export default Home;