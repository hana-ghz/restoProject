import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router , Switch , Route } from 'react-router-dom'

import Home from './component/Home';
import Nav2 from './component/Nav2';
import Footer2 from './component/Footer2';
import HealthyFood from './component/HealthyFood';
import ContestForm from './component/ContestForm';
import BuildBurger from './component/BuildBurger';



function App() {
  return (

    <Router>
    <div className="App">  

      <Nav2 />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/HealthyFood" exact component={HealthyFood}/>
        <Route path="/ContestForm" exact component={ContestForm}/>
        <Route path="/BuildBurger" exact component={BuildBurger}/>
      </Switch>
      
      <Footer2/>
    </div>
    </Router>
  );
}

export default App;
