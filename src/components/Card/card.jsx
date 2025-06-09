import React from "react";
import "./card.css";

export default function Card({ name }) {
  return (
    <div className={"card"}>
      <h3 className="card-name">{name}</h3>
    </div>
  );
}
