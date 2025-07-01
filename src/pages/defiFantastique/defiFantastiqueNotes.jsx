import { UsePersistedState } from "../../hooks/usePersistedState";
import { handleInputChange } from "../../utils/handleInputChange";
export default function DfNotes() {
  const [chapter, setChapter] = UsePersistedState("df-chapter", 0);
  const [notes, setNotes] = UsePersistedState("df-notes", [""]);
  const [titleBook, setTitleBook] = UsePersistedState("df-title-book", "");
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
      <div className="df-book">
        <label htmlFor="title-book">Titre du livre : </label>
        <input
          type="text"
          name="title-book"
          id="title-book"
          value={titleBook}
          onChange={handleInputChange(setTitleBook, "text")}
        />
      </div>
      <div className="df-chapter">
        <label htmlFor="chapter">Chapitre en cours :</label>
        <input
          type="number"
          name="chapter"
          id="chapter"
          value={chapter}
          onChange={handleInputChange(setChapter, "number")}
        />
      </div>
      <div className="df-notes">
        <h5 className="df-notes-title">Notes :</h5>
        <ul>
          {notes.map((note, i) => (
            <li key={i}>
              <input
                className="df-list"
                type="text"
                name={`note-${i}`}
                value={note}
                onChange={handleNoteChange(i)}
              />
              <span className="df-delete-note" onClick={() => deleteNote(i)}>
                X
              </span>
            </li>
          ))}
        </ul>
        <button type="button" onClick={addNote} className="df-note-button">
          Ajouter une note
        </button>
      </div>
    </>
  );
}
