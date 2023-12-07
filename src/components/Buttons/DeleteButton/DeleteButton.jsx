import Trash from '../../../assets/img/trash.png'

function DeleteButton({ id, onDelete }) {
  return (
    <div>
      <button id="delete-button" onClick={() => onDelete(id)}>
        <img src={Trash} width={20}/>
      </button>
    </div>
  )
}

export default DeleteButton;