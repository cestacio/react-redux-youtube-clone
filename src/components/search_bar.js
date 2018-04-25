import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
  }
  render() {
    return <input onChange={e => console.log(e.target.value)} />;
  }

  // same as line 10
  // onInputChange(e) {
  //   console.log(e.target.value);
  // }
}

export default SearchBar;
