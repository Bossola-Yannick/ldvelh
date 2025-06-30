import { useEffect } from "react";
import { UsePersistedState } from "../../hooks/usePersistedState";
import { handleInputChange } from "../../utils/handleInputChange";

export default function QdGPerso() {
  const [equipments, setEquipments] = UsePersistedState("qdg-equipement", [""]);
  const [pdvStart, setPdvStart] = UsePersistedState("start-pdv", "");
  const [pdvCurrent, setPdvCurrent] = UsePersistedState("current-pdv", "");
  const [xpFight, setXpFight] = UsePersistedState("xp-fight", "");
  const [pdvPerm, setPdvPerm] = UsePersistedState("perm-pdvt", 0);
  // Gérer la modification d'une note
  const handleEquipChange = (index) => (e) => {
    const newEquips = [...equipments];
    newEquips[index] = e.target.value;
    setEquipments(newEquips);
  };
  // ajouter une nouvelle note
  const addEquipment = () => {
    setEquipments([...equipments, ""]);
  };
  // supprimer une note
  const deleteEquip = (index) => {
    setEquipments(equipments.filter((_, i) => i !== index));
  };
  useEffect(() => {
    if (xpFight >= 20) {
      const newPdvPerm = pdvPerm + 1;
      setPdvPerm(newPdvPerm);
      setXpFight(0);
    }
  }, [xpFight, pdvPerm, setPdvPerm, setXpFight]);
  return (
    <>
      <div className="qdg-stats">
        <div className="qdg-stat">
          <label className="qdg-title" htmlFor="StartLife">
            Pts de Vie Départ
          </label>
          <input
            type="number"
            name="StartLife"
            id="StartLife"
            value={pdvStart}
            onChange={handleInputChange(setPdvStart, "number")}
          />
        </div>
        <div className="qdg-stat">
          <label className="qdg-title" htmlFor="currentLife">
            Pts de vie Actuelle
          </label>
          <input
            type="number"
            name="currentLife"
            id="currentLife"
            value={pdvCurrent}
            onChange={handleInputChange(setPdvCurrent, "number")}
          />
        </div>
      </div>
      <div className="qdg-stats">
        <div className="qdg-stat">
          <label className="qdg-title" htmlFor="xpFight">
            Expérience de combat
          </label>
          <input
            type="number"
            name="xpFight"
            id="xpFight"
            value={xpFight}
            onChange={handleInputChange(setXpFight, "number")}
          />
        </div>
        <div className="qdg-stat">
          <label className="qdg-title" htmlFor="xpFight">
            Pts de Vie Permanents
          </label>
          <input
            type="number"
            name="xpFight"
            id="xpFight"
            value={pdvPerm}
            onChange={(handleInputChange(setPdvPerm), "number")}
          />
        </div>
      </div>
      <div className="qdg-equipment">
        <h5 className="qdg-equip-title">Equipments Transportés :</h5>
        <ul>
          {equipments.map((equip, i) => (
            <li key={i}>
              <input
                className="qdg-list"
                type="text"
                name={`equip-${i}`}
                value={equip}
                onChange={handleEquipChange(i)}
              />
              <span className="qdg-delete-equip" onClick={() => deleteEquip(i)}>
                X
              </span>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={addEquipment}
          className="qdg-note-button"
        >
          Ajouter un équipement
        </button>
      </div>
    </>
  );
}
