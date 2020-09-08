import React from 'react'
import TableCart from './TableCart'
import CardCart from './CardCart';
import {Row , Col, Container, Button, Form } from 'react-bootstrap';

function Cart2() {



    return (
        <div >
            
        <Row style={{marginTop:'30px'}} xs={1} md={1} lg={2} >
            <Col className="element" lg={6} style={{marginBottom:'20px'}}>
                <h3 style={{textAlign:'center', marginBottom:'20px'}}>Fill this form </h3>

                <Form >
                <Form.Group controlId="formGridAddress1">
                    <Form.Row>
                        <Col>
                        <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                        <Form.Control placeholder="Last name" />
                        </Col>
                    </Form.Row>                     
                </Form.Group>


                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGroupEmail">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control type="phone" placeholder="Enter phone" />
                </Form.Group>
                <Form.Text className="text-muted">
                    Payment on delivery 
                </Form.Text>

                <Button style={{marginTop:'15px'}} >
                        Submit
                </Button>            
            </Form>

            </Col>
           
            <Col className="element" lg={6} >
                <div className="table-fixed">
                    <TableCart/>
                </div>
                <CardCart/>
            </Col>

            

        </Row>

        </div>
    )
}

export default Cart2
