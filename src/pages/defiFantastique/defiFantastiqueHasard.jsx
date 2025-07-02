import Button from "../../components/Button/button";
import { UsePersistedState } from "../../hooks/usePersistedState";
import randomNumber from "../../utils/randomNumberLs";
import handleCheck from "../../utils/handleCheck";
import diceRandom from "../../utils/diceRandom";
import { useState } from "react";
export default function DfHasard() {
  const [dice1, setDice1] = UsePersistedState("dice1", 0);
  const [dice2, setDice2] = UsePersistedState("dice2", 0);
  const [checkOneDice, setCheckOneDice] = useState(false);
  const [dfCurrentChance, setDfCurrentChance] = UsePersistedState(
    "df-current-chance",
    0
  );
  const [dfMessage, setDfMessage] = useState("");

  function tryLuck() {
    if (dfCurrentChance > 0) {
      const luck = diceRandom(1, 6) + diceRandom(1, 6);
      console.log(luck);
      if (luck <= dfCurrentChance) {
        setDfMessage("La chance vous sourit !");
      } else {
        setDfMessage("Malchance, subissez les conséquences !");
      }
      setDfCurrentChance(dfCurrentChance - 1);
    } else setDfMessage("Vous avez épuisé votre chance !");
  }

  return (
    <>
      <section className="df-hasardMain">
        <h3 className="df-hasard-title">Prêt à faire confiance au hasard ?</h3>
        <Button
          className={"df-hasard-button"}
          onClick={() => {
            if (checkOneDice) {
              randomNumber(1, 6, setDice1);
            } else {
              randomNumber(1, 6, setDice1);
              randomNumber(1, 6, setDice2);
            }
          }}
        >
          Hasard Number
        </Button>
        <article className="df-dice-box">
          {checkOneDice ? (
            <p className="df-hasard-score">{dice1}</p>
          ) : (
            <>
              <p className="df-hasard-score">{dice1}</p>
              <p className="df-hasard-score">{dice2}</p>
            </>
          )}
        </article>
        <article className="qdg-dice-choice">
          <label htmlFor="one-dice" className="df-message">
            Si vous devez lancer 1 seul dé cochez la case
          </label>
          <input
            type="checkbox"
            name="one-dice"
            id="one-dice"
            checked={checkOneDice}
            onChange={(e) => {
              handleCheck(setCheckOneDice, e);
            }}
          />
        </article>
      </section>
      <section className="df-chance-box">
        <h3>Pts de Chance restant</h3>
        <div className="df-chance-points">
          <p className="df-chance-left">{dfCurrentChance}</p>
          {/* {dfCurrentChance > 0 && ( */}
          <Button className={"df-button chance"} onClick={tryLuck}>
            Tenter la Chance
          </Button>
          {/* )} */}
        </div>
        <p className="df-luck-message">{dfMessage}</p>
      </section>
    </>
  );
}
