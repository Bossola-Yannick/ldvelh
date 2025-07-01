import { UsePersistedState } from "../../hooks/usePersistedState";
import { handleInputChange } from "../../utils/handleInputChange";
export default function QdGNotes() {
  const [chapter, setChapter] = UsePersistedState("qdg-chapter", 0);
  const [notes, setNotes] = UsePersistedState("qdg-notes", [""]);
  const [titleBook, setTitleBook] = UsePersistedState("qdg-title-book", "");
  // Gérer la modification d'une note
  const handleNoteChange = (index) => (e) => {
    const newNotes = [...notes];
    newNotes[index] = e.target.value;
    setNotes(newNotes);
  };
  // ajouter une nouvelle note
  const addNote = () => {
    setNotes([...notes, ""]);
  };
  // supprimer une note
  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };
  return (
    <>
      <div className="qdg-book">
        <label htmlFor="title-book">Titre du livre : </label>
        <input
          type="text"
          name="title-book"
          id="title-book"
          value={titleBook}
          onChange={handleInputChange(setTitleBook, "text")}
        />
      </div>
      <div className="qdg-chapter">
        <label htmlFor="chapter">Chapitre en cours :</label>
        <input
          type="number"
          name="chapter"
          id="chapter"
          value={chapter}
          onChange={handleInputChange(setChapter, "number")}
        />
      </div>
      <div className="qdg-notes">
        <h5 className="qdg-title">Notes :</h5>
        <ul>
          {notes.map((note, i) => (
            <li key={i}>
              <input
                className="qdg-list"
                type="text"
                name={`note-${i}`}
                value={note}
                onChange={handleNoteChange(i)}
              />
              <span className="qdg-delete-note" onClick={() => deleteNote(i)}>
                X
              </span>
            </li>
          ))}
        </ul>
        <button type="button" onClick={addNote} className="qdg-note-button">
          Ajouter une note
        </button>
      </div>
    </>
  );
}
