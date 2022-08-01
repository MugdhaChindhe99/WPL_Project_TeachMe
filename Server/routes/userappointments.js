var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/cambly');
var collection = db.get('appointments');
var users = db.get('users');

router.get('/', function(req, res) {
    users.find({}, function(err, appointments){
    if (err) throw err;
        res.json(appointments);
    });
});

//for getting student appointment
router.get('/:id', function(req, res) {
    users.find({_id: req.params.id}, function(err, appointments){
    if (err) throw err;
        res.json(appointments[0]["appointments"]);
    });
});

module.exports = router;