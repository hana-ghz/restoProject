import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router , Switch , Route } from 'react-router-dom'

import Nav2 from './component/Nav2';
import BuildBurger from './component/BuildBurger';
import ContestForm from './component/ContestForm';
import SliderComp from './component/SliderComp';


function App() {
  return (
    <div className="App">
    	 <Nav2/> 
        <Router>
                  <Route path="/" exact component={SliderComp}></Route>
                  <Route path="/ContestForm" exact component={ContestForm}/>
                  <Route path="/BuildBurger" exact component={BuildBurger}/>
        </Router>
    </div>
  );
}

export default App;
