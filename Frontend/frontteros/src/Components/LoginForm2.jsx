import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const MIN_PASSWORD_LENGTH = 7;

function LoginPage() {
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSubmitLogin(event) {
    event.preventDefault();
    localStorage.mealsToken = '1';
    localStorage.cocktailsToken = '1';
    localStorage.user = JSON.stringify({ email });
  }

  useEffect(() => {
    setSubmitDisabled(!EMAIL_REGEX.test(email) || password.length < MIN_PASSWORD_LENGTH);
  }, [email, password]);

  return (
    <section className="login-container">
      <form
        onSubmit={ onSubmitLogin }
        className="login-form"
      >
        <label className="login-label" htmlFor="email-input">
          <span>Email:</span>
          <input
            id="email-input"
            type="email"
            name="email"
            placeholder="Insira seu e-mail"
            onChange={ ({ target }) => setEmail(target.value) }
            data-testid="email-input"
          />
        </label>
        <label className="login-label" htmlFor="password-input">
          <span>Senha:</span>
          <input
            id="password-input"
            type="password"
            name="password"
            placeholder="Insira sua senha"
            onChange={ ({ target }) => setPassword(target.value) }
            data-testid="password-input"
          />
        </label>
        <Link to="/home">
          <button
            type="submit"
            disabled={ isSubmitDisabled }
            data-testid="login-submit-btn"
            className="login-submit-btn"
            >
            Entrar
          </button>
        </Link>
      </form>
    </section>
  );
}

export default LoginPage;
