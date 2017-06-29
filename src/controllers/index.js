var url = require('url');
// var url_parts = url.parse(request.url, true);
// var query = url_parts.query;


var TestModel = require('../model/test');

module.exports = {
    initialView: function(req, res) {

        TestModel.findAll(function(err, boom){
            console.log(boom);
            list = boom;
            res.render('index.pug', {
                name : 'wazzzup',
                greet : (req.query.greet === 't'),
                person : req.query.person,
                testlist: boom
            });
        });
        // console.log(test);

    },

    greetingReq: function(req, res) {
        
        var newname = new TestModel({
            name: req.body.test
        });

        newname.save(function(err) {
            if (err) throw err;

            console.log('TEST saved successfully!');
        });
        
        res.redirect(url.format({
            pathname:'/',
            query: {
                greet : 't',
                person : req.body.test
            }
        }));
        // res.render('index.pug', {
     //     greet : true,
     //     person : req.body.test
     //    });
    }
}
