import React from "react";
import { Link } from "react-router-dom";
import "./NavAventure.css";

export default function DfNav() {
  return (
    <div className="nav">
      <Link to="/defi-fantastique">
        <p className="nav-link">Perso</p>
      </Link>
      <Link to="/defi-fantastique/notes">
        <p className="nav-link">Notes</p>
      </Link>
      <Link to="/defi-fantastique/combat">
        <p className="nav-link">Combat</p>
      </Link>
      <Link to="/defi-fantastique/hasard">
        <p className="nav-link">Hasard</p>
      </Link>
    </div>
  );
}
