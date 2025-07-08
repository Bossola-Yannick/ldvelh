import { Link } from "react-router-dom";
import Card from "../components/Card/card";
import "./homepage.css";
import { UsePersistedState } from "../hooks/usePersistedState";
import Button from "../components/Button/button";

export function Homepage() {
  // eslint-disable-next-line
  const [user, setUser] = UsePersistedState("user", "");
  return (
    <>
      {user !== "" ? (
        <Link className="profil-link" to="/profil">
          Mon Profil
        </Link>
      ) : null}
      <h2 className="title-homepage">Aventures Disponibles</h2>
      <Card name="Loup Solitaire" />
      <Card name="Quête Du Graal" />
      <Card name="Défis Fantastiques" />
      <h3 className="title-homepage">Pour avoir acces aux aventures</h3>
      <Link to="/connexion">
        <p className="login-link">Connexion</p>
      </Link>
      <p>OU</p>
      <Link to="/inscription">
        <p className="login-link">Inscription</p>
      </Link>
    </>
  );
}
