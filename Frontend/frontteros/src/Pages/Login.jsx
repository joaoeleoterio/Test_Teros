import axios from "axios";
import React from "react";
import LoginPage from "../Components/LoginForm2";

const Login = () => {
  React.useEffect(() => {
    axios.post('http://localhost:3001/companies/recreateDB');
    axios.post('http://localhost:3001/companies/insertcompanies')
    console.log('recreateDB and insertcompanies');
  }, []);

  return (
    <div className="login">
      <div className="login__container">
        <LoginPage />
      </div>
    </div>
  );
}

export default Login;