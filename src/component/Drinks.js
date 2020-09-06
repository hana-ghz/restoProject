import React from 'react'
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'; 

function Drinks() {
    return (
       <Container fluid>
           <Row>
                 <Col xs={6} md={7} style={{padding:'0',overflow:'hidden'}}>
                       <Link to='/pizzaOffer'><img src={ require('./images/pizza.jpg') } alt=" not found" className="drink_img"/></Link>
                       
                 </Col>
                 <Col xs={6} md={5} style={{padding:'0', overflow:'hidden'}}>
                 <Link to='/Menu'><img src={ require('./images/coca.jpg') } alt=" not found" className="drink_img"/></Link>                 </Col>
           </Row>

       </Container>
    )
}

export default Drinks
