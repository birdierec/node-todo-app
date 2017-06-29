var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
  task: String,
  date: Date
});

var TodoModel = mongoose.model('Todo', todoSchema);


module.exports = TodoModel;