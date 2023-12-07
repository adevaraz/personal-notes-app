import React from "react";
import NoteContent from "./NoteContent/NoteContent";
import NoteInput from "./NoteInput/NoteInput";
import { getInitialData } from "../utils";
import "./NoteApp.css"

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      keyword: '',
    }

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    this.ondChangeArchivedNoteHandler = this.ondChangeArchivedNoteHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
            archived: false,
          }
        ]
      }
    });
  }

  onDeleteNoteHandler(id) {
    this.setState(() => {
      return {
        notes: this.state.notes.filter(note => note.id !== id)
      }
    })
  }

  onSearchNoteHandler({ keyword }) {
    this.setState(() => {
      return {
        keyword: keyword,
      }
    })
  }

  ondChangeArchivedNoteHandler(id) {
    const note = this.state.notes.find(note => note.id === id);
    const index = this.state.notes.indexOf(note);

    note.archived = !note.archived;

    this.setState((prevState) => {
      prevState.notes[index] = note;

      return {
        notes: prevState.notes
      }
    })
  }

  render() {
    return (
      <div className="note-app">
        <header>
          <h2 id="note-header" className="text-center">NoteX - Your Personal Notes App</h2>
        </header>
        <div id="content">
          <NoteInput addNote={this.onAddNoteHandler} />
          <NoteContent
            notes={this.state.notes.filter(note => !note.archived && note.title.toLowerCase().includes(this.state.keyword.toLowerCase()))}
            archivedNotes={this.state.notes.filter(note => note.archived && note.title.toLowerCase().includes(this.state.keyword.toLowerCase()))}
            onDelete={this.onDeleteNoteHandler}
            onSearch={this.onSearchNoteHandler}
            onChangeArchive={this.ondChangeArchivedNoteHandler}
          />
        </div>
      </div>
    )
  }
}

export default NoteApp;