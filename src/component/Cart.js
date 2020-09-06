import React from 'react';
import './Cart.css';
import {Row , Col , Form , Button , Table , Card} from 'react-bootstrap';
import {AiOutlinePlus , AiOutlineMinus} from "react-icons/ai";
import NumericInput from 'react-numeric-input';

function Cart() {

    return (
        <>
        <div >
            <div style={{height:'100px'}}></div>
            <h1 id="titleCart">Your cart is empty.<a href="/Menu" id="toMenu">pick something you enjoy</a> </h1>
        </div>
        <div style={{clear:'both'}}></div>
        <Row style={{margin:'0px',padding:'0px'}} xs={1} md={1} lg={2} >
            <Col className="element" lg={6} >
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

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
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

            <Table className="table ">
                <thead>
                    <tr>
                        <th>
                           
                        </th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Button 
                            style={{backgroundColor: 'transparent' ,border:'none'}}>
                                <svg style={svgCart} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle"  xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                  </svg>

                            </Button>
                            
                        </td>
                        <td>pizza1</td>
                        <td>100dt</td>
                        <td>
                            <AiOutlineMinus />
                            <input type="text" className="inputTable" value={0} ></input>
                            <AiOutlinePlus/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button 
                            style={{backgroundColor: 'transparent' ,border:'none'}}>
                                <svg style={svgCart} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </Button>
                        </td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>
                        <NumericInput  className="NumericInput" min={0} max={100} value={0}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button 
                            style={{backgroundColor: 'transparent' ,border:'none'}}>
                                <svg style={svgCart} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </Button>
                        </td>
                        <td>abc</td>
                        <td>zae</td>
                        <td>@aez</td>
                    </tr>
                    <tr>
                        <td>
                            <Button 
                            style={{backgroundColor: 'transparent' ,border:'none'}}>
                                <svg style={svgCart} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </Button>
                        </td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    
                </tbody>
            </Table>
            </div>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                   
                </Card.Body>
            </Card>
          
            </Col>
        </Row>


        <div style={{height:'500px'}}></div>

        </>
    )
}

const svgCart ={
fill: 'red',
height: '20px',
width: '20px',
paddingRight: 'auto',
fontWeight: 'bold',
}

export default Cart
