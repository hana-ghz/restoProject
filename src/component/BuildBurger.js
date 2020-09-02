import React from 'react'
import {Card , ListGroup, ListGroupItem} from 'react-bootstrap';

import '../App.css';


function BuildBurger() {
    return (
    <div>
        <img id="buildPageImage" src={require("./images/Build/build2.jpg")}></img>
        <h1 id="buildPageTitle"  > build your own burgers </h1>
        <Card style={{ width: '18rem' }} className="container">
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
    </Card>
        <div style={{height:'400px'}}></div>
 
    </div>
    )
}


export default BuildBurger
