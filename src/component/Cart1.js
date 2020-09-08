import React from 'react'
import {Row , Col, Container, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Cart1() {




    return (
        <div>
            
        <Container  fluid >
            <Row>
                <Col style={{textAlign:'center'}}>
                <img src={require("./images/emptyCart.png")} alt='not found' style={{width:'100%'}}/>
                </Col>
                <Col style={{paddingTop:'50px', paddingBottom:'50px'}}>
                <Link to="/Menu" id="toMenu">Go and pick something</Link>
                </Col>
            </Row>
            
            
        </Container>
        </div>
    )
}

export default Cart1
