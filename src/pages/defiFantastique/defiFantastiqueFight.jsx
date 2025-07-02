import { useState } from "react";
import Button from "../../components/Button/button";
import { UsePersistedState } from "../../hooks/usePersistedState";
import { handleInputChange } from "../../utils/handleInputChange";
import diceRandom from "../../utils/diceRandom";
import { useEffect } from "react";
// import randomNumber from "../../utils/randomNumberLs";

export default function DfFight() {
  // eslint-disable-next-line
  const [dfCurrentAbility, setDfCurrentAbility] = UsePersistedState(
    "df-current-ability",
    ""
  );
  const [dfCurrentEndurance, setDfCurrentEndurance] = UsePersistedState(
    "df-current-endurance",
    ""
  );
  const [dfCurrentChance, setDfCurrentChance] = UsePersistedState(
    "df-current-chance",
    ""
  );
  const [dfEnemyAbility, setDfEnemyAbility] = UsePersistedState(
    "df-enemy-ability",
    ""
  );
  const [dfEnemyEndurance, setDfEnemyEndurance] = UsePersistedState(
    "df-enemy-endurance",
    ""
  );
  // const [dice1, setDice1] = useState(1);
  // const [dice2, setDice2] = useState(1);
  const [fighting, setFighting] = useState(false);
  const [fightingForceHero, setFightingForceHero] = UsePersistedState(
    "fighting-force-hero",
    0
  );
  const [fightingForceEnemy, setFightingForceEnemy] = UsePersistedState(
    "fighting-force-enemy",
    0
  );
  const [dfTurn, setDfTurn] = useState("");
  const [dfMessage, setDfMessage] = useState("");
  const [dfDead, setDfDead] = useState(false);

  // mecanique de combat
  function fightTurn() {
    setDfMessage("");
    const hero = dfCurrentAbility + diceRandom(1, 6) + diceRandom(1, 6);
    const enemy = dfEnemyAbility + diceRandom(1, 6) + diceRandom(1, 6);
    console.log(`score heros : ${hero}, score enemy ${enemy}`);
    setFightingForceHero(hero);
    setFightingForceEnemy(enemy);
    if (hero > enemy) {
      setDfTurn("Vous frapper votre adversaire !");
      setFighting(true);
    } else if (hero < enemy) {
      setDfTurn("L'adversaire vous frappe !");
      setFighting(true);
    } else {
      setDfTurn("Vos armes s'entrechoque, lancer un nouvel assaut !");
    }
  }
  // ne pas tenter la chance et laisser le déroulé du combat
  function notTryLuck() {
    if (fightingForceHero > fightingForceEnemy) {
      setDfEnemyEndurance(dfEnemyEndurance - 2);
      setDfMessage("Vous infligez 2 pts de dégats à l'adversaire !");
    } else {
      setDfCurrentEndurance(dfCurrentEndurance - 2);
      setDfMessage("L'adversaire vous inflige 2 pts de dégats !");
    }
    setFighting(false);
    setDfTurn("");
  }
  // tenter la chance en combat
  function tryLuck() {
    const luck = diceRandom(1, 6) + diceRandom(1, 6);
    console.log(luck);
    if (luck <= dfCurrentChance) {
      if (fightingForceHero > fightingForceEnemy) {
        setDfEnemyEndurance(dfEnemyEndurance - 4);
        setDfMessage(
          "Quelle Chance ! Vous infligez 4 pts de dégats à l'adversaire !"
        );
      } else {
        setDfCurrentEndurance(dfCurrentEndurance - 1);
        setDfMessage(
          "Quelle Chance ! L'adversaire vous inflige que 1 pts de dégats !"
        );
      }
    } else {
      if (fightingForceHero > fightingForceEnemy) {
        setDfEnemyEndurance(dfEnemyEndurance - 1);
        setDfMessage(
          "Quelle Malchance ! Vous n'infligez que 1 pts de dégats à l'adversaire !"
        );
      } else {
        setDfCurrentEndurance(dfCurrentEndurance - 3);
        setDfMessage(
          "Quelle Malchance ! L'adversaire vous inflige 3 pts de dégats !"
        );
      }
    }
    setDfCurrentChance(dfCurrentChance - 1);
    setFighting(false);
    setDfTurn("");
  }
  // gestion de fin de combat, mort d'un des deux combatants
  useEffect(() => {
    if (dfCurrentEndurance <= 0) {
      setDfMessage("Vous êtes MORT !");
      setDfDead(true);
    } else if (dfEnemyEndurance <= 0) {
      setDfMessage("Votre adversaire est MORT !");
      setDfDead(true);
    } else {
      setDfDead(false);
      setDfMessage("");
    }
  }, [dfCurrentEndurance, dfEnemyEndurance]);
  return (
    <section>
      <h3 className="df-fight">Place aux combat !</h3>
      <article className="df-fighter">
        <article className="df-life-fighter-box">
          <label htmlFor="ability-perso">Habileté :</label>
          <input
            type="number"
            name="ability-perso"
            id="ability-perso"
            value={dfCurrentAbility}
            readOnly
            // onChange={handleInputChange(setDfCurrentAbility, "number")}
          />
        </article>
        <article className="df-life-fighter-box">
          <label htmlFor="endurance-perso">Endurance :</label>
          <input
            type="number"
            name="endurance-perso"
            id="endurance-perso"
            value={dfCurrentEndurance}
            readOnly
            // onChange={handleInputChange(setDfCurrentEndurance, "number")}
          />
        </article>
      </article>
      <article className="df-fighter">
        <article className="df-life-fighter-box">
          <label htmlFor="life-enemy">Hab ennemi :</label>
          <input
            type="number"
            name="life-enemy"
            id="life-enemy"
            value={dfEnemyAbility}
            onChange={handleInputChange(setDfEnemyAbility, "number")}
          />
        </article>
        <article className="df-life-fighter-box">
          <label htmlFor="endurance-ennemy">Endu ennemi :</label>
          <input
            type="number"
            name="endurance-ennemy"
            id="endurance-ennemy"
            value={dfEnemyEndurance}
            onChange={handleInputChange(setDfEnemyEndurance, "number")}
          />
        </article>
      </article>

      <article className="df-click-fight">
        {fighting ? (
          <section className="df-chance-box">
            <h3>Pts de Chance restant</h3>
            <article className="df-chance-points">
              <Button className={"df-button no-chance"} onClick={notTryLuck}>
                Ne pas tenter la Chance
              </Button>
              <p className="df-chance-left">{dfCurrentChance}</p>
              {dfCurrentChance > 0 && (
                <Button className={"df-button chance"} onClick={tryLuck}>
                  Tenter la Chance
                </Button>
              )}
            </article>
          </section>
        ) : (
          !dfDead && (
            <Button className={"df-button-fight"} onClick={fightTurn}>
              Combat
            </Button>
          )
        )}
      </article>
      <article className="df-result-fight">
        {dfTurn != "" && <p className="df-result df-result-turn">{dfTurn}</p>}
        {dfMessage != "" && (
          <p className="df-result df-result-fight">{dfMessage}</p>
        )}
      </article>
    </section>
  );
}
