import React from "react";
import Button from "../../components/Button/button";

export default function LsFight() {
  return (
    <>
      <div className="ls-quot">
        <p className="ls-quot-text">
          Quotient d'Attaque : <span className="ls-quot-value">9</span>
        </p>
      </div>
      <div className="ls-ability-fight">
        <div className="ls-ability-fight-box">
          <label htmlFor="ability-fight-ls">Habilité LS</label>
          <input type="number" name="ability-fight-ls" id="ability-fight-ls" />
        </div>
        <div className="ls-ability-fight-box">
          <label htmlFor="ability-fight-ennemy">Habilité ennemi</label>
          <input
            className="stat-ennemy"
            type="number"
            name="ability-fight-ennemy"
            id="ability-fight-ennemy"
          />
        </div>
      </div>
      <div className="ls-endurance-fight">
        <div className="ls-endurance-fight-box">
          <label htmlFor="endurance-fight-ls">Endurance LS</label>
          <input
            type="number"
            name="endurance-fight-ls"
            id="endurance-fight-ls"
          />
        </div>
        <div className="ls-endurance-fight-box">
          <label htmlFor="endurance-fight-ennemy">Endurance ennemi</label>
          <input
            className="stat-ennemy"
            type="number"
            name="endurance-fight-ennemy"
            id="endurance-fight-ennemy"
          />
        </div>
      </div>
      <Button className={"button-fight"}>Combat</Button>
      {/* <p className="ls-result">Résultat de Combat</p> */}
      <div className="result-text">
        <div className="ls-result-fight">
          <label htmlFor="result-ls">LS</label>
          <input type="text" name="result-ls" id="result-ls" />
        </div>
        <div className="ls-result-fight">
          <label htmlFor="result-ennemy">Ennemy</label>
          <input type="text" name="result-ennemy" id="result-ennemy" />
        </div>
      </div>
    </>
  );
}
