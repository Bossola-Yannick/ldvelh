import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

export default function Card({ name, id, adventure }) {
  return (
    <div className={"card"} id={id}>
      <h2 className="adventure">{adventure}</h2>
      <h3 className="card-name">{name}</h3>
    </div>
  );
}
