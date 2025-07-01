import Button from "../../components/Button/button";
import { UsePersistedState } from "../../hooks/usePersistedState";
import randomNumber from "../../utils/randomNumberLs";
import { useState } from "react";
import handleCheck from "../../utils/handleCheck";
export default function QdGHasard() {
  const [dice1, setDice1] = UsePersistedState("dice1", 0);
  const [dice2, setDice2] = UsePersistedState("dice2", 0);
  const [checkOneDice, setCheckOneDice] = useState(false);

  return (
    <div className="qdg-hasard-main">
      <h3 className="qdg-hasard-title">Prêt à faire confiance au hasard ?</h3>
      <Button
        className={"qdg-hasard-button"}
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
      <article className="qdg-dice-box">
        {checkOneDice ? (
          <p className="qdg-hasard-score">{dice1}</p>
        ) : (
          <>
            <p className="qdg-hasard-score">{dice1}</p>
            <p className="qdg-hasard-score">{dice2}</p>
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
