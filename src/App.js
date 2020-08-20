import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router , Switch , Route } from 'react-router-dom'

import Nav2 from './component/Nav2';
import BuildBurger from './component/BuildBurger';
import ContestForm from './component/ContestForm';
import SliderComp from './component/SliderComp';
import Grid_meals from './component/Grid_meals';
import Drinks from './component/Drinks';


function App() {
  return (
    <div className="App" style={{backgroundColor:'#fdebd0'}}>
    <Nav2/>
      <Router>
                <Route path="/" exact component={SliderComp}></Route>
                <Route path="/ContestForm" exact component={ContestForm}/>
                <Route path="/BuildBurger" exact component={BuildBurger}/>
      </Router>
     <Grid_meals/>
     <Drinks/>


  <div style={{height:'600px'}}/>
   
  </div>

  );
}

export default App;
