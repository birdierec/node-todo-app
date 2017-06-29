var url = require('url');

var TodoModel = require('../model/todo');

module.exports = {
    init: function(req, res) {

        TodoModel.find({}, function(err, users) {
            if (err) throw err;

            // object of all the users
            console.log(users);
        });
        
        res.render('todo.pug', {
            greet : (req.query.greet === 't'),
            person : req.query.person
        });
    },
    saveTask: function(req, res) {

        var newTask = new TodoModel({
            task: req.body.task
        });

        newTask.save(function(err) {
            if (err) throw err;

            console.log('TEST saved successfully!');
        });


        res.redirect(url.format({
            pathname:'/todo'
        }));
    }
}