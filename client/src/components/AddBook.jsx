import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAuthorsQuery } from '../queries/queries';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genre: '',
      authorId: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

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
        <form id='add-book' onSubmit={this.onSubmit}>
          <div className='field'>
            <label>Book name:</label>
            <input type='text' name='name' onChange={this.onChange} />
          </div>

          <div className='field'>
            <label>Genre:</label>
            <input type='text' name='genre' onChange={this.onChange} />
          </div>

          <div className='field'>
            <label>Author:</label>
            <select name='authorId' onChange={this.onChange}>
              <option>Select Author</option>
              {this.displayAuthors()}
            </select>
          </div>
          <button>+</button>
        </form>
      </React.Fragment>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
