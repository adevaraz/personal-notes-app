import React from "react";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    }

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(e) {
    this.setState(() => {
      return {
        keyword: e.target.value,
      }
    })
    this.props.onSearch({ keyword: e.target.value })
  }

  render() {
    return (
      <div>
        <form id="search-form" className="form">
          <div className="form-group form-title">
            <label htmlFor="search-title">Search Title </label>
            <input id="search-title" name="search-title" type="text" value={this.state.keyword} onChange={this.onKeywordChangeHandler} />
          </div>
        </form> 
      </div>
    )
  }
}

export default SearchInput;