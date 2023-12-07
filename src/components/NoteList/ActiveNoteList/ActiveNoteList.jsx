import NoteList from '../NoteList';

function ActiveNoteList({ notes, onDelete, onSearch, onChangeArchive }) {
  return (
    <NoteList
      notes={notes}
      onDelete={onDelete}
      onSearch={onSearch}
      onChangeArchive={onChangeArchive}
    />
  )
}

export default ActiveNoteList;