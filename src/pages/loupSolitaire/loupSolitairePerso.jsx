import React from "react";
import { UsePersistedState } from "../../hooks/usePersistedState";
import LsNav from "../../components/NavAdventure/LsNAv";

export default function LsPerso() {
  return (
    <>
      <div className="stats">
        <div className="stat">
          <label htmlFor="hability">Habilité</label>
          <input type="number" name="hability" id="hability" />
        </div>
        <div className="stat">
          <label htmlFor="endurance">Endurance</label>
          <input type="number" name="endurance" id="endurance" />
        </div>
      </div>
      <div className="discipline">
        <h5 className="discipline-title">Discipline Kaï</h5>
        <input className="discipline-list" type="text" name="" id="" />
        <input className="discipline-list" type="text" name="" id="" />
        <input className="discipline-list" type="text" name="" id="" />
        <input className="discipline-list" type="text" name="" id="" />
        <input className="discipline-list" type="text" name="" id="" />
        <input className="discipline-list" type="text" name="" id="" />
      </div>
      <div className="discipline-plus">
        <h5 className="discipline-title">Discipline Kaï Sup</h5>
        <input className="discipline-list" type="text" name="" id="" />
        <input className="discipline-list" type="text" name="" id="" />
        <input className="discipline-list" type="text" name="" id="" />
        <input className="discipline-list" type="text" name="" id="" />
        <input className="discipline-list" type="text" name="" id="" />
        <input className="discipline-list" type="text" name="" id="" />
      </div>
    </>
  );
}
