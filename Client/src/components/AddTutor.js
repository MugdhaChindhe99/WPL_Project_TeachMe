import React,{useState} from "react";
//import {Form, Button, Card} from 'react-bootstrap'
// import HeaderPage from './HeaderPage';
import { Link, NavLink } from 'react-router-dom';

function AddTutor(){
    const[data, setTutor] = useState({
        name:'',
        picture:'',
        about_me:'',
        rating:'',
        from:'',
        experience:'',
        subject:'',
        working_hours:'',
        certificates:''

    })
    

    const updateValue = (e)=>{
        
        setTutor({...data, [e.target.id] : e.target.value});
    }
    
    const submitData = (e) => {
        e.preventDefault()
        const dataTutor = {
            name: data.name,
            picture: "./images/robert.jpg",
            description : data.about_me,
            about_me: data.about_me,
            rating: data.rating,
            from: data.from,
            experience: data.experience,
            working_hours: data.working_hours,
            subject: data.subject,
            certificates: data.certificates,
            
        }
        fetch("http://localhost:3000/tutors",{
            method:'POST',
            headers : { 
                'Content-Type': 'application/json',
                 'Accept': 'application/json'
              },
            body:JSON.stringify(dataTutor)
        })
        .then(response => response.json())
        .then(window.alert("Tutor added successfully"))
        .catch(e => {
            console.log("e",e)
        })
        
    }

    return(
        <div>
                        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
            <img src="../images/blackT.png" width="50" height="60" class="d-inline-block align-top" alt="" />
            <p class="nav-item">TeachMe</p>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/appointments/627cbe1d88202291defe0aaf">Upcoming Appointments</a>
              </li>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <li className="nav-item">
                        <NavLink className="nav-link" to="/">LogOut</NavLink>
                    </li>

          </ul>
        </div>
      </nav>
            <section className="signup">
                <div className="sub-signup">
                    <div>
                        <h1>Add Tutor</h1>
                        <div>
                            Name:<input id="name" onChange = {updateValue}  type="text"/>
                        </div>
                        <br />
                        <div>
                            Description:<input id="about_me" onChange = {updateValue}   type="text"/>
                        </div>
                        <br />
                        <div>
                            Rating:<input id="rating" onChange = {updateValue}   type="text"/>
                        </div>
                        <br />
                        <div>
                            Location:<input id="from" onChange = {updateValue}   type="text"/>
                        </div>
                        <br />
                        <div>
                            Experience:<input id="experience" onChange = {updateValue}   type="text"/>
                        </div>
                        <br />
                        <div>
                            Subject:<input id="subject" onChange = {updateValue}   type="text"/>
                        </div>
                        <br />
                        <div>
                            Working Hours:<input id="working_hours" onChange = {updateValue}   type="text"/>
                        </div>
                        <br />
                        <div>
                            Certificates:<input id="certificates" onChange = {updateValue}   type="text"/>
                        </div>
                        <br />
                        <div>
                        
                            Profile Picture:<input type="file" id="picture" onChange={updateValue} name="picture"/>
                        </div>
                        <br />
                        <button onClick={submitData}>Submit</button>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default AddTutor;