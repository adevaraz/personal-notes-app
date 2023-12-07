import NoteItem from "../NoteItem/NoteItem";
import SearchInput from "../SearchInput/SearchInput";
import "./NoteList.css"

function NoteList({ notes, onDelete, onSearch, onChangeArchive }) {
  return (
    <div>
      <SearchInput onSearch={onSearch} />
      {
        notes.length > 0
          ?
          <div className="note-list">
          {
            notes.map((note) => (
              <NoteItem
                key={note.id}
                id={note.id}
                title={note.title}
                date={note.createdAt}
                body={note.body}
                archived={note.archived}
                onDelete={onDelete}
                onChangeArchive={onChangeArchive}
              />
            ))
          }
        </div>
        : <p className="empty-note text-center">Whoops! Looks like you have not added any notes yet.</p>
      }
    </div>
  )
}

export default NoteList;