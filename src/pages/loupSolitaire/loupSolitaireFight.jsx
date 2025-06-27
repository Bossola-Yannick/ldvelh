import React from "react";
import Button from "../../components/Button/button";
import { UsePersistedState } from "../../hooks/usePersistedState";
import { handleInputChange } from "../../utils/handleInputChange";
import { useEffect } from "react";

export default function LsFight() {
  const [lsAbility, setLsAbility] = UsePersistedState("ls-ability", 0);
  const [enemyAbility, setEnemyAbility] = UsePersistedState("enemy-ability", 0);
  const [endurance, setEndurance] = UsePersistedState("ls-endurance", 0);
  const [enemyEndurance, setEnemyEndurance] = UsePersistedState(
    "enemy-endurance",
    0
  );
  const [quotAttak, setQuotAttak] = UsePersistedState("ls-quotient-attaque", 0);

  // calcul du quotien d'attaque
  useEffect(() => {
    setQuotAttak(lsAbility - enemyAbility);
  }, [lsAbility, enemyAbility]);
  return (
    <>
      <div className="ls-quot">
        <p className="ls-quot-text">
          Quotient d'Attaque :{" "}
          <span className="ls-quot-value">{quotAttak}</span>
        </p>
      </div>
      <div className="ls-ability-fight">
        <div className="ls-ability-fight-box">
          <label htmlFor="ability-fight-ls">Habilité LS</label>
          <input
            type="number"
            name="ability-fight-ls"
            id="ability-fight-ls"
            value={lsAbility}
            onChange={handleInputChange(setLsAbility, "number")}
          />
        </div>
        <div className="ls-ability-fight-box">
          <label htmlFor="ability-fight-ennemy">Habilité ennemi</label>
          <input
            className="stat-ennemy"
            type="number"
            name="ability-fight-ennemy"
            id="ability-fight-ennemy"
            value={enemyAbility}
            onChange={handleInputChange(setEnemyAbility, "number")}
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
            value={endurance}
            onChange={handleInputChange(setEndurance, "number")}
          />
        </div>
        <div className="ls-endurance-fight-box">
          <label htmlFor="endurance-fight-ennemy">Endurance ennemi</label>
          <input
            className="stat-ennemy"
            type="number"
            name="endurance-fight-ennemy"
            id="endurance-fight-ennemy"
            value={enemyEndurance}
            onChange={handleInputChange(setEnemyEndurance, "number")}
          />
        </div>
      </div>
      <Button className={"button-fight"}>Combat</Button>
      <p className="ls-result">Résultat de Combat</p>
      <div className="ls-result-fight">
        <p className="ls-result">
          - <span className="ls-perso">LS </span>
          perd <span className="ls-life-pts">5</span> pts de vie .
        </p>
        <p className="ls-result">
          - Il lui reste <span className="ls-has-life">12</span> pts de vie !
        </p>
        <p className="ls-result">
          - <span className="ls-perso">ennemi </span>
          perd <span className="ls-life-pts">7</span> pts de vie .
        </p>
      </div>
    </>
  );
}
