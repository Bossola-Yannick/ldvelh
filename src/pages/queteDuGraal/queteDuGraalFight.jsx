import { useEffect } from "react";
import Button from "../../components/Button/button";
import { UsePersistedState } from "../../hooks/usePersistedState";
import { handleInputChange } from "../../utils/handleInputChange";
import { useState } from "react";

export default function QdGFight() {
  const [isCheckedEj, setIsCheckedEj] = useState(false);
  const [diceFight1, setDiceFight1] = UsePersistedState("diceFight1", 0);
  const [diceFight2, setDiceFight2] = UsePersistedState("dice2", 0);
  const [pdvCurrent, setPdvCurrent] = UsePersistedState("current-pdv", "");
  const [xpFight, setXpFight] = UsePersistedState("xp-fight", 0);
  const [enemyPdv, setEnemyPdv] = UsePersistedState("enemy-pdv", 1);
  const [enemyDice, setEnemyDice] = UsePersistedState("enemy-dice", 6);
  // const [resultPip, setResultPip] = UsePersistedState("result-pip", 0);
  // const [resultEnemy, setResultEnemy] = UsePersistedState("result-enemy", 0);
  const [orderFighter, setOrderFighter] = UsePersistedState("order-fighter", [
    "",
  ]);
  const [turnFighter, setTurnFighter] = UsePersistedState("turn-fighter", "");
  const [messageFight, setMessageFight] = UsePersistedState(
    "message-fight",
    ""
  );
  const [resultDiceFight, setResultDiceFight] = UsePersistedState(
    "result-dice-fight",
    0
  );
  const handleFightStart = () => {
    const Pip =
      Math.floor(Math.random() * (6 - 1 + 1)) +
      0 +
      (Math.floor(Math.random() * (6 - 1 + 1)) + 1);
    // setResultPip(Pip);
    const Enemy =
      Math.floor(Math.random() * (6 - 1 + 1)) +
      0 +
      (Math.floor(Math.random() * (6 - 1 + 1)) + 1);
    // setResultEnemy(Enemy);
    if (Pip >= Enemy) {
      setOrderFighter(["pip", "enemy"]);
      setTurnFighter("pip");
      setMessageFight("Pip frappe en 1er !");
    } else {
      setOrderFighter(["enemy", "pip"]);
      setTurnFighter("enemy");
      setMessageFight("Adversaire frappe en 1er !");
    }
  };
  const handleCheck = (e) => {
    setIsCheckedEj(e.target.checked);
    console.log(e.target.checked);
  };
  function turnFight(fighter) {
    const diceOne = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    const diceTwo = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    const resultDice = diceOne + diceTwo;
    setDiceFight1(diceOne);
    setDiceFight2(diceTwo);
    setResultDiceFight(resultDice);
    if (fighter === "pip") {
      if (isCheckedEj) {
        if (resultDice > 4) {
          setMessageFight(
            "Pip touche sont adversaire ! Modifier les Pdv de L'Adversaire en fonction des instructions."
          );
        } else {
          setMessageFight("Pip frappe dans le vide et loupe son Adversaire !");
        }
        setTurnFighter("enemy");
      } else {
        if (resultDice > 6) {
          setMessageFight(
            "Pip touche sont adversaire ! Modifier les Pdv de L'Adversaire en fonction des instructions."
          );
        } else
          setMessageFight("Pip frappe dans le vide et loupe son Adversaire !");
        setTurnFighter("enemy");
      }
    } else {
      if (resultDice >= enemyDice) {
        setMessageFight(
          "Adversaire touche Pip ! Modifier les Pdv de Pip en fonction des instructions ."
        );
      } else setMessageFight("l'adversaire frappe dans le vide et loupe Pip !");
      setTurnFighter("pip");
    }
  }
  const handleUp = (getter, setter) => {
    setter(getter + 1);
  };
  const handleDown = (getter, setter) => {
    setter(getter - 1);
  };
  useEffect(() => {
    if (pdvCurrent <= 0) {
      setMessageFight("Pip est Mort !");
      setOrderFighter([""]);
    } else if (enemyPdv <= 0) {
      setMessageFight("Adversaire est Mort !");
      setXpFight(xpFight + 1);
      setOrderFighter([""]);
      setEnemyPdv(1);
    }
  }, [pdvCurrent, enemyPdv]);

  return (
    <>
      <div className="qdg-life-fighter">
        <div className="qdg-life-fighter-box">
          <label htmlFor="life-perso">Pv de Pip :</label>
          <input
            type="number"
            name="life-perso"
            id="life-perso"
            value={pdvCurrent}
            onChange={handleInputChange(setPdvCurrent, "number")}
          />
          <p
            className="up-life"
            onClick={() => handleUp(pdvCurrent, setPdvCurrent)}
          >
            +
          </p>
          <p
            className="down-life"
            onClick={() => handleDown(pdvCurrent, setPdvCurrent)}
          >
            -
          </p>
        </div>
        <div className="qdg-pip-select">
          <label htmlFor="sword">Combat avec EJ</label>
          <input
            type="checkbox"
            name="sword"
            id="sword"
            onChange={handleCheck}
          />
        </div>
      </div>
      <div className="qdg-life-fighter">
        <div className="qdg-life-fighter-box">
          <label htmlFor="life-ennemy">Pv ennemi :</label>
          <input
            type="number"
            name="life-ennemy"
            className="qdg-input-life"
            id="life-ennemy"
            value={enemyPdv}
            onChange={handleInputChange(setEnemyPdv, "number")}
          />
          <p
            className="up-life"
            onClick={() => handleUp(enemyPdv, setEnemyPdv)}
          >
            +
          </p>
          <p
            className="down-life"
            onClick={() => handleDown(enemyPdv, setEnemyPdv)}
          >
            -
          </p>
        </div>
        <div className="qdg-life-fighter-box">
          <label htmlFor="enemy-dice">touche ennemi ?</label>
          <input
            type="number"
            name="enemy-dice"
            className="qdg-input-life"
            id="enemy-dice"
            value={enemyDice}
            onChange={handleInputChange(setEnemyDice, "number")}
          />
        </div>
      </div>

      {orderFighter[0] === "" && (
        <>
          <Button className={"button-fight"} onClick={handleFightStart}>
            Qui commence ?
          </Button>
          {/* <div className="qdg-dice-box">
            <div className="qdg-dice" id="dice-1">
              <p className="qdg-dice-result">{resultPip}</p>
            </div>
            <div className="qdg-dice" id="dice-2">
              <p className="qdg-dice-result">{resultEnemy}</p>
            </div>
          </div> */}
        </>
      )}
      {orderFighter[0] != "" && (
        <>
          <Button
            className={"button-fight"}
            onClick={() => {
              turnFight(turnFighter);
            }}
          >
            Assaut
          </Button>
          <div className="qdg-dice-box">
            <div className="qdg-dice" id="dice-1">
              <p className="qdg-dice-result">{diceFight1}</p>
            </div>
            <div className="qdg-dice" id="dice-2">
              <p className="qdg-dice-result">{diceFight2}</p>
            </div>
          </div>
        </>
      )}
      <p className="qdg-result qdg-result-title">
        Résultat de Combat : <span>{resultDiceFight}</span>
      </p>
      <div className="qdg-result-fight">
        <p className="qdg-result">{messageFight}</p>
      </div>
    </>
  );
}
