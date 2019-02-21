import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  displayBookDetails() {
    const { book } = this.props.data;

    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>Genre: {book.genre}</p>
          <p>Author: {book.author.name}</p>
          <p>All books by author:</p>
          <ul className='other-books'>
            {book.author.books.map(item => {
              return <li id={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div>Select a book...</div>;
    }
  }

  render() {
    return (
      <React.Fragment>
        <div id='book-details'>{this.displayBookDetails()}</div>
      </React.Fragment>
    );
  }
}

export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    };
  }
})(BookDetails);
