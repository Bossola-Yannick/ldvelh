import { UsePersistedState } from "../../hooks/usePersistedState";
import { handleInputChange } from "../../utils/handleInputChange";

export default function LsEquipment() {
  const [weapon1, setWeapon1] = UsePersistedState("weapon-one", "***");
  const [weapon2, setWeapon2] = UsePersistedState("weapon-two", "***");

  // mise en place du sac à dos
  const bagItem = Array.from({ length: 8 }, (_, i) =>
    UsePersistedState(`ls-bag-item${i + 1}`, "***")
  );

  // mise en place du sac d'objet spéciaux
  const specialBagItem = Array.from({ length: 12 }, (_, i) =>
    UsePersistedState(`ls-special-bag-item${i + 1}`, "***")
  );

  // fonction du rendu des sacs
  const renderBagItem = (title, items, baseName) => (
    <div className="ls-bag">
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
      <div className="ls-armes">
        <div className="ls-arme">
          <label htmlFor="arme1">Arme 1</label>
          <input
            type="text"
            name="arme1"
            id="arme1"
            value={weapon1}
            onChange={handleInputChange(setWeapon1, "text")}
          />
        </div>
        <div className="ls-arme">
          <label htmlFor="arme2">Arme 2</label>
          <input
            type="text"
            name="arme2"
            id="arme2"
            value={weapon2}
            onChange={handleInputChange(setWeapon2, "text")}
          />
        </div>
      </div>
      {renderBagItem("Sac à Dos", bagItem, "bag")}
      {renderBagItem("Objets Spéciaux", specialBagItem, "specialBag")}
    </>
  );
}
