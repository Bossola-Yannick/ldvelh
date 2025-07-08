import React from "react";
import "./card.css";

export default function Card({ name, id, adventure, onClick }) {
  return (
    <div className={"card"} id={id} onClick={onClick}>
      <h2 className="adventure">{adventure}</h2>
      <h3 className="card-name">{name}</h3>
    </div>
  );
}
