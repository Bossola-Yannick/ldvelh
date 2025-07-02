import { useState } from "react";
import Button from "../../components/Button/button";
import { UsePersistedState } from "../../hooks/usePersistedState";
import { handleInputChange } from "../../utils/handleInputChange";
import { useEffect } from "react";

export default function LsFight() {
  // eslint-disable-next-line
  const [lsAbility, setLsAbility] = UsePersistedState("ls-ability", "");
  const [fightAbility, setFightAbility] = UsePersistedState(
    "fight-ability",
    lsAbility
  );
  const [enemyAbility, setEnemyAbility] = UsePersistedState(
    "enemy-ability",
    ""
  );
  const [lsEndurance, setLsEndurance] = UsePersistedState("ls-endurance", "");
  const [enemyEndurance, setEnemyEndurance] = UsePersistedState(
    "enemy-endurance",
    ""
  );
  const [quotAttak, setQuotAttak] = UsePersistedState("ls-quotient-attaque", 0);
  const [resultFight, setResultFight] = UsePersistedState("resultFight", {});
  const [weaponMastery, setWeaponMastery] = UsePersistedState(
    "weapon-mastery",
    false
  );
  const [fight, setFight] = useState(true);
  const [lsHasardTable, setLsHasardTable] = useState(0);
  //!voici la base du code pour gérer le cicle de combat
  // mise en tableau des quotient d'attaque
  const quotients = [
    -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11,
  ];

  // mise en tablea de la Table des coups
  const tableCoups = [
    // *hasard 0
    [
      { E: "-6", LS: "-0" },
      { E: "-7", LS: "-0" },
      { E: "-7", LS: "-0" },
      { E: "-8", LS: "-0" },
      { E: "-8", LS: "-0" },
      { E: "-9", LS: "-0" },
      { E: "-9", LS: "-0" },
      { E: "-10", LS: "-0" },
      { E: "-10", LS: "-0" },
      { E: "-11", LS: "-0" },
      { E: "-11", LS: "-0" },
      { E: "-12", LS: "-0" },
      { E: "-14", LS: "-0" },
      { E: "-14", LS: "-0" },
      { E: "-16", LS: "-0" },
      { E: "-16", LS: "-0" },
      { E: "-18", LS: "-0" },
      { E: "-18", LS: "-0" },
      { E: "T", LS: "-0" },
      { E: "T", LS: "-0" },
      { E: "T", LS: "-0" },
      { E: "T", LS: "-0" },
      { E: "T", LS: "-0" },
    ],
    //* hasard 1
    [
      { E: "-0", LS: "T" },
      { E: "-0", LS: "T" },
      { E: "-0", LS: "T" },
      { E: "-0", LS: "-8" },
      { E: "-0", LS: "-8" },
      { E: "-0", LS: "-6" },
      { E: "-0", LS: "-6" },
      { E: "-1", LS: "-6" },
      { E: "-1", LS: "-6" },
      { E: "-2", LS: "-5" },
      { E: "-2", LS: "-5" },
      { E: "-3", LS: "-5" },
      { E: "-4", LS: "-5" },
      { E: "-4", LS: "-5" },
      { E: "-5", LS: "-4" },
      { E: "-5", LS: "-4" },
      { E: "-6", LS: "-4" },
      { E: "-6", LS: "-4" },
      { E: "-7", LS: "-4" },
      { E: "-7", LS: "-4" },
      { E: "-8", LS: "-3" },
      { E: "-8", LS: "-3" },
      { E: "-9", LS: "-3" },
    ],
    // *hasard 2
    [
      { E: "-0", LS: "T" },
      { E: "-0", LS: "-8" },
      { E: "-0", LS: "-8" },
      { E: "-0", LS: "-7" },
      { E: "-0", LS: "-7" },
      { E: "-1", LS: "-6" },
      { E: "-1", LS: "-6" },
      { E: "-2", LS: "-5" },
      { E: "-2", LS: "-5" },
      { E: "-3", LS: "-5" },
      { E: "-3", LS: "-5" },
      { E: "-4", LS: "-4" },
      { E: "-5", LS: "-4" },
      { E: "-5", LS: "-4" },
      { E: "-6", LS: "-3" },
      { E: "-6", LS: "-3" },
      { E: "-7", LS: "-3" },
      { E: "-7", LS: "-3" },
      { E: "-8", LS: "-3" },
      { E: "-8", LS: "-3" },
      { E: "-9", LS: "-3" },
      { E: "-9", LS: "-3" },
      { E: "-10", LS: "-2" },
    ],
    // *hasard 3
    [
      { E: "-0", LS: "-8" },
      { E: "-0", LS: "-7" },
      { E: "-0", LS: "-7" },
      { E: "-1", LS: "-6" },
      { E: "-1", LS: "-6" },
      { E: "-2", LS: "-5" },
      { E: "-2", LS: "-5" },
      { E: "-3", LS: "-5" },
      { E: "-3", LS: "-5" },
      { E: "-4", LS: "-4" },
      { E: "-4", LS: "-4" },
      { E: "-5", LS: "-4" },
      { E: "-6", LS: "-3" },
      { E: "-6", LS: "-3" },
      { E: "-7", LS: "-3" },
      { E: "-7", LS: "-3" },
      { E: "-8", LS: "-3" },
      { E: "-8", LS: "-3" },
      { E: "-9", LS: "-2" },
      { E: "-9", LS: "-2" },
      { E: "-10", LS: "-2" },
      { E: "-10", LS: "-2" },
      { E: "-11", LS: "-2" },
    ],
    // *hasard 4
    [
      { E: "-0", LS: "-8" },
      { E: "-1", LS: "-7" },
      { E: "-1", LS: "-7" },
      { E: "-2", LS: "-6" },
      { E: "-2", LS: "-6" },
      { E: "-3", LS: "-5" },
      { E: "-3", LS: "-5" },
      { E: "-4", LS: "-4" },
      { E: "-4", LS: "-4" },
      { E: "-5", LS: "-4" },
      { E: "-5", LS: "-4" },
      { E: "-6", LS: "-3" },
      { E: "-7", LS: "-3" },
      { E: "-7", LS: "-3" },
      { E: "-8", LS: "-2" },
      { E: "-8", LS: "-2" },
      { E: "-9", LS: "-2" },
      { E: "-9", LS: "-2" },
      { E: "-10", LS: "-2" },
      { E: "-10", LS: "-2" },
      { E: "-11", LS: "-2" },
      { E: "-11", LS: "-2" },
      { E: "-12", LS: "-2" },
    ],
    // *hasard 5
    [
      { E: "-1", LS: "-7" },
      { E: "-2", LS: "-6" },
      { E: "-2", LS: "-6" },
      { E: "-3", LS: "-5" },
      { E: "-3", LS: "-5" },
      { E: "-4", LS: "-4" },
      { E: "-4", LS: "-4" },
      { E: "-5", LS: "-4" },
      { E: "-5", LS: "-4" },
      { E: "-6", LS: "-3" },
      { E: "-6", LS: "-3" },
      { E: "-7", LS: "-2" },
      { E: "-8", LS: "-2" },
      { E: "-8", LS: "-2" },
      { E: "-9", LS: "-2" },
      { E: "-9", LS: "-2" },
      { E: "-10", LS: "-2" },
      { E: "-10", LS: "-2" },
      { E: "-11", LS: "-2" },
      { E: "-11", LS: "-2" },
      { E: "-12", LS: "-2" },
      { E: "-12", LS: "-2" },
      { E: "-14", LS: "-1" },
    ],
    // *hasard 6
    [
      { E: "-2", LS: "-6" },
      { E: "-3", LS: "-6" },
      { E: "-3", LS: "-6" },
      { E: "-4", LS: "-5" },
      { E: "-4", LS: "-5" },
      { E: "-5", LS: "-4" },
      { E: "-5", LS: "-4" },
      { E: "-6", LS: "-3" },
      { E: "-6", LS: "-3" },
      { E: "-7", LS: "-2" },
      { E: "-7", LS: "-2" },
      { E: "-8", LS: "-2" },
      { E: "-9", LS: "-2" },
      { E: "-9", LS: "-2" },
      { E: "-10", LS: "-2" },
      { E: "-10", LS: "-2" },
      { E: "-11", LS: "-1" },
      { E: "-11", LS: "-1" },
      { E: "-12", LS: "-1" },
      { E: "-12", LS: "-1" },
      { E: "-14", LS: "-1" },
      { E: "-14", LS: "-1" },
      { E: "-16", LS: "-1" },
    ],
    // *hasard 7
    [
      { E: "-3", LS: "-5" },
      { E: "-4", LS: "-5" },
      { E: "-4", LS: "-5" },
      { E: "-5", LS: "-4" },
      { E: "-5", LS: "-4" },
      { E: "-6", LS: "-3" },
      { E: "-6", LS: "-3" },
      { E: "-7", LS: "-2" },
      { E: "-7", LS: "-2" },
      { E: "-8", LS: "-2" },
      { E: "-8", LS: "-2" },
      { E: "-9", LS: "-1" },
      { E: "-10", LS: "-1" },
      { E: "-10", LS: "-1" },
      { E: "-11", LS: "-1" },
      { E: "-11", LS: "-1" },
      { E: "-12", LS: "-0" },
      { E: "-12", LS: "-0" },
      { E: "-14", LS: "-0" },
      { E: "-14", LS: "-0" },
      { E: "-16", LS: "-0" },
      { E: "-16", LS: "-0" },
      { E: "-18", LS: "-0" },
    ],
    // *hasard 8
    [
      { E: "-4", LS: "-4" },
      { E: "-5", LS: "-4" },
      { E: "-5", LS: "-4" },
      { E: "-6", LS: "-3" },
      { E: "-6", LS: "-3" },
      { E: "-7", LS: "-2" },
      { E: "-7", LS: "-2" },
      { E: "-8", LS: "-1" },
      { E: "-8", LS: "-1" },
      { E: "-9", LS: "-1" },
      { E: "-9", LS: "-1" },
      { E: "-10", LS: "-0" },
      { E: "-11", LS: "-0" },
      { E: "-11", LS: "-0" },
      { E: "-12", LS: "-0" },
      { E: "-12", LS: "-0" },
      { E: "-14", LS: "-0" },
      { E: "-14", LS: "-0" },
      { E: "-16", LS: "-0" },
      { E: "-16", LS: "-0" },
      { E: "-18", LS: "-0" },
      { E: "-18", LS: "-0" },
      { E: "T", LS: "-0" },
    ],
    // *hasard 9
    [
      { E: "-5", LS: "-3" },
      { E: "-6", LS: "-3" },
      { E: "-6", LS: "-3" },
      { E: "-7", LS: "-2" },
      { E: "-7", LS: "-2" },
      { E: "-8", LS: "-0" },
      { E: "-8", LS: "-0" },
      { E: "-9", LS: "-0" },
      { E: "-9", LS: "-0" },
      { E: "-10", LS: "-0" },
      { E: "-10", LS: "-0" },
      { E: "-11", LS: "-0" },
      { E: "-12", LS: "-0" },
      { E: "-12", LS: "-0" },
      { E: "-14", LS: "-0" },
      { E: "-14", LS: "-0" },
      { E: "-16", LS: "-0" },
      { E: "-16", LS: "-0" },
      { E: "-18", LS: "-0" },
      { E: "-18", LS: "-0" },
      { E: "T", LS: "-0" },
      { E: "T", LS: "-0" },
      { E: "T", LS: "-0" },
    ],
  ];

  //* Fonction pour obtenir le résultat
  function getResult(hasard, quotient) {
    //*    forcage pour géré la partie "-11 ou infér" et "+11 ou supp"
    if (quotient < -11) quotient = -11;
    if (quotient > 11) quotient = 11;
    // récupère l'index correspondant dans le tableau "quotients"
    const colIndex = quotients.indexOf(quotient);
    //  me retourne un objet { E: ..., LS: ... }
    return tableCoups[hasard][colIndex];
  }

  // gestion du combat au click

  const handleFight = () => {
    const newNumber = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    const resultFight = getResult(newNumber, quotAttak);
    console.log("resultat table des coup : ", resultFight);
    const newLsEndurance = lsEndurance - Math.abs(resultFight.LS);
    const newEnnemyEndurance = enemyEndurance - Math.abs(resultFight.E);
    setLsEndurance(newLsEndurance);
    setEnemyEndurance(newEnnemyEndurance);
    setResultFight(resultFight);
    setLsHasardTable(newNumber);
  };

  // calcul du quotien d'attaque
  useEffect(() => {
    setQuotAttak(fightAbility - enemyAbility);
    // eslint-disable-next-line
  }, [fightAbility, enemyAbility]);
  useEffect(() => {
    if (
      enemyAbility === "" ||
      enemyEndurance === "" ||
      parseInt(lsEndurance) <= 0 ||
      parseInt(enemyEndurance) <= 0
    ) {
      setFight(false);
    } else setFight(true);
  }, [lsEndurance, enemyEndurance, enemyAbility]);

  // gestion maitrise d'arme de combat
  const handleCheckedMastery = (e) => {
    setWeaponMastery(e.target.checked);
  };
  useEffect(() => {
    if (weaponMastery) {
      setFightAbility(lsAbility + 2);
    } else {
      setFightAbility(lsAbility);
    }
    // eslint-disable-next-line
  }, [weaponMastery]);

  return (
    <section>
      <h3 className="df-title">Place aux Combat !</h3>
      <article className="ls-weapon-mastery">
        <label htmlFor="ls-mastery">Maitrise d'Arme</label>
        <input
          type="checkbox"
          name="ls-mastery"
          id="ls-mastery"
          checked={weaponMastery}
          onChange={handleCheckedMastery}
        />
      </article>
      <article className="ls-quot">
        <p className="ls-quot-text">
          Quotient d'Attaque :{" "}
          <span className="ls-quot-value">{quotAttak}</span>
        </p>
      </article>
      <article className="ls-ability-fight">
        <article className="ls-ability-fight-box">
          <label htmlFor="ability-fight-ls">Habilité LS</label>
          <input
            type="number"
            name="ability-fight-ls"
            id="ability-fight-ls"
            value={fightAbility}
            // onChange={handleInputChange(setLsAbility, "number")}
            readOnly
          />
        </article>
        <article className="ls-ability-fight-box">
          <label htmlFor="ability-fight-ennemy">Habilité ennemi</label>
          <input
            className="stat-ennemy"
            type="number"
            name="ability-fight-ennemy"
            id="ability-fight-ennemy"
            value={enemyAbility}
            onChange={handleInputChange(setEnemyAbility, "number")}
          />
        </article>
      </article>
      <article className="ls-endurance-fight">
        <article className="ls-endurance-fight-box">
          <label htmlFor="endurance-fight-ls">Endurance LS</label>
          <input
            type="number"
            name="endurance-fight-ls"
            id="endurance-fight-ls"
            value={lsEndurance}
            // onChange={handleInputChange(setLsEndurance, "number")}
            readOnly
          />
        </article>
        <article className="ls-endurance-fight-box">
          <label htmlFor="endurance-fight-ennemy">Endurance ennemi</label>
          <input
            className="stat-ennemy"
            type="number"
            name="endurance-fight-ennemy"
            id="endurance-fight-ennemy"
            value={enemyEndurance}
            onChange={handleInputChange(setEnemyEndurance, "number")}
          />
        </article>
      </article>
      <Button
        id="button-fight"
        className={fight ? "button-fight" : "button-fight-hidden"}
        onClick={handleFight}
      >
        Combat
      </Button>
      <p className="ls-result">
        Résultat Table de Hasard : <span>{lsHasardTable}</span>
      </p>
      <article className="ls-result-fight">
        {lsEndurance > 0 && (
          <p className="ls-result">
            - <span className="ls-perso">LS </span>
            perd <span className="ls-life-pts">
              {resultFight?.LS ?? "0"}
            </span>{" "}
            pts de vie .
          </p>
        )}
        {lsEndurance <= 0 && lsEndurance != "" && (
          <p className="ls-result">
            Loup Solitaire est <span className="ls-perso">MORT </span> !
          </p>
        )}
        {enemyEndurance > 0 && (
          <p className="ls-result">
            - <span className="ls-perso">ennemi </span>
            perd <span className="ls-life-pts">
              {resultFight?.E ?? "0"}
            </span>{" "}
            pts de vie .
          </p>
        )}
        {enemyEndurance <= 0 && (
          <p className="ls-result">
            Votre ennemi est <span className="ls-perso">MORT </span> !
          </p>
        )}
      </article>
    </section>
  );
}
