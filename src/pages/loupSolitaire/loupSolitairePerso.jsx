import { UsePersistedState } from "../../hooks/usePersistedState";
import { handleInputChange } from "../../utils/handleInputChange";

export default function LsPerso() {
  const [lsAbility, setLsAbility] = UsePersistedState("ls-ability", "");
  const [endurance, setEndurance] = UsePersistedState("ls-endurance", "");

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
    <section className="ls-discipline">
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
    </section>
  );
  return (
    <section>
      <h3 className="df-title">Ma Fiche Perso </h3>
      <article className="ls-stats">
        <article className="ls-stat">
          <label htmlFor="ability">Habilité</label>
          <input
            type="number"
            name="ability"
            id="ability"
            value={lsAbility}
            onChange={handleInputChange(setLsAbility, "number")}
          />
        </article>
        <article className="ls-stat">
          <label htmlFor="endurance">Endurance</label>
          <input
            type="number"
            name="endurance"
            id="endurance"
            value={endurance}
            onChange={handleInputChange(setEndurance, "number")}
          />
        </article>
      </article>

      {renderDisciplines("Discipline Kaï", kaiDiscs, "kai")}
      {renderDisciplines("Discipline Kaï Sup", kaiPlusDiscs, "kai-sup")}
    </section>
  );
}
