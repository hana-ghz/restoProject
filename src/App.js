import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router , Switch , Route } from 'react-router-dom'

import Nav2 from './component/Nav2';
import BuildBurger from './component/BuildBurger';
import ContestForm from './component/ContestForm';
import SliderComp from './component/SliderComp';
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
        <div style={{height:"2000px"}}></div>
        <Footer2/>
    </div>
  );
}

export default App;
