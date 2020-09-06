import React from 'react';
import { Container } from 'react-bootstrap';
import DisplayComp from './DisplayComp';


function pizzaOffer() {

    const pizzas = [ "pizza1" , "pizza2", "pizza3" , "pizza4" , "pizza5" ,"pizza6" , "pizza7", "pizza8" , "pizza9" , "pizza10", "pizza11", "pizza12"]


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
