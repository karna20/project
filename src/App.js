import Navbar from "./components/NavigationBar/NavBar";
import Home from "./Pages/HomePage/Home";
import News from "./Pages/News/News";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import UpcomingEvent from "./Pages/UpcomingEvent/UpcomingEvent";
import React, {useEffect, useState} from 'react';

// Admin Side
import Search from './Pages/UserList'
import Quiz from './components/Quiz';
import Materials from './upload/Materials';
import Lecture from './Pages/Lecture'
// import Navbar from './components/Navbar';
import Register from './auth/Register';
//Dark light theme

// Student Side
import StudentCard from './student/Cards/studentCards'
import StudentLecture from './student/showLecture'
import StudentQuiz from './student/showQuiz'
import StudentMaterial from './student/Materials'
import StudentHome from './student'
import Admin from './admin'

import Login from './auth/Login'

function App() {

  return (

    <Router>
       
    <Switch>
     {/* // Admin Side */}
      <Route exact path='/register' component={Register}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path="/" component={Home} />
      <Route path="/aboutus" component={UpcomingEvent} />
        <Route path="/contactus" component={News} />
      <Route exact path='/admin' component={Admin}/>
      <Route exact path='/search' component={Search}/>
      <Route exact path='/quiz' component={Quiz}/>
      <Route exact path='/materials' component={Materials}/>
      <Route exact path='/lecture' component={Lecture}/>


      <Route exact path='/home' component={StudentHome}/>
      <Route exact path='/studentmaterials' component={StudentMaterial}/>
      <Route exact path='/studentquiz' component={StudentQuiz}/>
      <Route exact path='/studentlecture' component={StudentLecture}/>


    </Switch>
    
  </Router>
  );
}

export default App;