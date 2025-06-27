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

  //!voici la base du code pour gérer le cicle de combat
  // mise en tableau des quotient d'attaque
  const quotients = [
    -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11,
  ];

  // mise en tablea de la Table des coups
  const tableCoups = [
    //* hasard 1
    [
      { E: "-0", LS: "T" },
      { E: "-0", LS: "T" },
      { E: "-0", LS: "-8" },
      { E: "-0", LS: "-6" },
      { E: "-1", LS: "-6" },
      { E: "-2", LS: "-5" },
      { E: "-3", LS: "-5" },
      { E: "-4", LS: "-5" },
      { E: "-5", LS: "-4" },
      { E: "-6", LS: "-4" },
      { E: "-7", LS: "-4" },
      { E: "-8", LS: "-3" },
      { E: "-9", LS: "-3" },
    ],
    // *hasard 2
    [
      { E: "-0", LS: "T" },
      { E: "-0", LS: "-8" },
      { E: "-0", LS: "-7" },
      { E: "-1", LS: "-6" },
      { E: "-2", LS: "-5" },
      { E: "-3", LS: "-5" },
      { E: "-4", LS: "-4" },
      { E: "-5", LS: "-4" },
      { E: "-6", LS: "-3" },
      { E: "-7", LS: "-3" },
      { E: "-8", LS: "-3" },
      { E: "-9", LS: "-3" },
      { E: "-10", LS: "-2" },
    ],
    // *hasard 3
    [
      { E: "-0", LS: "-8" },
      { E: "-0", LS: "-7" },
      { E: "-1", LS: "-86" },
      { E: "-2", LS: "-5" },
      { E: "-3", LS: "-5" },
      { E: "-4", LS: "-4" },
      { E: "-5", LS: "-4" },
      { E: "-6", LS: "-3" },
      { E: "-7", LS: "-3" },
      { E: "-8", LS: "-3" },
      { E: "-9", LS: "-2" },
      { E: "-10", LS: "-2" },
      { E: "-11", LS: "-2" },
    ],
    //todo=>
    // *hasard 4
    [
      { E: "-0", LS: "T" },
      { E: "-0", LS: "T" },
      { E: "-0", LS: "-8" },
      { E: "-0", LS: "-6" },
      { E: "-1", LS: "-6" },
      { E: "-2", LS: "-5" },
      { E: "-3", LS: "-5" },
      { E: "-4", LS: "-5" },
      { E: "-5", LS: "-4" },
      { E: "-6", LS: "-4" },
      { E: "-7", LS: "-4" },
      { E: "-8", LS: "-3" },
      { E: "-9", LS: "-3" },
    ],
    // *hasard 5
    [
      { E: "-0", LS: "T" },
      { E: "-0", LS: "T" },
      { E: "-0", LS: "-8" },
      { E: "-0", LS: "-6" },
      { E: "-1", LS: "-6" },
      { E: "-2", LS: "-5" },
      { E: "-3", LS: "-5" },
      { E: "-4", LS: "-5" },
      { E: "-5", LS: "-4" },
      { E: "-6", LS: "-4" },
      { E: "-7", LS: "-4" },
      { E: "-8", LS: "-3" },
      { E: "-9", LS: "-3" },
    ],
    // *hasard 6
    [
      { E: "-0", LS: "T" },
      { E: "-0", LS: "T" },
      { E: "-0", LS: "-8" },
      { E: "-0", LS: "-6" },
      { E: "-1", LS: "-6" },
      { E: "-2", LS: "-5" },
      { E: "-3", LS: "-5" },
      { E: "-4", LS: "-5" },
      { E: "-5", LS: "-4" },
      { E: "-6", LS: "-4" },
      { E: "-7", LS: "-4" },
      { E: "-8", LS: "-3" },
      { E: "-9", LS: "-3" },
    ],
    // *hasard 7
    [
      { E: "-0", LS: "T" },
      { E: "-0", LS: "T" },
      { E: "-0", LS: "-8" },
      { E: "-0", LS: "-6" },
      { E: "-1", LS: "-6" },
      { E: "-2", LS: "-5" },
      { E: "-3", LS: "-5" },
      { E: "-4", LS: "-5" },
      { E: "-5", LS: "-4" },
      { E: "-6", LS: "-4" },
      { E: "-7", LS: "-4" },
      { E: "-8", LS: "-3" },
      { E: "-9", LS: "-3" },
    ],
    // *hasard 8
    [
      { E: "-0", LS: "T" },
      { E: "-0", LS: "T" },
      { E: "-0", LS: "-8" },
      { E: "-0", LS: "-6" },
      { E: "-1", LS: "-6" },
      { E: "-2", LS: "-5" },
      { E: "-3", LS: "-5" },
      { E: "-4", LS: "-5" },
      { E: "-5", LS: "-4" },
      { E: "-6", LS: "-4" },
      { E: "-7", LS: "-4" },
      { E: "-8", LS: "-3" },
      { E: "-9", LS: "-3" },
    ],
    // *hasard 9
    [
      { E: "-0", LS: "T" },
      { E: "-0", LS: "T" },
      { E: "-0", LS: "-8" },
      { E: "-0", LS: "-6" },
      { E: "-1", LS: "-6" },
      { E: "-2", LS: "-5" },
      { E: "-3", LS: "-5" },
      { E: "-4", LS: "-5" },
      { E: "-5", LS: "-4" },
      { E: "-6", LS: "-4" },
      { E: "-7", LS: "-4" },
      { E: "-8", LS: "-3" },
      { E: "-9", LS: "-3" },
    ],
    // *hasard 0
    [
      { E: "-0", LS: "T" },
      { E: "-0", LS: "T" },
      { E: "-0", LS: "-8" },
      { E: "-0", LS: "-6" },
      { E: "-1", LS: "-6" },
      { E: "-2", LS: "-5" },
      { E: "-3", LS: "-5" },
      { E: "-4", LS: "-5" },
      { E: "-5", LS: "-4" },
      { E: "-6", LS: "-4" },
      { E: "-7", LS: "-4" },
      { E: "-8", LS: "-3" },
      { E: "-9", LS: "-3" },
    ],
  ];

  //* Fonction pour obtenir le résultat
  // function getResult(hasard, quotient) {
  //*    Clamp quotient entre -11 et 11
  //   if (quotient < -11) quotient = -11;
  //   if (quotient > 11) quotient = 11;

  //   const colIndex = quotients.indexOf(quotient);
  //   return tableCoups[hasard][colIndex]; // retourne un objet { E: ..., LS: ... }
  // }

  //* Exemple d'appel
  // const result = getResult(3, -5); // Suppose que le hasard est 3 et quotient -5
  // console.log("Dégâts à l'ennemi :", result.E);
  // console.log("Dégâts au Loup Solitaire :", result.LS);
  //!fin du cicle de combat

  // calcul du quotien d'attaque
  useEffect(() => {
    setQuotAttak(lsAbility - enemyAbility);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
