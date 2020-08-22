import React from 'react'
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import '../App.css'

function Grid_meals() {
    return (
        <div>
                <Container fluid style={{ paddingTop:'10px', paddingBottom:'10px', backgroundColor:' #eaeded ', borderRadius:'8px', textAlign:'center'}}>
                        <h3 style={{color:' #e74c3c' , paddingTop:'5px', textDecoration:'underline', fontWeight:'bold'}}>What do you wanna order?</h3>
                        <Row style={{paddingTop:"19px"}}  xs={2} md={3} lg={6} >
                                <Col className="element" >
                                <img src={ require('./images/burger1.jpg') } alt=" not found" className="burger" />
                                <div className="middle">
                                        <div className="text">John Doe</div>
                                </div>
                                </Col>

                                <Col className="element">  
                                <img src={ require('./images/burger6.jpg') } alt=" not found" className="burger"/>
                                <div className="middle">
                                        <div className="text">John Doe</div>
                                </div></Col>

                                <Col className="element">
                                <img src={ require('./images/burger3.jpg') } alt=" not found" className="burger" />
                                <div className="middle">
                                        <div className="text">John Doe</div>
                                </div>
                                </Col>

                                <Col className="element">
                                <img src={ require('./images/burger4.jpg') } alt=" not found" className="burger"/>
                                <div className="middle">
                                        <div className="text">John Doe</div>
                                </div>
                                </Col>

                                <Col className="element box">
                                <img src={ require('./images/burger5.jpg') } alt=" not found" className="burger"/>
                                <div class="middle">
                                        <div className="text">John Doe</div>
                                </div>
                                </Col>   

                                <Col className="element" >
                                <img src={ require('./images/burger1.jpg') } alt=" not found" className="burger" />
                                <div className="middle">
                                        <div className="text">John Doe</div>
                                </div>
                                </Col>

                        </Row>
                        <a  href="#" style={{textAlign:'center', fontSize:'18px' }} >See more
                        <svg style={{marginLeft:'5px',fill: '#ffbb33'}} width="1em" height="1em" viewBox="0 0 16 16" class="bi
                        bi-arrow-right-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8.354 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L9.793 7.5H5a.5.5 0 0 0 0 1h4.793l-2.147 2.146z"/>
                        </svg>
                        </a>
                </Container>

            

        </div>
    )
}

export default Grid_meals
