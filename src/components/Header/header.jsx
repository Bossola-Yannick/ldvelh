import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="title-name">Ma Feuille d'Aventure</h1>
      </Link>
    </div>
  );
}
