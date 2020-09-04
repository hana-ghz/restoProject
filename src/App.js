import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {HashRouter as Router , Switch , Route } from 'react-router-dom'

import Home from './component/Home';
import Nav2 from './component/Nav2';
import Footer2 from './component/Footer2';
import HealthyFood from './component/HealthyFood';
import ContestForm from './component/ContestForm';
import BuildBurger from './component/BuildBurger';
import OurMap from './component/OurMap';
import About from './component/About';
import Menu from './component/Menu';
import pizzaOffer from './component/pizzaOffer';


function App() {
  return (

    <Router basename="/">
    <div className="App">  

      <Nav2 />

      <Switch>
        
        <Route path="/" exact component={Home} />
        <Route path="/HealthyFood" exact component={HealthyFood}/>
        <Route path="/ContestForm" exact component={ContestForm}/>
        <Route path="/BuildBurger" exact component={BuildBurger}/>
        <Route path="/OurMap" exact component={OurMap}/>
        <Route path="/About" exact component={About}/>
        <Route path="/Menu" exact component= {Menu}/>
        <Route path="/pizzaOffer" exact component= {pizzaOffer}/>
      </Switch>
      
      <Footer2/> 
      
    </div>
    </Router>
  );
}

export default App;
