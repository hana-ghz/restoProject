import React  from 'react'
import {  Container } from 'react-bootstrap';
import DisplayComp from './DisplayComp';


import '../App.css'

function Menu() {
   

    const burgers = [ "burger1" , "burger2", "burger3" , "burger4" , "burger5" ,"burger6" , "burger7", "burger8" , "burger9" , "burger10"]
    const pizzas = [ "pizza1" , "pizza2", "pizza3" , "pizza4" , "pizza5" ,"pizza6" , "pizza7", "pizza8" , "pizza9" , "pizza10", "pizza11", "pizza12"]
    const desserts = [ "dessert1" , "dessert2", "dessert3" , "dessert4" , "dessert5" ]
    
    return (
        <div style={{backgroundImage: `url(${require("./images/Menu/background4.jpg")})`  ,backgroundRepeat: 'no-repeat' }}>
            <h1 style={title}> Menu </h1>
            <Container fluid style={{ paddingTop:'10px', paddingBottom:'10px', borderRadius:'8px' ,}}>
                <h1 style={h1Style}>Our Burgers</h1>
                <DisplayComp foods={burgers} category='burgers'/>

                <h1 style={h1Style}>Our Pizzas</h1>
                <DisplayComp foods={pizzas}  category='pizzas'/>


                <h1 style={h1Style}>Our Desserts</h1>
                <DisplayComp foods={desserts}  category='desserts'/>


            </Container>
            <div style={{height:'200px'}}></div>
     
        </div>
    )
}

 const title={
    fontSize:'15.5vw',
    textAlign:'center',
    paddingTop:'50px',color:' #EB6353',
    fontStyle:'italic'
}

 const h1Style={
    marginTop:'35px',

    fontFamily: 'Oxygen , sansSerif'
 }


export default Menu
