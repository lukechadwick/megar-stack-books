import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAuthorsQuery } from '../queries/queries';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayAuthors = () => {
    let data = this.props.data;

    if (data.loading) return <option>Loading Author</option>;
    else
      return data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
  };

  render() {
    return (
      <React.Fragment>
        <form id='add-book'>
          <div className='field'>
            <label>Book name:</label>
            <input type='text' />
          </div>

          <div className='field'>
            <label>Genre:</label>
            <input type='text' />
          </div>

          <div className='field'>
            <label>Author:</label>
            <select>
              <option>Select Author</option>
              {this.displayAuthors()}
            </select>
          </div>
        </form>
        <button>+</button>
      </React.Fragment>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
