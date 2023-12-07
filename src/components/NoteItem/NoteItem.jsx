import { getRandomColor } from "../../utils";
import "./NoteItem.css"
import NoteItemBody from "./NoteItemBody/NoteItemBody";
import NoteItemButton from "./NoteItemButton/NoteItemButton";

function NoteItem({ id, title, date, body, archived, onDelete, onChangeArchive }) {
  return (
    <div className="note-item" style={{ backgroundColor: getRandomColor(id) }}>
      <NoteItemBody
        title={title}
        date={date}
        body={body}
      />
      <NoteItemButton
        id={id}
        archived={archived}
        onChangeArchive={onChangeArchive}
        onDelete={onDelete}
      />
    </div>
  )
}

export default NoteItem;