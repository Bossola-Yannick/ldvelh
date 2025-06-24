import React from "react";

export default function LsEquipment() {
  return (
    <>
      <div className="ls-armes">
        <div className="ls-arme">
          <label htmlFor="arme1">Arme 1</label>
          <input type="text" name="arme1" id="arme1" />
          <div className="ls-maitrise">
            <label htmlFor="maitrise">Maitrise d'arme</label>
            <input type="checkbox" name="maitrise" id="maitrise-one" />
          </div>
        </div>
        <div className="ls-arme">
          <label htmlFor="arme2">Arme 2</label>
          <input type="text" name="arme2" id="arme2" />
          <div className="ls-maitrise">
            <label htmlFor="maitrise">Maitrise d'arme</label>
            <input type="checkbox" name="maitrise" id="maitrise-two" />
          </div>
        </div>
      </div>
      <div className="ls-bag">
        <h5 className="ls-title">Sac à Dos</h5>
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
          <li>
            <input className="ls-list" type="text" name="kai-1" id="" />
          </li>
          <li>
            <input className="ls-list" type="text" name="kai-2" id="" />
          </li>
        </ul>
      </div>
      <div className="ls-special-bag">
        <h5 className="ls-title">Objets Spéciaux</h5>
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
    </>
  );
}
