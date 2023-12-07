import React from "react";
import ArchiveNoteList from "../NoteList/ArchivedNoteList/ArchivedNoteList";
import ActiveNoteList from "../NoteList/ActiveNoteList/ActiveNoteList";
import "./NoteContent.css";

class NoteContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isArchived: false,
    }

    this.onChangeNoteView = this.onChangeNoteView.bind(this);
  }

  onChangeNoteView() {
    this.setState((prevState) => {
      return {
        isArchived: !prevState.isArchived,
      }
    })
  }

  render() {
    return (
      <div id="note-content" style={{ width: 'inherit' }}>
        {
          this.state.isArchived
            ?
              <div>
                <div className="note-list-header">
                  <h2>Archived Notes</h2>
                  <span className="change-note-view-button"><button onClick={() => this.onChangeNoteView()}>Back</button></span>
                </div>
                <ArchiveNoteList
                  notes={this.props.archivedNotes}
                  onDelete={this.props.onDelete}
                  onSearch={this.props.onSearch}
                  onChangeArchive={this.props.onChangeArchive}
                />
              </div>
            : 
              <div>
                <div className="note-list-header">
                  <h2>Notes</h2>
                  <span className="change-note-view-button"><button onClick={() => this.onChangeNoteView()}>View Archived</button></span>
                </div>
                <ActiveNoteList
                  notes={this.props.notes}
                  onDelete={this.props.onDelete}
                  onSearch={this.props.onSearch}
                  onChangeArchive={this.props.onChangeArchive}
                />
              </div>
        }
      </div>
    )
  }
}

export default NoteContent;