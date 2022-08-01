import React from 'react';
import { useState } from 'react';
import Modal from './Modal';
import { Link, NavLink } from 'react-router-dom';

const TutorList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
    const [searchTerm, setSearchTerm] = useState('')
    const [data, updateData] = useState({
      name : "",
      display : false
    })
    { props.tutorlist.map( (tutor, id) => ( console.log("list "+tutor.working_hours)))};
    const {name, display} = data
    const stringify = props.tutorlist.filter((val)=>{
      if(searchTerm==""){
        return val;
      }
      else if(val.name.toLowerCase().includes(searchTerm.toLowerCase()) || val.subject.toLowerCase().includes(searchTerm.toLowerCase())){
        return val;
      }
    }).map( (tutor, id) => (  
    <div className='image-container justify-content-start m-3'>

    <div className="card text-white bg-dark mb-3" key={ id }>
    <div className="card-body">
    {/* className="card-img-top" */}
      <img src={tutor.picture} />  
      <h5 className="card-title"><Link to={`/tutors/details/${tutor._id}`}>{ tutor.name }</Link></h5>
      <div onClick={() => props.handleFavouritesClick(tutor)}>
        <FavouriteComponent/>
      </div>
      <h6 className="card-subtitle mb-2 text-muted">{tutor.rating} </h6>
      <h6 className="card-subtitle mb-2 text-muted">{tutor.from} </h6>
      <p className="card-text">{ tutor.description } </p>
    </div>
    </div>

   
  </div>
  ));
    return (
        <div className="background">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">	
        <a className="navbar-brand" href="#">	
            <img src="../images/blackT.png" width="50" height="60" className="d-inline-block align-top" alt="" />	
            <p className="nav-item">TeachMe</p>	
        </a>	
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">	
          <span className="navbar-toggler-icon"></span>	
        </button>	
        <div className="collapse navbar-collapse" id="navbarNav">	
          <ul className="navbar-nav">		
            <li className="nav-item">	
              <NavLink className="nav-link" to="/addTutor">SignUp for Tutor Account</NavLink>	
            </li>	&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="nav-item">	
                <NavLink className="nav-link" to="/addAppointment">Schedule appointment</NavLink>
                	
              </li>		
              {/* <li className="nav-item">	
                <NavLink className="nav-link" to="http://localhost:3000/userAppointments/" >Upcoming appointment</NavLink>	
              </li>	 */}
              <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/userAppointments/627cbd7e88202291defe0aac">Upcoming Appointments</a>
              </li>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	
            
            <li>	
            <input type="text" placeholder='Name, Subject of expertise' onChange={event => {setSearchTerm(event.target.value)}}/>	
            </li>	
          </ul>	
        </div>	
      </nav>
        <h1>Find a tutor</h1>
        <input type="text" placeholder='Name, language, hobby' onChange={event => {setSearchTerm(event.target.value)}}/>
        <br>
        </br>
        <div class='d-flex'>
        { stringify}
        </div>
        {display && <div className="apples"><Modal data = {data}  updateModal = {updateData} /></div>}
      </div>
    
      );

}

export default TutorList









/*import React from 'react';
import { useState } from 'react';
import Modal from './Modal';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/blackT.png';
const TutorList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
    const [searchTerm, setSearchTerm] = useState('')
    const [data, updateData] = useState({
      name : "",
      display : false
    })
    const {name, display} = data
    return (
        <div style={{"backgroundImage": "../public/images/bg_image.jpeg"}}>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">	
        
        <a className="navbar-brand" href="/">	
            <img src="../images/blackT.png" width="50" height="60" className="d-inline-block align-top" alt="" />	
            <p className="nav-item">TeachMe</p>	
        </a>	
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">	
          <span className="navbar-toggler-icon"></span>	
        </button>	
        <div className="collapse navbar-collapse" id="navbarNav">	
          <ul className="navbar-nav">	
            <li className="nav-item active">	
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>	
            </li>	
            <li className="nav-item">	
              <a className="nav-link" href="#">About</a>	
            </li>	&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="nav-item">	
              <NavLink className="nav-link" to="/addTutor">SignUp for Tutor Account</NavLink>	
            </li>	&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="nav-item">	
                <NavLink className="nav-link" to="/addAppointment">Schedule appointment</NavLink>
                	
              </li>	
              
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	
            <li>	
            <input type="text" placeholder='Name, Subject of expertise' onChange={event => {setSearchTerm(event.target.value)}}/>	
            </li>	&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <li className="nav-item">
                        <NavLink className="nav-link" to="/">LogOut</NavLink>
                    </li>
          </ul>	
        </div>	
      </nav>
        <h1>Find a tutor</h1>
        <input type="text" placeholder='Name, language, hobby' onChange={event => {setSearchTerm(event.target.value)}}/>
        <br>
        </br>
        { props.tutorlist.filter((val)=>{
            if(searchTerm==""){
              return val;
            }
            else if(val.name.toLowerCase().includes(searchTerm.toLowerCase()) || val.subject.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
            }
          }).map( (tutor, id) => (

        <div className="card" key={ id }>
          <div className="card-body">
          {/* className="card-img-top" }
            <img className="profilePic" src={`${tutor.picture}`} />  
            <h5 className="card-title"><Link to={`/tutors/details/${tutor._id}`}>{ tutor.name }</Link></h5>
            <div onClick={() => props.handleFavouritesClick}>
              <FavouriteComponent/>
            </div>
            <h6 className="card-subtitle mb-2 text-muted">{tutor.rating} </h6>
            <h6 className="card-subtitle mb-2 text-muted">{tutor.from} </h6>
            <p className="card-text">{ tutor.about_me } </p>
          </div>
         
        </div>
        ))}
        {display && <div className="apples"><Modal data = {data}  updateModal = {updateData} /></div>}
      </div>
    
      );

}

export default TutorList*/






