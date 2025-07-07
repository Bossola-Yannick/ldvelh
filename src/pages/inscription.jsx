import React from "react";
import "./login-subscribe.css";
import Button from "../components/Button/button";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleSubmitRegistration = async (e) => {
    e.preventDefault();
    const pseudo = document.getElementById("pseudo").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost/api-ldvelh/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        pseudo: pseudo,
        email: email,
        password: password,
      }),
    });

    const result = await response.json();
    if (result.status === "error") {
      const errorMessage = document.getElementById("connection-message");
      errorMessage.textContent = result.message;
      errorMessage.classList.remove("error-message");
      setTimeout(() => {
        errorMessage.textContent = "";
        errorMessage.classList.add("error-message");
      }, 2000);
    } else {
      navigate("/connection");
    }
  };

  return (
    <section className="registration">
      <h1 className="login-title">Inscription</h1>
      <form onSubmit={handleSubmitRegistration} id="form-registration">
        <h2 id="status-registration"></h2>
        <label for="pseudo">Pseudo</label>
        <input type="text" name="pseudo" id="pseudo" />
        <label for="email">Email</label>
        <input type="email" name="email" id="email" />
        <span id="emailError"></span>
        <label for="password">Mot de Passe</label>
        <input type="password" name="password" id="password" />
        <span id="passwordError"></span>
        <label for="confirmPassword">Confirmtion Mot de Passe</label>
        <input type="password" name="confirmPassword" id="confirmPassword" />
        <span id="identiquePasswordError"></span>
        <Button className="button-registration">Valider</Button>
      </form>
      <p className="text-info">
        Si vous avez déjà un compte veuillez vous{" "}
        <Link to="/connexion" className="text-info">
          Connecter
        </Link>
      </p>
    </section>
  );
}
