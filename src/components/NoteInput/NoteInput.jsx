import React from "react";
import { MAX_TITLE_LENGTH } from "../../fixtures/constants";
import "./NoteInput.css"

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      maxTitleLength: MAX_TITLE_LENGTH,
      isForbidden: false,
    }

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeHandler(e) {
    this.setState(() => {
      return {
        title: e.target.value,
        maxTitleLength: e.target.value.length > 0 ? MAX_TITLE_LENGTH - e.target.value.length : MAX_TITLE_LENGTH,
        isForbidden: false,
      }
    });
  }

  onBodyChangeHandler(e) {
    this.setState(() => {
      return {
        body: e.target.value,
        isForbidden: false,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    if ((this.state.title === '') || (this.state.body === '')) {
      this.setState(() => {
        return {
          isForbidden: true,
        }
      })
    } else {
      this.props.addNote(this.state);
      this.setState(() => {
        return {
          title: '',
          body: '',
          maxTitleLength: MAX_TITLE_LENGTH,
        }
      })
    }
  }

  render() {
    return (
      <div>
        <h2 className="">Add Note</h2>
        { this.state.isForbidden ? <div className="error-message"><p>Please fill the title or body first :&#40;</p></div> : '' }
        <form id="note-form" className="form" onSubmit={this.onSubmitEventHandler}>
          <div className="form-group form-title">
            <div id="text-title">
              <label htmlFor="title">Title</label>
              <span>{this.state.maxTitleLength} characters left</span>
            </div>
            <input id="title" name="title" type="text" value={this.state.title} onChange={this.onTitleChangeHandler} />
          </div>  
          <div className="form-group form-title">
            <label htmlFor="body">Body</label>
            <textarea id="body" name="body" value={this.state.body} onChange={this.onBodyChangeHandler} />
          </div>
          {
            this.state.maxTitleLength >= 0
              ? <input className="btn-submit" type="submit" name="submit" value="Add"/>
              : <input className="btn-submit" type="submit" name="submit" value="Add" disabled/>
          }
        </form>
      </div>
    )
  }
}

export default NoteInput;