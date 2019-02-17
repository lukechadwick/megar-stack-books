const mongoose = require('mongoose');
const schema = mongoose.schema;

const authorSchema = new schema({
  name: String,
  age: Number
});

module.exports = mongoose.model('Author', authorSchema);
