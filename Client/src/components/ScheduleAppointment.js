import React,{useState} from "react";
//import {Form, Button, Card} from 'react-bootstrap'
import HeaderPage from './HeaderPage';
function ScheduleAppointment(){
    const[data, setTutor] = useState({
        tutor_name:'',
        appointment_date:'',
        appointment_time:'1100',
        course_name:'',
        student_name:''
    })
    console.log(data)

    /*const[fi, setFile] = useState({
        picture:null
    })*/


    const updateValue = (e)=>{
        setTutor({...data, [e.target.id] : e.target.value});
    }
    
    /*const updateFile = (e)=>{
        setFile({fi:e.target.files[0]})
        console.log(e.target.files[0]);
    }*/

    const submitData = (e) => {
        e.preventDefault()
        const dataTutor = {
            tutor_name:data.tutor_name,
            appointment_date:data.appointment_date,
            appointment_time:data.appointment_time,
            course_name:data.course_name,
            student_name:data.student_name
            
        }
        fetch("http://localhost:3000/appointments",{
            method:'POST',
            headers : { 
                'Content-Type': 'application/json',
                 'Accept': 'application/json'
              },
            body:JSON.stringify(dataTutor)
        })
        .then(response => response.json())
        .then(window.alert("Appointment Scheduled successfully"))
        .catch(e => {
            console.log("e",e)
        })
        //console.log("data.picture = "+fi.picture);
    }


    return(
        <div>
            <HeaderPage />
            <section className="signup">
                <div className="sub-signup">
                    <div>
                        <h1>Schedule Appointment</h1>
                        <div>
                        Tutor_Name:<input id="tutor_name" onChange = {updateValue}  type="text"/>
                        </div>
                        <br />
                        <div>
                        Appointment_Date:<input id="appointment_date" onChange = {updateValue}   type="date" />
                        </div>
                        <br />
                        <div>
                        Appointment_Time:<select id="appointment_time" onChange = {updateValue} defaultValue="Select time">
                            <option>1100</option>
                            <option>1130</option>
                            <option>1200</option>
                            <option>1230</option>
                            <option>1330</option>
                            <option>1400</option>
                            <option>1430</option>
                            <option>1500</option>
                            <option>1530</option>
                            <option>1600</option>
                            <option>1630</option>
                        </select>
                        
                        </div>
                        <br />
                        <div>
                        Course_Name:<input id="course_name" onChange = {updateValue}   type="text"/>
                        </div>
                        <br />
                        <div>
                        Student_Name:<input id="student_name" onChange = {updateValue}   type="text"/>
                        </div>
                        
                        <br />
                        <button onClick={submitData}>Submit</button>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default ScheduleAppointment;