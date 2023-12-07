import ArchiveButton from "../../Buttons/ArchiveButton/ArchiveButton";
import DeleteButton from "../../Buttons/DeleteButton/DeleteButton";
import UnarchiveButton from "../../Buttons/UnarchiveButton/UnarchiveButton";

function NoteItemButton({ id, archived, onChangeArchive, onDelete }) {
  return (
    <div className="note-item-button">
      {
        archived 
          ? <UnarchiveButton id={id} onUndoArchive={onChangeArchive} />
          : <ArchiveButton id={id} onArchive={onChangeArchive} />
      }
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  )
}

export default NoteItemButton;