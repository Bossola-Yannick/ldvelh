export default function QdGPerso() {
  return (
    <>
      <div className="qdg-stats">
        <div className="qdg-stat">
          <label className="qdg-title" htmlFor="StartLife">
            Pts de Vie Départ
          </label>
          <input type="number" name="StartLife" id="StartLife" />
        </div>
        <div className="qdg-stat">
          <label className="qdg-title" htmlFor="life">
            Pts de vie Actuelle
          </label>
          <input type="number" name="life" id="life" />
        </div>
        <div className="qdg-stat">
          <label className="qdg-title" htmlFor="experience">
            Expérience de combat
          </label>
          <input type="number" name="experience" id="experience" />
        </div>
      </div>
      <div className="qdg-equipment">
        <h5 className="qdg-title">Equipments Transportés :</h5>
        <ul>
          <li>
            <input className="qdg-list" type="text" name="kai-1" id="" />
          </li>
          <li>
            <input className="qdg-list" type="text" name="kai-2" id="" />
          </li>
          <li>
            <input className="qdg-list" type="text" name="kai-3" id="" />
          </li>
          <li>
            <input className="qdg-list" type="text" name="kai-4" id="" />
          </li>
          <li>
            <input className="qdg-list" type="text" name="kai-5" id="" />
          </li>
          <li>
            <input className="qdg-list" type="text" name="kai-6" id="" />
          </li>
          <li>
            <input className="qdg-list" type="text" name="kai-1" id="" />
          </li>
          <li>
            <input className="qdg-list" type="text" name="kai-2" id="" />
          </li>
          <li>
            <input className="qdg-list" type="text" name="kai-3" id="" />
          </li>
          <li>
            <input className="qdg-list" type="text" name="kai-4" id="" />
          </li>
          <li>
            <input className="qdg-list" type="text" name="kai-5" id="" />
          </li>
          <li>
            <input className="qdg-list" type="text" name="kai-6" id="" />
          </li>
          <li>
            <input className="qdg-list" type="text" name="kai-1" id="" />
          </li>
          <li>
            <input className="qdg-list" type="text" name="kai-2" id="" />
          </li>
          <li>
            <input className="qdg-list" type="text" name="kai-3" id="" />
          </li>
          <li>
            <input className="qdg-list" type="text" name="kai-4" id="" />
          </li>
          <li>
            <input className="qdg-list" type="text" name="kai-5" id="" />
          </li>
          <li>
            <input className="qdg-list" type="text" name="kai-6" id="" />
          </li>
        </ul>
      </div>
    </>
  );
}
