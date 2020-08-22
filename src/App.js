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
import Footer2  from './component/Footer2'


function App() {
  return (
    <div className="App">

    	 <Nav2/> 
        <Router>
                  <Route path="/" exact component={SliderComp}></Route>
                  <Route path="/ContestForm" exact component={ContestForm}/>
                  <Route path="/BuildBurger" exact component={BuildBurger}/>
        </Router>
        <Grid_meals/>
        <Drinks/>
        <Footer2/>

        <button className="social-media1">
          <a href="#"><img src={require('./component/images/facebook.png')} href="#" alt='facebook is here' className="sm-icon"></img></a>
        
      </button>
      <button className="social-media2">
        <a href="#"><img src={require('./component/images/insta.png')} alt='insta is here' className="sm-icon"></img></a>
        
      </button>
      <button className="social-media3">
        <a href="#"><img src={require('./component/images/twitter.png')} alt='twitter is here' className="sm-icon"></img></a>
        
      </button>
    </div>
  );
}

export default App;
