import React from "react";
import Button from "../../components/Button/button";

export default function QdGFight() {
  return (
    <>
      <div className="life-fighter">
        <div className="life-fighter-box">
          <label htmlFor="life-perso">Pv de Pip :</label>
          <input type="number" name="life-perso" id="life-perso" />
        </div>
        <div className="life-fighter-box">
          <label htmlFor="life-ennemy">Pv ennemi :</label>
          <input type="number" name="life-ennemy" id="life-ennemy" />
        </div>
      </div>

      <Button>Combat</Button>

      <div className="dice-box">
        <div className="dice" id="dice-1">
          Dés
        </div>
        <div className="dice" id="dice-2">
          Dés
        </div>
      </div>

      <div className="result-Fight">
        <label htmlFor="result">Résultat de Combat</label>
        <input type="text" name="result" id="result" />
      </div>
    </>
  );
}
