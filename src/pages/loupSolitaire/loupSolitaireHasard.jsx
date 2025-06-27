import Button from "../../components/Button/button";
import { UsePersistedState } from "../../hooks/usePersistedState";
import randomNumber from "../../utils/randomNumberLs";
export default function LsHasard() {
  const [number, setNumber] = UsePersistedState("random-number", 0);

  return (
    <div className="ls-hasardMain">
      <h3 className="ls-hasard-title">Prêt à faire confiance au hasard ?</h3>
      <Button
        className={"ls-hasard-button"}
        onClick={() => {
          randomNumber(0, 9, setNumber);
        }}
      >
        Hasard Number
      </Button>
      <p className="ls-hasard-score">{number}</p>
    </div>
  );
}
