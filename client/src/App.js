import React from 'react'
import {
  BrowserRouter as Router,
  //Switch, react-router-dom 에 없다고 에러뜸
  Route,
  Routes, 
  Link
}from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

function App() {
  return (
    <Router>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route exact path="/" element = {<LandingPage/>}/>
          <Route exact path="/login" element = {<LoginPage/>}/>
          <Route exact path="/register" element = {<RegisterPage/>}/>
        </Routes>
    </Router>
  )
}

export default App
