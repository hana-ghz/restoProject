import React from 'react'
import { Container } from 'react-bootstrap'
import DisplayComp from './DisplayComp';


function HealthyFood() {

    const salads = [ "salad1", "salad2", "salad3", "salad4", "salad5", "salad6", "salad7", "salad8"];

    return (
        <div>
            <div style={{height:'70px'}}>Healthy Food Page</div>
            <img src={require('./images/healthyFoodImg1.jpg')} alt="not found" style={{width:'100%', height:'400px'}}></img>
            <Container style={{background:'#eaeded' , paddingTop:'10px',paddingBottom:'10px'}}>

                <h2 style={{color:'#30B55C', textAlign:'center'}}>we encourage you to live a healthy lifestyle</h2>

                <p style={{color:'grey', textAlign:'center',margin:'0'}}>Healthy eating means eating a variety of foods that give you the nutrients you need to :<br/> *Maintain your health <br/> *Feel good <br/> *Have energy <br/> And that's what we provide, so choose your healthy meal for today and dont forget: <br/>Always stay on track.</p>
                <h2 style={{color:'#30B55C', textAlign:'center'}}>Enjoy your salad</h2>
                <DisplayComp foods={salads}  category='salads'/>


            </Container>
        </div>
    )
}

export default HealthyFood
