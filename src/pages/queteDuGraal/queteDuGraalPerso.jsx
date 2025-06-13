import React from "react";
import { UsePersistedState } from "../../hooks/usePersistedState";
import LsNav from "../../components/NavAdventure/LsNAv";

export default function QdGPerso() {
  return (
    <>
      <div className="stats">
        <div className="stat">
          <label htmlFor="StartLife">Pts de Vie Départ</label>
          <input type="number" name="StartLife" id="StartLife" />
        </div>
        <div className="stat">
          <label htmlFor="life">Pts de vie Actuelle</label>
          <input type="number" name="life" id="life" />
        </div>
        <div className="stat">
          <label htmlFor="experience">Expérience de combat</label>
          <input type="number" name="experience" id="experience" />
        </div>
      </div>
      <div className="equipment">
        <h5 className="equipment-title">Equipments Transportés :</h5>
        <textarea name="specialObject" id="specialObject" rows="25"></textarea>
      </div>
    </>
  );
}
