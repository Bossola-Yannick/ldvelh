import React from "react";
import Button from "../../components/Button/button";

export default function LsFight() {
  return (
    <>
      <div className="quot">
        <p className="quot-text">
          Quotient d'Attaque : <span className="quot-value">9</span>
        </p>
      </div>
      <div className="habiliti-fight">
        <div className="hability-fight-box">
          <label htmlFor="hability-fight-ls">Habilité LS</label>
          <input
            type="number"
            name="hability-fight-ls"
            id="hability-fight-ls"
          />
        </div>
        <div className="hability-fight-box">
          <label htmlFor="hability-fight-ennemy">Habilité ennemi</label>
          <input
            type="number"
            name="hability-fight-ennemy"
            id="hability-fight-ennemy"
          />
        </div>
      </div>
      <div className="endurace-fight">
        <div className="endurance-fight-box">
          <label htmlFor="endurance-fight-ls">Endurance LS</label>
          <input
            type="number"
            name="endurance-fight-ls"
            id="endurance-fight-ls"
          />
        </div>
        <div className="endurance-fight-box">
          <label htmlFor="endurance-fight-ennemy">Endurance ennemi</label>
          <input
            type="number"
            name="endurance-fight-ennemy"
            id="endurance-fight-ennemy"
          />
        </div>
      </div>
      <Button>Combat</Button>
      <div className="result-Fight">
        <label htmlFor="result">Résultat de Combat</label>
        <input type="text" name="result" id="result" />
      </div>
    </>
  );
}
