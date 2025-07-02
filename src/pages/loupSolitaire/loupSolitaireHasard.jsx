import Button from "../../components/Button/button";
import { UsePersistedState } from "../../hooks/usePersistedState";
import randomNumber from "../../utils/randomNumberLs";
export default function LsHasard() {
  const [number, setNumber] = UsePersistedState("random-number", 0);

  return (
    <section className="ls-hasardMain">
      <h3 className="df-title">Place au hasard !</h3>
      <Button
        className={"ls-hasard-button"}
        onClick={() => {
          randomNumber(0, 9, setNumber);
        }}
      >
        Hasard Number
      </Button>
      <p className="ls-hasard-score">{number}</p>
    </section>
  );
}
