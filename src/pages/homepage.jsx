import { Link } from "react-router-dom";
import Card from "../components/Card/card";
import "./homepage.css";

export function Homepage() {
  return (
    <>
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
