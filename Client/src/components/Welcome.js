import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import FooterPage from './FooterPage';
import {useNavigate} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from '../images/blackT.png';
function Welcome() {
    const navigate = useNavigate();
  return (
    <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">	
            <a className="navbar-brand" href="/">	
                <img src="../images/blackT.png" width="50" height="60" className="d-inline-block align-top" alt="" />	
                <p className="nav-item">TeachMe</p>	
            </a>	&ensp;&ensp;
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">	
                <span className="navbar-toggler-icon"></span>	
            </button>	
            <div className="collapse navbar-collapse" id="navbarNav">	
                <ul className="navbar-nav">	
                    <li className="nav-item active">	
                        <NavLink className="nav-link" to="/login">User Login </NavLink>		
                    </li>	&ensp;&ensp;
                    <li className="nav-item">	
                        <NavLink className="nav-link" to="/tutorLogin">Tutor Login</NavLink>	
                    </li>	&ensp;&ensp;
                    <li className="nav-item">	
                        <NavLink className="nav-link" to="/signup">SignUp</NavLink>	
                    </li>
                    	          	       	
                </ul>	
            </div>	
        </nav>
        <section id="home" className='welcomepage'>
            <div className='sub-welcome'>
                <h2>Enhance your future with us</h2>
                
            </div>
            <div className='sub-sub-welcome'>
                <p>This is a online tutoring application through which you can learn many technologies.</p>
            </div>
            
            <div className="welcome-button">
                <a className="blue" href="/login">Learn More</a>
            </div>
        </section>

        <footer className="social-footer text-white-50">
            <div className="social-footer-icons">
                <a href="https://www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/?hl=en"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="https://twitter.com/?lang=en"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            </div>
            <div className="footer-copyright text-right">© 2020 Copyright:
                <a href="#" class="text-white-50"> TeachMe.com</a>
            </div>
        </footer>
    </div>
  )
}

export default Welcome;
