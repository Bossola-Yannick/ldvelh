import React from "react";

export default function QdGNotes() {
  return (
    <>
      <label htmlFor="chapter"></label>
      <input type="number" name="chapter" id="chapter" />
      <div className="notes">
        <h5 className="notes-title">Notes :</h5>
        <textarea name="specialObject" id="specialObject" rows="25"></textarea>
      </div>
    </>
  );
}
