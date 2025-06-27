import React from "react";
import { Link } from "react-router-dom";
import "./NavAventure.css";

export default function QdGNav() {
  return (
    <div className="nav">
      <Link to="/quete-du-graal">
        <p className="nav-link">Perso</p>
      </Link>
      <Link to="/quete-du-graal/notes">
        <p className="nav-link">Notes</p>
      </Link>
      <Link to="/quete-du-graal/combat">
        <p className="nav-link">Combat</p>
      </Link>
      <Link to="/quete-du-graal/hasard">
        <p className="nav-link">Hasard</p>
      </Link>
    </div>
  );
}
