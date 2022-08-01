import './App.css';
import React,{useState, useEffect} from 'react';
import TutorList from './components/TutorList';
import HeaderPage from './components/HeaderPage';	
import FooterPage from './components/FooterPage';
import {Routes, Route} from 'react-router-dom';
import AddTutor from './components/AddTutor';
import Home from './home';
import Details from './details';
import SignUp from './components/Authentication/SignUp';
import Login from './components/Authentication/Login';
import Welcome from './components/Welcome';
import TutorLogin from './components/Authentication/TutorLogin';
import ScheduleAppointment from './components/ScheduleAppointment';
//import TrySignup from './components/TrySignup';
//import { Axios } from "axios";

function App(){
  return(
    <Routes>
      <Route path="/tutors" element={<Home/>}></Route>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/tutorLogin' element={<TutorLogin />} />
      <Route path='/' element={<Welcome />} />
      <Route path='/addTutor' element={<AddTutor />} />
      <Route path='/addAppointment' element={<ScheduleAppointment />} />
      <Route path="/tutors/details/:id" element={<Details/>}></Route>
    </Routes>
  );
}

export default App;
