import NoteList from '../NoteList';

function ArchiveNoteList({ notes, onDelete, onSearch, onChangeArchive }) {
  return (
    <NoteList
      notes={notes}
      onDelete={onDelete}
      onSearch={onSearch}
      onChangeArchive={onChangeArchive}
    />
  )
}

export default ArchiveNoteList;