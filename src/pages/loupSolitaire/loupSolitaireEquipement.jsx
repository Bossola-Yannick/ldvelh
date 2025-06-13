import React from "react";
import { UsePersistedState } from "../../hooks/usePersistedState";

export default function LsEquipment() {
  return (
    <>
      <div className="ls-arme">
        <div className="ls-arme">
          <label htmlFor="arme1">Arme 1</label>
          <input type="number" name="arme1" id="arme1" />
        </div>
        <div className="ls-arme">
          <label htmlFor="arme2">Arme 2</label>
          <input type="number" name="arme2" id="arme2" />
        </div>
      </div>
      <div className="ls-bag">
        <h5 className="ls-bag">Sac à Dos</h5>
        <textarea name="specialObject" id="specialObject" rows="15"></textarea>
      </div>
      <div className="ls-special-bag">
        <h5 className="ls-bag">Objets Spéciaux</h5>
        <textarea name="specialObject" id="specialObject" rows="10"></textarea>
      </div>
    </>
  );
}
