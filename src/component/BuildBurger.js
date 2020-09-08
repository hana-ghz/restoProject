import React ,{useState} from 'react'
import '../App.css';
import BuilderComp from './BuilderComp';
import { Container , Row} from 'react-bootstrap';

function BuildBurger() {



    var data= [
        {
            "name":"buns",
            "list":["Regular Bread" ,"whole wheat bread" ,"Gluten free bread" ],
            "number":1,
            "price":1000
        } ,
        {
            "name":"protein",
            "list":["Beef" ,"Chicken Breast" ,"Black Beans" ],
            "number":2,
            "price":2500
        } ,
        {
            "name":"cheese",
            "list":["American Slice" ,"Chedaar" ,"Gruyére" ," Parmesan" ],
            "number":2,
            "price":1500
        },

        {
            "name":"sauces",
            "list":["Mayo" ,"BBQ" ,"Ketchup" ," Hummus" ],
            "number":4,
            "price":750

        },

        {
            "name":"veggies",
            "list":["Tomatoes" ,"Pepper" ,"Lettuce" ,"Onions" ],
            "number":4,
            "price":500
        }
    ]
    return (
        <div > 
        <img id="buildPageImage" src={require("./images/Build/build2.jpg")} ></img>
        <Container style={{ background:'#eaeded', textAlign:'center'}} >
            
            <h1 id="buildPageTitle"  > build your own burgers </h1>     

            <p style={{color:'grey', textAlign:'center',margin:'0'}}>Cause we believe that a happy customer is a customer who decides what he wants <br/> We give even the choice to compose your burger piece by piece with :<br/> *Bun <br/> *Protein<br/> *Cheese <br/> *Sauces<br/>*Veggies </p>
            
            <h2 style={{color:'#DE9967', textAlign:'center',marginTop:'15px'}}>Enjoy your Burger</h2>

            <BuilderComp data={data} />
            
        
 
        </Container>
     

        </div>
    
    )
}



export default BuildBurger
