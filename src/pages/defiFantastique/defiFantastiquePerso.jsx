import { UsePersistedState } from "../../hooks/usePersistedState";
import { handleInputChange } from "../../utils/handleInputChange";

export default function DfPerso() {
  const [dfStartAbility, setDfStartAbility] = UsePersistedState(
    "df-start-ability",
    ""
  );
  const [dfCurrentAbility, setDfCurrentAbility] = UsePersistedState(
    "df-current-ability",
    ""
  );
  const [dfStartEndurance, setDfStartEndurance] = UsePersistedState(
    "df-start-endurance",
    ""
  );
  const [dfCurrentEndurance, setDfCurrentEndurance] = UsePersistedState(
    "df-current-endurance",
    ""
  );
  const [dfStartChance, setDfStartChance] = UsePersistedState(
    "df-start-chance",
    ""
  );
  const [dfCurrentChance, setDfCurrentChance] = UsePersistedState(
    "df-current-chance",
    ""
  );
  const [equipments, setEquipments] = UsePersistedState("df-equipment", [""]);

  const handleEquipmentChange = (index) => (e) => {
    const newEquips = [...equipments];
    newEquips[index] = e.target.value;
    setEquipments(newEquips);
  };
  const addEquip = () => {
    setEquipments([...equipments, ""]);
  };
  const deleteEquips = (index) => {
    setEquipments(equipments.filter((_, i) => i !== index));
  };

  return (
    <section>
      <h3 className="df-title">Ma Fiche Perso</h3>
      <article className="df-stats">
        <section className="df-stats-list">
          <h3 className="df-subtitle">Habileté </h3>
          <article className="df-stat">
            <label htmlFor="startAbility">départ : </label>
            <input
              type="number"
              name="startAbility"
              id="startAbility"
              value={dfStartAbility}
              onChange={handleInputChange(setDfStartAbility, "number")}
            />
            <label htmlFor="actutAbility">Actuel : </label>
            <input
              type="number"
              name="actutAbility"
              id="actutAbility"
              value={dfCurrentAbility}
              onChange={handleInputChange(setDfCurrentAbility, "number")}
            />
          </article>
        </section>
        <section className="df-stats-list">
          <h3 className="df-subtitle">Endurance </h3>
          <article className="df-stat">
            <label htmlFor="startEndurance">départ : </label>
            <input
              type="number"
              name="startEndurance"
              id="startEndurance"
              value={dfStartEndurance}
              onChange={handleInputChange(setDfStartEndurance, "number")}
            />
            <label htmlFor="actutEndurance">Actuel : </label>
            <input
              type="number"
              name="actutEndurance"
              id="actutEndurance"
              value={dfCurrentEndurance}
              onChange={handleInputChange(setDfCurrentEndurance, "number")}
            />
          </article>
        </section>
        <section className="df-stats-list">
          <h3 className="df-subtitle">Chance </h3>
          <article className="df-stat">
            <label htmlFor="startChance">départ : </label>
            <input
              type="number"
              name="startChance"
              id="startChance"
              value={dfStartChance}
              onChange={handleInputChange(setDfStartChance, "number")}
            />
            <label htmlFor="actutChance">Actuel : </label>
            <input
              type="number"
              name="actutChance"
              id="actutChance"
              value={dfCurrentChance}
              onChange={handleInputChange(setDfCurrentChance, "number")}
            />
          </article>
        </section>
      </article>
      <article className="df-pockets">
        <article className="df-pocket">
          <label htmlFor="startChance">Or : </label>
          <input type="number" name="startChance" id="startChance" />
        </article>
        <article className="df-pocket">
          <label htmlFor="startChance">Bijoux : </label>
          <input type="number" name="startChance" id="startChance" />
        </article>
      </article>
      <article className="df-pockets">
        <article className="df-pocket">
          <label htmlFor="startChance">Potions </label>
          <input type="number" name="startChance" id="startChance" />
        </article>
        <article className="df-pocket">
          <label htmlFor="startChance">Provisions : </label>
          <input type="number" name="startChance" id="startChance" />
        </article>
      </article>

      <section className="df-equipment">
        <h5 className="df-equipment-title">Equipments Transportés :</h5>
        <ul>
          {equipments.map((equipment, i) => (
            <li key={i}>
              <input
                className="df-list"
                type="text"
                name={`equipment-${i}`}
                value={equipment}
                onChange={handleEquipmentChange(i)}
              />
              <span
                className="df-delete-equipment"
                onClick={() => deleteEquips(i)}
              >
                X
              </span>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={addEquip}
          className="df-equipment-button"
        >
          Ajouter un équipement
        </button>
      </section>
    </section>
  );
}
