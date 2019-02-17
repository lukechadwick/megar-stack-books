const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const mongoKey = require('./keys');

mongoose.connect(mongoKey.mongoURI);
mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

// Pass graphql requests to express-graphql
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4050, () => {
  console.log('now listening for requests on port 4050');
});
