import React from 'react'
import { Col , Form , Button  } from 'react-bootstrap';


function FormCart() {
    return (
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
    )
}

export default FormCart
