import React from 'react';
import { Container } from 'react-bootstrap';
import DisplayComp from './DisplayComp';
import data from '../data.json'

function pizzaOffer() {

    const pizzas= data.map(function(meal){ return meal.cat==="pizza" ? `${meal.cat+meal.number} ${meal.name} ${meal.price} ${meal.descp}`: ''}).filter(function(meal){return(meal!=='')})

    return (
        <div>
            <div style={{height:'70px'}}></div>
           
            <img src={require('./images/pizzaOffer1.jpg')} alt='pizzaOffer' style={{width:'100%',height:'400px'}}></img>

            <Container style={{backgroundColor:'#eaeded', paddingBottom:'10px'}}>
            <h2 style={{textAlign:'center', color:'#DC143C'}}>How it works</h2>
            <p style={{textAlign:'center', color:'grey'}}>*You buy one, an other pizza is for free <br/> *Available also for delivery and to import <br/> *This offer is Available from 15/06/2020 to 30/9/2020 <br/>*Offer Available for all pizzas <br/> *Offre Available for all our restaurants </p>
            <h4 style={{fontStyle:'italic', textAlign:'center', color:'#DC143C'}}>Enjoy your pizza</h4>
            <DisplayComp foods={pizzas}  category='pizzas'/>
            </Container>
           
        </div>
    )
}


export default pizzaOffer
