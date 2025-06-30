import Button from "../../components/Button/button";
import { UsePersistedState } from "../../hooks/usePersistedState";
import randomNumber from "../../utils/randomNumberLs";
export default function QdGHasard() {
  const [dice1, setDice1] = UsePersistedState("dice1", 0);
  const [dice2, setDice2] = UsePersistedState("dice2", 0);

  return (
    <div className="qdg-hasardMain">
      <h3 className="qdg-hasard-title">Prêt à faire confiance au hasard ?</h3>
      <Button
        className={"qdg-hasard-button"}
        onClick={() => {
          randomNumber(1, 6, setDice1);
          randomNumber(1, 6, setDice2);
        }}
      >
        Hasard Number
      </Button>
      <div className="qdg-dice-box">
        <p className="qdg-hasard-score">{dice1}</p>
        <p className="qdg-hasard-score">{dice2}</p>
      </div>
      <p className="qdg-message">
        Si vous devez lancer 1 seul dé prendre le résultat du 1er dé !
      </p>
    </div>
  );
}
