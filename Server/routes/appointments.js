var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/cambly');
var collection = db.get('appointments');
var users = db.get('users');
//

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
    collection.find({}, function(err, appointments){
    if (err) throw err;
        res.json(appointments);
    });
});

//for getting tutor appointment
router.get('/:id', function(req, res) {
    collection.find({_id: req.params.id}, function(err, appointments){
    if (err) throw err;
        booking = appointments[0]["bookings"]
        res.json(booking);
    });
});

//insert
router.post('/', function(req, res) {
    try{
        slot = req.body.appointment_time;
    console.log("slot "+slot);
    availability[`${slot}`] = true;
    bookings = [];
    bookings.push({
        date : req.body.appointment_date,
        time : req.body.appointment_time,
        student_name:req.body.student_name,
        course_name : req.body.course_name
    })
    users.findOne({username : req.body.student_name},(err, user)=>{
        if(err) throw err;
        let tempAppointment = [...user.appointments];
        // if(user.appointments.length==0){
        //     let tempAppointment =[]    
        // }else{
                
        // }
        // console.log(tempAppointment)
        tempAppointment.push({
            date : req.body.appointment_date,
            time : req.body.appointment_time,
            tutor : req.body.tutor_name,
            course : req.body.course_name
        })
        users.update(user,{$set : {
            appointments : tempAppointment
        }}, function(err, appointments){
        if (err) throw err;
        });
    })
    collection.insert({
        tutor_name: req.body.tutor_name,
        availability,
        bookings  
    }, function(err, appointments){
    if (err) throw err;
        res.json(appointments);
    });
    }
    catch(err){
		console.log(err.stack);
	}
    
    
});

//update
router.put('/:id', function(req, res) {
    
    slot = req.body.appointment_time;
    // console.log(slot);
    // availability[`${slot}`] = true;
    let newAva;
    users.findOne({username : req.body.student_name},(err, user)=>{
        if(err) throw err;
        let tempAppointment = [...user.appointments];
        // console.log(tempAppointment)
        tempAppointment.push({
            date : req.body.appointment_date,
            time : req.body.appointment_time,
            tutor : req.body.tutor_name,
            course : req.body.course_name
        })
        users.update(user,{$set : {
            appointments : tempAppointment
        }}, function(err, appointments){
        if (err) throw err;
        });
        collection.find({_id: req.params.id}, function(err, appointments){
            if (err) throw err;
            let newBookings
            if(appointments[0]["availability"][slot]==true){
                res.send("not avaialble");
            }else{
                // res.send("new booking done");
                // console.log();
                newAva = {...appointments[0]["availability"]};
                newBookings = [...appointments[0]["bookings"]];
                let temp = {date: req.body.appointment_date,
                    time : req.body.appointment_time,
                    student_name : req.body.student_name,
                    course_name : req.body.course_name
                }
                newBookings.push(temp);
                newAva[slot] = true;
                
            }
            collection.update({_id: req.params.id},{$set : {
                tutor_name: req.body.tutor_name,
                // appointment_date : req.body.appointment_date,
                // appointment_time: req.body.appointment_time,
                // course_name: req.body.course_name,
                // student_name: req.body.student_name,
                availability: newAva,
                bookings: newBookings
            }}, function(err, appointments){
            if (err) throw err;
                res.json(appointments);
            });
            // newBookings = [...appointments[0]["bookings"]]
            // newBookings.push({
            //     date : req.body.appointment_date,
            //     time : req.body.appointment_time,
            //     student_name:req.body.student_name,
            //     course_name : req.body.course_name
            // })
        });
    })
    // collection.find({_id: req.params.id}, function(err, appointments){
    //     if (err) throw err;
    //     let newBookings
    //     if(appointments[0]["availability"][slot]==true){
    //         res.send("not avaialble");
    //     }else{
    //         // res.send("new booking done");
    //         // console.log();
    //         newAva = {...appointments[0]["availability"]};
    //         newBookings = [...appointments[0]["bookings"]];
    //         let temp = {date: req.body.appointment_date,
    //             time : req.body.appointment_time,
    //             student_name : req.body.student_name,
    //             course_name : req.body.course_name
    //         }
    //         newBookings.push(temp);
    //         newAva[slot] = true;
            
    //     }
    //     collection.update({_id: req.params.id},{$set : {
    //         tutor_name: req.body.tutor_name,
    //         // appointment_date : req.body.appointment_date,
    //         // appointment_time: req.body.appointment_time,
    //         // course_name: req.body.course_name,
    //         // student_name: req.body.student_name,
    //         availability: newAva,
    //         bookings: newBookings
    //     }}, function(err, appointments){
    //     if (err) throw err;
    //         res.json(appointments);
    //     });
    //     // newBookings = [...appointments[0]["bookings"]]
    //     // newBookings.push({
    //     //     date : req.body.appointment_date,
    //     //     time : req.body.appointment_time,
    //     //     student_name:req.body.student_name,
    //     //     course_name : req.body.course_name
    //     // })
    // });
    
    // collection.update({_id: req.params.id},{$set : {
    //     tutor_name: req.body.tutor_name,
    //     // appointment_date : req.body.appointment_date,
    //     // appointment_time: req.body.appointment_time,
    //     // course_name: req.body.course_name,
    //     // student_name: req.body.student_name,
    //     // availability: newAva,
    //     // bookings
    // }}, function(err, appointments){
    // if (err) throw err;
    //     res.json(appointments);
    // });
});

//delete
router.delete('/:id', function(req, res) {
    collection.remove({_id: req.params.id}, function(err, appointments){
    if (err) throw err;
        res.json(appointments);
    });
});

module.exports = router;