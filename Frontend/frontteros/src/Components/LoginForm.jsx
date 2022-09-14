import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <h1>Sign in</h1>
      <form>
        <h5>E-mail</h5>
        <input type="text" />
        <h5>Password</h5>
        <input type="password" />
        <Link to="/home">
          <button
            type="submit" className="login__signInButton">
            Sign In
          </button>
        </Link>
      </form>
    </>
  );
};

export default LoginForm;
