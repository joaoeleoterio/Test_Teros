import { React } from "react";
import Table from "../Components/Table";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <p id="titulo">Listagem de OpenBankings</p>
        <Table />
      </div>
    </div>
  );
}

export default Home;