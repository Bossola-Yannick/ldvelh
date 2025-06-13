import React from "react";
import "./button.css";
export default function Button({ onClick, children, className }) {
  return (
    <button onClick={onClick} className={`custom-button ${className}`}>
      {children}
    </button>
  );
}
