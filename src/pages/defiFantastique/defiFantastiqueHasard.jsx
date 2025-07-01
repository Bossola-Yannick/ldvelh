import Button from "../../components/Button/button";
import { UsePersistedState } from "../../hooks/usePersistedState";
import randomNumber from "../../utils/randomNumberLs";
import handleCheck from "../../utils/handleCheck";
import { useState } from "react";
export default function DfHasard() {
  const [dice1, setDice1] = UsePersistedState("dice1", 0);
  const [dice2, setDice2] = UsePersistedState("dice2", 0);
  const [checkOneDice, setCheckOneDice] = useState(false);

  return (
    <div className="df-hasardMain">
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
    </div>
  );
}
