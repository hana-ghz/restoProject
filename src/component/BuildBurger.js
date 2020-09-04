import React from 'react'
import '../App.css';
import BuilderComp from './BuilderComp';


function BuildBurger() {

    var data= [
        {
            "name":"buns",
            "list":["Regular Bread" ,"whole wheat bread" ,"Gluten free bread" ]
        } ,
        {
            "name":"protein",
            "list":["Beef" ,"Chicken Breast" ,"Black Beans" ]
        } ,
        {
            "name":"cheese",
            "list":["American Slice" ,"Chedaar" ,"Gruyére" ," Parmesan" ]
        },

        {
            "name":"sauces",
            "list":["Mayo" ,"BBQ" ,"Ketchup" ," Hummus" ]
        },

        {
            "name":"veggies",
            "list":["Tomatoes" ,"Pepper" ,"Lettuce" ,"Onions" ]
        }
    ]
    return (
        <> 
        <div style={{height:'50%'}}>
            <img id="buildPageImage" src={require("./images/Build/build2.jpg")} ></img>
            <h1 id="buildPageTitle"  > build your own burgers </h1>     
            <BuilderComp data={data}/>
            <div style={{height:'600px'}}></div>
 
        </div>
        <div style={{clear:'both'}}></div>

        </>
    
    )
}



export default BuildBurger
