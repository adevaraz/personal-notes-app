import { showFormattedDate } from "../../../utils";
import "./NoteItemBody.css";

function NoteItemBody({ title, date, body }) {
  return (
    <div className="note-item-body">
      <h3 className="body-details">{title}</h3>
      <p className="body-details text-date">{showFormattedDate(date)}</p>
      <p className="body-details body-text">{body}</p>
    </div>
  )
}

export default NoteItemBody;