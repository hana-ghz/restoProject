import React , {useState,useEffect} from 'react'
import {  Container } from 'react-bootstrap';
import DisplayComp from './DisplayComp';
import data from '../data.json'

import '../App.css'

function Menu() {
   
    const [meals, setmeals] = useState([])

    useEffect(() => {
        setmeals(data)
    }, [])

    const burgers= meals.map(function(meal){ return meal.cat==="burger" ? `${meal.cat+meal.number}`: ''}).filter(function(meal){return(meal!=='')})
    
    const pizzas= meals.map(function(meal){ return meal.cat==="pizza" ? `${meal.cat+meal.number}`: ''}).filter(function(meal){return(meal!=='')})

    const desserts= meals.map(function(meal){ return meal.cat==="dessert" ? `${meal.cat+meal.number}`: ''}).filter(function(meal){return(meal!=='')})

    const drinks= meals.map(function(meal){ return meal.cat==="drink" ? `${meal.cat+meal.number}`: ''}).filter(function(meal){return(meal!=='')})

    const salads= meals.map(function(meal){ return meal.cat==="salad" ? `${meal.cat+meal.number}`: ''}).filter(function(meal){return(meal!=='')})
  

    return (
        <div style={{backgroundImage: `url(${require("./images/Menu/background10.jpg")})`  }}>
            <h1 style={title}> Menu </h1>
            <Container fluid style={{ paddingTop:'10px', paddingBottom:'10px', borderRadius:'8px' ,}}>
                <h1 style={h1Style}>Our Burgers</h1>
                <DisplayComp foods={burgers} category='burgers'/>
                

                <h1 style={h1Style}>Our Pizzas</h1>
                <DisplayComp foods={pizzas}  category='pizzas'/>

                <h1 style={h1Style}>Our Salads</h1>
                <DisplayComp foods={salads}  category='salads'/>

                <h1 style={h1Style}>Our Desserts</h1>
                <DisplayComp foods={desserts}  category='desserts'/>

                <h1 style={h1Style}>Our Drinks</h1>
                <DisplayComp foods={drinks}  category='drinks'/>


            </Container>
     
        </div>
    )
}

 const title={
    fontSize:'15.5vw',
    textAlign:'center',
    paddingTop:'50px',color:' #EB6353',
}

 const h1Style={
   
    fontFamily: 'Oxygen , sansSerif',
    color:'white'
 }


export default Menu
