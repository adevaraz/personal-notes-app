import Undo from '../../../assets/img/undo.png';

function UnarchiveButton({ id, onUndoArchive }) {
  return (
    <div>
      <button onClick={() => onUndoArchive(id)}>
        <img src={Undo} width={18}/>
      </button>
    </div>
  )
}

export default UnarchiveButton;