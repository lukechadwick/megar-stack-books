import React, { Component } from 'react';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <ul id='book-list'>
          <li>Book Name</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default BookList;
