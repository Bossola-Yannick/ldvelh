import React from "react";

export default function LsNotes() {
  return (
    <>
      <label htmlFor="chapter"></label>
      <input type="number" name="chapter" id="chapter" />
      <div className="ls-notes">
        <h5 className="ls-notes-title">Notes :</h5>
        <textarea name="specialObject" id="specialObject" rows="25"></textarea>
      </div>
    </>
  );
}
