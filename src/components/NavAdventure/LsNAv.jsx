import React from "react";
import { Link } from "react-router-dom";
import "./NavAventure.css";

export default function LsNav() {
  return (
    <div className="nav">
      <Link to="/loup-solitaire">
        <p className="nav-link">Perso</p>
      </Link>
      <Link to="/loup-solitaire/equipement">
        <p className="nav-link">Sac</p>
      </Link>
      <Link to="/loup-solitaire/notes">
        <p className="nav-link">Notes</p>
      </Link>
      <Link to="/loup-solitaire/combat">
        <p className="nav-link">Combat</p>
      </Link>
      <Link to="/loup-solitaire/hasard">
        <p className="nav-link">Hasard</p>
      </Link>
    </div>
  );
}
