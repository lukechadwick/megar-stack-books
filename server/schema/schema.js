const graphql = require('graphql');
const _ = reqire('lodash');

const { GraphQLObjectType, GraphQLString } = graphql;

let dummyData = [
  { name: 'Book 1', genre: 'Fantasy', id: '1' },
  { name: 'Book 2', genre: 'Sci-Fi', id: '2' },
  { name: 'Book 3', genre: 'Action', id: '3' }
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //
        //code to get data from db
        //
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
