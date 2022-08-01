var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/cambly');
var collection = db.get('tutors');
let availability = {
    "1100" : false,
    "1130" : false,
    "1200" : false,
    "1230" : false,
    "1330" : false,
    "1400" : false,
    "1430" : false,
    "1500" : false,
    "1530" : false,
    "1400" : false,
    "1430" : false,
    "1500" : false,
    "1530" : false,
    "1600" : false,
    "1630" : false,
}

router.get('/', function(req, res) {
    collection.find({}, function(err, tutors){
    if (err) throw err;
        res.json(tutors);
    });
});


router.get('/:id', function(req, res) {
    collection.find({_id: req.params.id}, function(err, tutors){
    if (err) throw err;
        res.json(tutors);
    });


});

//insert
router.post('/', function(req, res) {
    collection.insert({
        name: req.body.name,
        picture : './images/robert.jpg',
        about_me: req.body.about_me,
        rating: req.body.rating,
        from: req.body.from,
        experience: req.body.experience,
        subject: req.body.subject,
        working_hours: req.body.working_hours,
        certificates: req.body.certificates,
        availability 
    }, function(err, tutors){
    if (err) throw err;
        res.json(tutors);
    });
});

//update
router.put('/:id', function(req, res) {
    collection.update({_id: req.params.id},{$set : {
        name: req.body.name,
        picture : req.body.picture,
        about_me: req.body.about_me,
        rating: req.body.rating,
        from: req.body.from,
        experience: req.body.experience,
        subject: req.body.subject,
        working_hours: req.body.working_hours,
        certificates: req.body.certificates,
    }}, function(err, tutors){
    if (err) throw err;
        res.json(tutors);
    });
});

//delete
router.delete('/:id', function(req, res) {
    collection.remove({_id: req.params.id}, function(err, tutors){
    if (err) throw err;
        res.json(tutors);
    });
});

module.exports = router;