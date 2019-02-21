import React, { Component } from 'react';

import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery
} from '../queries/queries';

class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div id='book-details'>Show book details</div>
      </React.Fragment>
    );
  }
}

export default BookDetails;
