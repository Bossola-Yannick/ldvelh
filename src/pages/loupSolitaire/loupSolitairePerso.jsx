import React from "react";

export default function LsPerso() {
  return (
    <>
      <div className="ls-stats">
        <div className="ls-stat">
          <label htmlFor="ability">Habilité</label>
          <input type="number" name="ability" id="ability" />
        </div>
        <div className="ls-stat">
          <label htmlFor="endurance">Endurance</label>
          <input type="number" name="endurance" id="endurance" />
        </div>
      </div>
      <div className="ls-discipline">
        <h5 className="ls-title">Discipline Kaï</h5>
        <ul>
          <li>
            <input className="ls-list" type="text" name="kai-1" id="" />
          </li>
          <li>
            <input className="ls-list" type="text" name="kai-2" id="" />
          </li>
          <li>
            <input className="ls-list" type="text" name="kai-3" id="" />
          </li>
          <li>
            <input className="ls-list" type="text" name="kai-4" id="" />
          </li>
          <li>
            <input className="ls-list" type="text" name="kai-5" id="" />
          </li>
          <li>
            <input className="ls-list" type="text" name="kai-6" id="" />
          </li>
        </ul>
      </div>
      <div className="ls-discipline">
        <h5 className="ls-title">Discipline Kaï Sup</h5>
        <ul>
          <li>
            <input className="ls-list" type="text" name="kai-sup-1" id="" />
          </li>
          <li>
            <input className="ls-list" type="text" name="kai-sup-2" id="" />
          </li>
          <li>
            <input className="ls-list" type="text" name="kai-sup-3" id="" />
          </li>
          <li>
            <input className="ls-list" type="text" name="kai-sup-4" id="" />
          </li>
          <li>
            <input className="ls-list" type="text" name="kai-sup-5" id="" />
          </li>
          <li>
            <input className="ls-list" type="text" name="kai-sup-6" id="" />
          </li>
        </ul>
      </div>
    </>
  );
}
