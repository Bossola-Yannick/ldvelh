import { UsePersistedState } from "../../hooks/usePersistedState";
import { handleInputChange } from "../../utils/handleInputChange";
import { useEffect } from "react";

export default function LsPerso() {
  const [lsAbility, setLsAbility] = UsePersistedState("ls-ability", "");
  const [endurance, setEndurance] = UsePersistedState("ls-endurance", "");
  const [chapter, setChapter] = UsePersistedState("ls-chapter", 0);
  const [adventureId] = UsePersistedState("id-adventure-select", "");
  const [notes, setNotes] = UsePersistedState("ls-notes", [""]);
  const [titleBook, setTitleBook] = UsePersistedState("ls-book", "");
  const [weapon1, setWeapon1] = UsePersistedState("weapon-one", "***");
  const [weapon2, setWeapon2] = UsePersistedState("weapon-two", "***");
  const [bag, setBag] = UsePersistedState("ls-bag", []);

  // eslint-disable-next-line
  const [myAdventure, setMyAdventure] = UsePersistedState(
    "user-current-adventures",
    []
  );
  useEffect(() => {
    const adventureList = async () => {
      try {
        const idAdventure = adventureId;
        const response = await fetch(
          `http://localhost/api-ldvelh/api/lonewolf/getadventurebyid?adventureId=${idAdventure}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (!response.ok) {
          throw new Error("Erreur HTTP : " + response.status);
        }

        const data = await response.json();
        console.log("Résultat des aventures :", data);
        setMyAdventure(data);
        setLsAbility(data["lone_wolf"].ability);
        setEndurance(data["lone_wolf"].endurance);
        setChapter(data["lone_wolf"].chapter);
        setNotes(data["lone_wolf"].note);
        setBag(data["lone_wolf"].bag);
        setTitleBook(data["lone_wolf"].title);
        setWeapon1(data["lone_wolf"].weapon1);
        setWeapon2(data["lone_wolf"].weapon2);
      } catch (error) {
        console.error("Erreur lors de la récupération des aventures :", error);
      }
    };
    adventureList();
    // eslint-disable-next-line
  }, [adventureId]);
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
