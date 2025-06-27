import Button from "../../components/Button/button";

export default function QdGFight() {
  return (
    <>
      <div className="qdg-life-fighter">
        <div className="qdg-life-fighter-box">
          <label htmlFor="life-perso">Pv de Pip :</label>
          <input type="number" name="life-perso" id="life-perso" />
        </div>
        <div className="qdg-life-fighter-box">
          <label htmlFor="life-ennemy">Pv ennemi :</label>
          <input type="number" name="life-ennemy" id="life-ennemy" />
        </div>
      </div>
      <Button className={"button-fight"}>Combat</Button>
      <div className="qdg-dice-box">
        <div className="qdg-dice" id="dice-1">
          Dés
        </div>
        <div className="qdg-dice" id="dice-2">
          Dés
        </div>
      </div>
      <p className="qdg-result qdg-result-title">Résultat de Combat</p>
      <div className="qdg-result-fight">
        <p className="qdg-result">
          - <span className="qdg-perso">Pip </span>
          perd <span className="qdg-life-pts">5</span> pts de vie .
        </p>
        <p className="qdg-result">
          - Il lui reste <span className="qdg-has-life">12</span> pts de vie !
        </p>
      </div>
    </>
  );
}
