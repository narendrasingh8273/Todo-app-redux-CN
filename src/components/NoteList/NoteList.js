import { useDispatch, useSelector } from "react-redux";
import "./NoteList.css";
import { deleteNotes } from "../../redux/actions/notesAction";

function NoteList() {
  const notes = useSelector((state) => state.notesReducer.notes);
  const disptach = useDispatch();
  return (
    <div className="container">
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button
              className="btn btn-danger"
              onClick={() => disptach(deleteNotes(index))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
