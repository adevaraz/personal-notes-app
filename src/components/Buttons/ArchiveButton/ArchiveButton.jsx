import Archive from '../../../assets/img/archive.png'

function ArchiveButton({ id, onArchive }) {
  return (
    <div>
      <button id="archive-button" onClick={() => onArchive(id)}>
        <img src={Archive} width={19} />
      </button>
    </div>
  )
}

export default ArchiveButton;