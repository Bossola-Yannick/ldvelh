import { useEffect } from "react";
import "./login-subscribe.css";
import Button from "../components/Button/button";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import { UsePersistedState } from "../hooks/usePersistedState";

export default function Connection() {
  // eslint-disable-next-line
  const [user, setUser] = UsePersistedState("user", "");
  const [loggedIn, setLoggedIn] = UsePersistedState("user-login", false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost/api-ldvelh/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email: email, password: password }),
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
      setUser(result.user);
      setLoggedIn(true);
    }
  };
  useEffect(() => {
    if (loggedIn) {
      // Redirige vers la page accueil si l'utilisateur est connecté
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <section className="connection">
      <h1 className="login-title">Connexion</h1>
      <form onSubmit={handleSubmit} id="form-connection">
        <label htmlFor="email">Votre Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Votre Mot de Passe</label>
        <input type="password" name="password" id="password" />
        <Button className="button-registration">Connexion</Button>
        <span id="connection-message" className="error-message"></span>
      </form>
      <p className="text-info">
        Si vous n'avez pas de compte veuillez vous{" "}
        <Link to="/inscription" className="text-info">
          Inscrire
        </Link>
      </p>
    </section>
  );
}
