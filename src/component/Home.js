import React from 'react'
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import {Link} from 'react-router-dom'

import Nav2 from './Nav2';
import BuildBurger from './BuildBurger';
import ContestForm from './ContestForm';
import SliderComp from './SliderComp';
import Grid_meals from './Grid_meals';
import Drinks from './Drinks';


function Home() {
    return (
        <div>

            
    	 <Nav2/> 
         <SliderComp/>
        <Grid_meals/>
        <Drinks/>
        
        <button className="social-media1">
          <a href="#"><img src={require('./images/facebook.png')} href="#" alt='facebook is here' className="sm-icon"></img></a>
      </button>
      <button className="social-media2">
        <a href="#"><img src={require('./images/insta.png')} alt='insta is here' className="sm-icon"></img></a>        
      </button>
      <button className="social-media3">
        <a href="#"><img src={require('./images/twitter.png')} alt='twitter is here' className="sm-icon"></img></a>
      </button>
        </div>
    )
}

export default Home
