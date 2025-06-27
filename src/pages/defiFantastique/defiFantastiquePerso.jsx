export default function DfPerso() {
  return (
    <>
      <div className="df-stats">
        <div className="df-stats-list">
          <h3 className="df-title">Habileté </h3>
          <div className="df-stat">
            <label htmlFor="startAbility">départ : </label>
            <input type="number" name="startAbility" id="startAbility" />
            <label htmlFor="actutAbility">Actuel : </label>
            <input type="number" name="actutAbility" id="actutAbility" />
          </div>
        </div>
        <div className="df-stats-list">
          <h3 className="df-title">Endurance </h3>
          <div className="df-stat">
            <label htmlFor="startEndurance">départ : </label>
            <input type="number" name="startEndurance" id="startEndurance" />
            <label htmlFor="actutEndurance">Actuel : </label>
            <input type="number" name="actutEndurance" id="actutEndurance" />
          </div>
        </div>
        <div className="df-stats-list">
          <h3 className="df-title">Chance </h3>
          <div className="df-stat">
            <label htmlFor="startChance">départ : </label>
            <input type="number" name="startChance" id="startChance" />
            <label htmlFor="actutChance">Actuel : </label>
            <input type="number" name="actutChance" id="actutChance" />
          </div>
        </div>
      </div>
      <div className="df-pockets">
        <div className="df-pocket">
          <label htmlFor="startChance">Or : </label>
          <input type="number" name="startChance" id="startChance" />
        </div>
        <div className="df-pocket">
          <label htmlFor="startChance">Bijoux : </label>
          <input type="number" name="startChance" id="startChance" />
        </div>
      </div>
      <div className="df-pockets">
        <div className="df-pocket">
          <label htmlFor="startChance">Potions </label>
          <input type="number" name="startChance" id="startChance" />
        </div>
        <div className="df-pocket">
          <label htmlFor="startChance">Provisions : </label>
          <input type="number" name="startChance" id="startChance" />
        </div>
      </div>

      <div className="df-equipment">
        <h5 className="df-equipment-title">Equipments Transportés :</h5>
        <ul>
          <li>
            <input className="df-list" type="text" name="kai-1" id="" />
          </li>
          <li>
            <input className="df-list" type="text" name="kai-2" id="" />
          </li>
          <li>
            <input className="df-list" type="text" name="kai-3" id="" />
          </li>
          <li>
            <input className="df-list" type="text" name="kai-4" id="" />
          </li>
          <li>
            <input className="df-list" type="text" name="kai-5" id="" />
          </li>
          <li>
            <input className="df-list" type="text" name="kai-6" id="" />
          </li>
          <li>
            <input className="df-list" type="text" name="kai-1" id="" />
          </li>
          <li>
            <input className="df-list" type="text" name="kai-2" id="" />
          </li>
        </ul>
      </div>
    </>
  );
}
