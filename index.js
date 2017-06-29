var express = require('express');
var pug = require('pug');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(__dirname + '/public'));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


var index = require('./src/controllers/index');
app.get('/', index.initialView);
app.post('/api/greeting', index.greetingReq);


var todo = require('./src/controllers/todo')
app.get('/todo', todo.init)
app.post('/api/todo/submit', todo.saveTask)


app.listen(8080, '127.0.0.1')
console.log('listening on port 8080')