import { gql } from 'apollo-boost';

// Books
const getBookQuery = gql`
  query($id: String) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

// Authors
const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery };
