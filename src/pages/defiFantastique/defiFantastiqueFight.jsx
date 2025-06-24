import React from "react";
import Button from "../../components/Button/button";

export default function DfFight() {
  return (
    <>
      <div className="df-fighter">
        <div className="df-life-fighter-box">
          <label htmlFor="life-perso">Habileté :</label>
          <input type="number" name="life-perso" id="life-perso" />
        </div>
        <div className="df-life-fighter-box">
          <label htmlFor="life-ennemy">Endurance :</label>
          <input type="number" name="life-ennemy" id="life-ennemy" />
        </div>
      </div>
      <div className="df-fighter">
        <div className="df-life-fighter-box">
          <label htmlFor="life-perso">Hab ennemi :</label>
          <input type="number" name="life-perso" id="life-perso" />
        </div>
        <div className="df-life-fighter-box">
          <label htmlFor="life-ennemy">Endu ennemi :</label>
          <input type="number" name="life-ennemy" id="life-ennemy" />
        </div>
      </div>
      <p className="df-turn-fighter">Votre tour de taper !</p>
      <div className="df-click-fight">
        <Button className={"df-button-fight"}>Combat</Button>
        <div className="df-chance-box">
          <p>Pts de Chance restant</p>
          <div className="df-chance-points">
            <p className="df-chance-left">12</p>
            <Button className={"df-button-chance"}>Tenter la Chance</Button>
          </div>
        </div>
      </div>

      <p className="df-result df-result-title">Résultat de Combat</p>
      <div className="df-result-fight">
        <p className="df-result">
          - <span className="df-perso">Tu </span>
          perd <span className="df-life-pts">5</span> pts d'endurances !
        </p>
        <p className="df-result">
          - <span className="df-perso">Ennemi </span>
          perd <span className="df-life-pts">15</span> pts d'endurances !
        </p>
      </div>
    </>
  );
}
