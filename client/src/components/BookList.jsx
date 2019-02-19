import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  displayBooks = () => {
    let data = this.props.data;

    if (data.loading) {
      return <div>Loading Books...</div>;
    } else {
      return data.books.map(book => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <ul id='book-list'>
          {this.displayBooks()}
          <li>Book Name</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
