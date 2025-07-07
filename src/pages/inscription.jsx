import React from "react";
import "./login-subscribe.css";
import Button from "../components/Button/button";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Register() {
  return (
    <section className="registration">
      <h1 className="registration-title">Inscription</h1>
      <form action="" id="form-registration">
        <h2 id="status-registration"></h2>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" />
        <span id="emailError"></span>
        <label for="password">Mot de Passe</label>
        <input type="password" name="password" id="password" />
        <span id="passwordError"></span>
        <label for="confirmPassword">Confirmtion Mot de Passe</label>
        <input type="password" name="password" id="confirmPassword" />
        <span id="identiquePasswordError"></span>
        <label for="pseudo">Pseudo</label>
        <input type="text" name="pseudo" id="pseudo" />
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
