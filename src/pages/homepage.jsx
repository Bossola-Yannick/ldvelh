import { Link } from "react-router-dom";
import Card from "../components/Card/card";
import "./homepage.css";
import { UsePersistedState } from "../hooks/usePersistedState";

export function Homepage() {
  // eslint-disable-next-line
  const [user, setUser] = UsePersistedState("user", "");
  return (
    <>
      <h1 className="title-homepage">Prêt à te lancer : {user["pseudo"]}</h1>
      <h2 className="title-homepage">Aventures Disponibles</h2>
      <Link to="/loup-solitaire">
        <Card name="Loup Solitaire" />
      </Link>
      <Link to="/quete-du-graal">
        <Card name="Quête Du Graal" />
      </Link>
      <Link to="/defi-fantastique">
        <Card name="Défis Fantastiques" />
      </Link>
    </>
  );
}
