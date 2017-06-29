// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var testSchema = new Schema({
  name: String,
  date: Date
});


testSchema.statics.findAll = function(cb) {
  return this.find({}, cb);
};


// the schema is useless so far
// we need to create a model using it
var Test = mongoose.model('Test', testSchema);



// on every save, add the date
testSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();
  
  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});


// make this available to our users in our Node applications
module.exports = Test;