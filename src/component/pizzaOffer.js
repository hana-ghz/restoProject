import React from 'react';
import './pizzaOffer.css';
import { Row, Col,Container } from 'react-bootstrap';

function pizzaOffer() {
    return (
        <div className="containerpizza">
            <div style={{height:'70px'}}></div>
           
            <img src={require('./images/pizzaOffer1.jpg')} alt='pizzaOffer' className="pizzaImg"></img>
            <Container fluid style={{backgroundColor:'#eaeded'}}>
                <Row style={{margin:'0', padding:'0'}} xs={1} md={2} lg={2}>
                    <Col className="element">
                        <h1>Din Din dindindin dirin dirin</h1>
                    </Col>
                    <Col className="element">
                    <h1>What does the fox sayy</h1>
                    </Col>
                </Row> 
            </Container>
        </div>
    )
}


export default pizzaOffer
