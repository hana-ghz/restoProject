import React from 'react'
import Container from 'react-bootstrap/Container';
import { Row, Col , Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../App.css'
import data from '../data.json'

function Grid_meals() {
    return (

        <div>
                <Container fluid style={{ paddingTop:'10px', paddingBottom:'10px', backgroundColor:' #eaeded ', borderRadius:'8px', textAlign:'center'}}>
                        <h3 style={{color:' #EB5241' , paddingTop:'5px', textDecoration:'underline', fontWeight:'bold'}}>What do you wanna order?</h3>
                        <Row style={{paddingTop:"19px" }}  xs={2} md={3} lg={6} >
                                <Col className="element" style={{marginBottom:'20px'}} >

                                <img src={ require('./images/Menu/burgers/'+data.map(function(meal){ return (meal.cat==="burger" && meal.number===1) ? `${meal.name + meal.number}`: ''}).filter(function(meal){return(meal!=='')})+'.jpg') } alt=" not found" className="burger" />

                                <span className="text middle" ><strong>{data.map(function(meal){ return (meal.cat==="burger" && meal.number===1) ? `${meal.name}`: ''}).filter(function(meal){return(meal!=='')})} </strong><br/> 
                                {data.map(function(meal){ return (meal.cat==="burger" && meal.number===1) ? `${meal.descp}`: ''}).filter(function(meal){return(meal!=='')})}<br/> 
                                {data.map(function(meal){ return (meal.cat==="burger" && meal.number===1) ? `price: ${meal.price}`: ''}).filter(function(meal){return(meal!=='')})}
                                </span>

                                <Button variant="warning" style={{height:'40px'}}> <img src={require("./images/chariot.png")} alt="not found" style={{height:'30px', width:'30px'}}></img> Command</Button>

                                </Col>

                                <Col className="element" style={{marginBottom:'20px'}}>  
                               

                                <img src={ require('./images/Menu/pizzas/'+data.map(function(meal){ return (meal.cat==="pizza" && meal.number===11) ? `${meal.name + meal.number}`: ''}).filter(function(meal){return(meal!=='')})+'.jpg') } alt=" not found" className="burger" />

                                <span className="text middle" ><strong>{data.map(function(meal){ return (meal.cat==="pizza" && meal.number===11) ? `${meal.name}`: ''}).filter(function(meal){return(meal!=='')})} </strong><br/> 
                                {data.map(function(meal){ return (meal.cat==="pizza" && meal.number===11) ? `${meal.descp}`: ''}).filter(function(meal){return(meal!=='')})}<br/> 
                                {data.map(function(meal){ return (meal.cat==="pizza" && meal.number===11) ? `price: ${meal.price}`: ''}).filter(function(meal){return(meal!=='')})}
                                </span>

                                <Button variant="warning" style={{height:'40px'}}> <img src={require("./images/chariot.png")} alt="not found" style={{height:'30px', width:'30px'}}></img> Command</Button>



                                </Col>

                                <Col className="element" style={{marginBottom:'20px'}}>
                                
                                <img src={ require('./images/Menu/desserts/'+data.map(function(meal){ return (meal.cat==="dessert" && meal.number===4) ? `${meal.name + meal.number}`: ''}).filter(function(meal){return(meal!=='')})+'.jpg') } alt=" not found" className="burger" />

                                <span className="text middle" ><strong>{data.map(function(meal){ return (meal.cat==="dessert" && meal.number===4) ? `${meal.name}`: ''}).filter(function(meal){return(meal!=='')})} </strong><br/> 
                                {data.map(function(meal){ return (meal.cat==="dessert" && meal.number===4) ? `${meal.descp}`: ''}).filter(function(meal){return(meal!=='')})}<br/> 
                                {data.map(function(meal){ return (meal.cat==="dessert" && meal.number===4) ? `price: ${meal.price}`: ''}).filter(function(meal){return(meal!=='')})}
                                </span>

                                <Button variant="warning" style={{height:'40px'}}> <img src={require("./images/chariot.png")} alt="not found" style={{height:'30px', width:'30px'}}></img> Command</Button>



                                </Col>

                                <Col className="element" style={{marginBottom:'20px'}}>
                                <img src={ require('./images/Menu/burgers/'+data.map(function(meal){ return (meal.cat==="burger" && meal.number===4) ? `${meal.name + meal.number}`: ''}).filter(function(meal){return(meal!=='')})+'.jpg') } alt=" not found" className="burger" />

                                <span className="text middle" ><strong>{data.map(function(meal){ return (meal.cat==="burger" && meal.number===4) ? `${meal.name}`: ''}).filter(function(meal){return(meal!=='')})} </strong><br/> 
                                {data.map(function(meal){ return (meal.cat==="dessert" && meal.number===4) ? `${meal.descp}`: ''}).filter(function(meal){return(meal!=='')})}<br/> 
                                {data.map(function(meal){ return (meal.cat==="dessert" && meal.number===4) ? `price: ${meal.price}`: ''}).filter(function(meal){return(meal!=='')})}
                                </span>

                                <Button variant="warning" style={{height:'40px'}}> <img src={require("./images/chariot.png")} alt="not found" style={{height:'30px', width:'30px'}}></img> Command</Button>


                                </Col>

                                <Col className="element box" style={{marginBottom:'20px'}}>
                                <img src={ require('./images/Menu/burgers/'+data.map(function(meal){ return (meal.cat==="burger" && meal.number===5) ? `${meal.name + meal.number}`: ''}).filter(function(meal){return(meal!=='')})+'.jpg') } alt=" not found" className="burger" />

                                <span className="text middle" ><strong>{data.map(function(meal){ return (meal.cat==="burger" && meal.number===5) ? `${meal.name}`: ''}).filter(function(meal){return(meal!=='')})} </strong><br/> 
                                {data.map(function(meal){ return (meal.cat==="burger" && meal.number===5) ? `${meal.descp}`: ''}).filter(function(meal){return(meal!=='')})}<br/> 
                                {data.map(function(meal){ return (meal.cat==="burger" && meal.number===5) ? `price: ${meal.price}`: ''}).filter(function(meal){return(meal!=='')})}
                                </span>

                                <Button variant="warning" style={{height:'40px'}}> <img src={require("./images/chariot.png")} alt="not found" style={{height:'30px', width:'30px'}}></img> Command</Button>

                                </Col>   

                                <Col className="element" style={{marginBottom:'20px'}}>
                                <img src={ require('./images/Menu/pizzas/'+data.map(function(meal){ return (meal.cat==="pizza" && meal.number===6) ? `${meal.name + meal.number}`: ''}).filter(function(meal){return(meal!=='')})+'.jpg') } alt=" not found" className="burger" />

                                <span className="text middle" ><strong>{data.map(function(meal){ return (meal.cat==="pizza" && meal.number===6) ? `${meal.name}`: ''}).filter(function(meal){return(meal!=='')})} </strong><br/> 
                                {data.map(function(meal){ return (meal.cat==="pizza" && meal.number===6) ? `${meal.descp}`: ''}).filter(function(meal){return(meal!=='')})}<br/> 
                                {data.map(function(meal){ return (meal.cat==="pizza" && meal.number===6) ? `price: ${meal.price}`: ''}).filter(function(meal){return(meal!=='')})}
                                </span>

                                <Button variant="warning" style={{height:'40px'}}> <img src={require("./images/chariot.png")} alt="not found" style={{height:'30px', width:'30px'}}></img> Command</Button>

                                </Col>

                        </Row>
                        <Link  to="/Menu" style={{textAlign:'center', fontSize:'18px' }} >See more
                        <svg style={{marginLeft:'5px',fill: '#ffbb33'}} width="1em" height="1em" viewBox="0 0 16 16" class="bi
                        bi-arrow-right-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8.354 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L9.793 7.5H5a.5.5 0 0 0 0 1h4.793l-2.147 2.146z"/>
                        </svg>
                        </Link>
                </Container>
                
        </div>
    )
}

export default Grid_meals
