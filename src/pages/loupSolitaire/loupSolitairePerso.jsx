import { UsePersistedState } from "../../hooks/usePersistedState";
import { handleInputChange } from "../../utils/handleInputChange";

export default function LsPerso() {
  const [ability, setAbility] = UsePersistedState("ls-ability", 0);
  const [endurance, setEndurance] = UsePersistedState("ls-endurance", 0);

  // mise en place de la liste des disciplines kaï
  const kaiDiscs = Array.from({ length: 6 }, (_, i) =>
    UsePersistedState(`ls-kai${i + 1}`, "***")
  );

  // mise en place de sdiscipline kaï supplémentaire
  const kaiPlusDiscs = Array.from({ length: 6 }, (_, i) =>
    UsePersistedState(`ls-kai-plus${i + 1}`, "***")
  );

  // fonstion qui permet le rendu des listes de discipline
  const renderDisciplines = (title, items, baseName) => (
    <div className="ls-discipline">
      <h5 className="ls-title">{title}</h5>
      <ul>
        {items.map(([value, setter], index) => (
          <li key={`${baseName}-${index}`}>
            <input
              className="ls-list"
              type="text"
              name={`${baseName}-${index + 1}`}
              value={value}
              onChange={handleInputChange(setter, "text")}
            />
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <>
      <div className="ls-stats">
        <div className="ls-stat">
          <label htmlFor="ability">Habilité</label>
          <input
            type="number"
            name="ability"
            id="ability"
            value={ability}
            onChange={handleInputChange(setAbility, "number")}
          />
        </div>
        <div className="ls-stat">
          <label htmlFor="endurance">Endurance</label>
          <input
            type="number"
            name="endurance"
            id="endurance"
            value={endurance}
            onChange={handleInputChange(setEndurance, "number")}
          />
        </div>
      </div>

      {renderDisciplines("Discipline Kaï", kaiDiscs, "kai")}
      {renderDisciplines("Discipline Kaï Sup", kaiPlusDiscs, "kai-sup")}
    </>
  );
}
