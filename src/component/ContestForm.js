import React from 'react';
import './ContestFrom.css';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

function ContestForm() {
    return (
        <div >
            <div style={{height:'60px'}}></div>
            <div className='the_contest'>

                <Container fluid style={{ paddingTop:'10px', paddingBottom:'10px'}}>

                    <Row style={{margin:'0px',padding:'0px'}} xs={1} md={3} lg={3} >
                        <Col className="element"  >
                        <h1 className='contestHeader'>Shoot & Win</h1>
                        <div style={{background:'#FFA137', opacity:'0.8', borderRadius:'15px'}}>
                            <p className='contestDescription'>In our contest , all you have to do is to show us your photography skills by taking some beautiful photos to your meals and uploading it in this page... And every week a winner with get 100dt prize.
                                we're waiting for you to blow our minds...</p>
                        </div>
                        
                        </Col>

                        <Col></Col>


                        <Col className="element" style={{fontStyle:'bold', fontSize:'18px'}}>
                        <h1 className='formHeader'>Fill this form to participate</h1>
                            <Form>
                            <Form.Group controlId="formControl" style={{backgroundColor:'#eaeded', opacity:'0.9' ,paddingBottom:'0', padding:'2px', borderRadius:'8px'}}>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail"  style={{backgroundColor:'#eaeded', opacity:'0.9' , padding:'2px', paddingBottom:'0', borderRadius:'8px'}}>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            
                            <Form.Group controlId="formBasicCheckbox"  style={{backgroundColor:'#eaeded', opacity:'0.9' , padding:'2px', paddingBottom:'0', borderRadius:'8px'}}>
                                <Form.Check type="checkbox" label="Accept the contest conditions" />
                            </Form.Group>

                            <Form.Group  style={{backgroundColor:'#eaeded', paddingBottom:'0', padding:'2px', opacity:'0.9' , borderRadius:'8px'}}>
                                <Form.File accept=".jpg , .png" id="exampleFormControlFile1" label="Select your image" />
                            </Form.Group>
                  

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
 
                            </Form>



                        </Col>

                    </Row>

                </Container>
                <div style={{height:'80px'}}></div>



            </div>
        </div>
    )
}

export default ContestForm
