import React from 'react';
import { useState, useEffect } from 'react';
import Modal from './Modal';
import { Link, useParams, NavLink } from 'react-router-dom';
import blackT from '../images/blackT.png'
const ShowTutorDetail = (props) => {
    //const [tutors, setTutors] = useState([]);

    let {id} = useParams();
    console.log(id);
    { props.tutorlist.map( (tutor, id) => ( console.log("list"+tutor.working_hours)))};

    const [rating, setRating] = useState([]);
//instead of form use rating
    const updateRating = (e)=>{
        setRating(e.target.value);
    }
    console.log(rating);
    // rating.map((rate,id) => {
    //     console.log("print rating data "+rate);
    // })
    const [searchTerm, setSearchTerm] = useState('')
    const [data, updateData] = useState({
      name : "",
      display : false
    })
    const {name, display} = data
    const submitData = (e) => {
        e.preventDefault();
        
        props.tutorlist.map((tutor,id) => (tutor.rating=rating));
        //props.tutorlist.map((tutor,id) => (console.log(tutor.rating)));

        console.log(props.tutorlist[0]);
        
        fetch("http://localhost:3000/tutors/"+id, {
            method:'PUT',
            headers : { 
                'Content-Type': 'application/json',
                 'Accept': 'application/json'
              },
            body:JSON.stringify(props.tutorlist[0])
        })
        window.alert("Rated successfully");
    }
    return (
        <div style={{"backgroundImage": "../public/images/bg_image.jpeg"}}>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">	
        <a className="navbar-brand" href="/">		
            <img src={blackT} width="50" height="60" className="d-inline-block align-top" alt="" />		
            <p className="nav-item">TeachMe</p>	
        </a>	
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">	
          <span class="navbar-toggler-icon"></span>	
        </button>	
        <div class="collapse navbar-collapse" id="navbarNav">	
          <ul class="navbar-nav">	
            <li class="nav-item active">	
              <a class="nav-link" href="#">Tutor Profile <span class="sr-only">(current)</span></a>	
            </li>	
            <li>
              <a className='nav-link' href='/addAppointment'>Schedule Appointment</a>
            </li>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	
            	
          </ul>	
        </div>	
      </nav>
        <h1>Find a tutor</h1>
        <input type="text" placeholder='Name, language, hobby' onChange={event => {setSearchTerm(event.target.value)}}/>
        <br>
        </br>
        { props.tutorlist.map( (tutor, id) => (

<div  className="card" key={ id }>
  <div className="card-body">
  {/* className="card-img-top" */}
    <img width={290} height={290} src={tutor.picture} />  
    <h5 className="card-title">Name: { tutor.name }</h5>
    <h6 className="card-subtitle mb-2 text-muted">Rating: {tutor.rating} </h6>
    <h6 className="card-subtitle mb-2 text-muted">From: {tutor.from} </h6>
    <h6 className="card-subtitle mb-2 text-muted">Experience: {tutor.experience}</h6>
    <h6 className="card-subtitle mb-2 text-muted">Subject: {tutor.subject}</h6>
    <h6 className="card-subtitle mb-2 text-muted">Certificates: {tutor.certificates}</h6>
    <h6 className="card-subtitle mb-2 text-muted">Working Hours: {tutor.working_hours}</h6>
    <h6 className="card-text">About me: { tutor.about_me } </h6>
  </div>
 
</div>
))}
        {display && <div className="apples"><Modal data = {data}  updateModal = {updateData} /></div>}
        
        <button className='primary' onClick={submitData}>Rate a Tutor</button>&nbsp;
        <select onChange={updateRating}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select><br></br>

        <button className='primary' >Give Feedback</button>
        <button className='primary' >Schedule appointment</button>
      </div>
    
      );

}

export default ShowTutorDetail






