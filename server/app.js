const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();

// Pass graphql requests to express-graphql
app.use('/graphql', graphqlHTTP({}));

app.listen(4050, () => {
  console.log('now listening for requests on port 4050');
});
