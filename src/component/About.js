import React from 'react'
import { Row, Col,Container } from 'react-bootstrap';


function About() {
    return (
        <div className='container' style={{backgroundColor:'#eaeded'}}>
            <div style={{height:'68px'}}></div>
            <img src={require('./images/logo4.png')} alt='the logo of the resto' />
            <p style={{fontSize:'20px'}}> Un restaurant est un établissement de commerce où l'on sert des plats préparés et des boissons à consommer sur place, en échange d'un paiement.
            La nourriture y est généralement préparée par un chef cuisinier. Le terme couvre une multiplicité de lieux et une grande diversité des types de cuisines, tant locales qu'étrangères. Les restaurants sont parfois le dispositif réservé au service des repas au sein d'une plus grande entité (hôtel, université, aéroport...), on parle alors de restaurant collectif par opposition au site de cuisine. Ils peuvent aussi être associés à une activité de traiteur ou d'épicerie.
            </p> 
    
            <Container fluid >

                        <Row style={{margin:'0px',padding:'0px'}} xs={1} md={2} lg={2} >
                                <Col className="element" >
                                <img src={require('./images/restaurant.jpg')} alt='the restaurant' style={{width:'100%'}}></img>
                                </Col>
                                <Col className="element" >
                                <p style={{fontSize:'20px'}}> Un restaurant est un établissement de commerce où l'on sert des plats préparés et des boissons à consommer sur place, en échange d'un paiement.
                                La nourriture y est généralement préparée par un chef cuisinier. Le terme couvre une multiplicité de lieux et une grande diversité des types de cuisines, tant locales qu'étrangères. Les restaurants sont parfois le dispositif réservé au service des repas au sein d'une plus grande entité (hôtel, université, aéroport...), on parle alors de restaurant collectif par opposition au site de cuisine. Ils peuvent aussi être associés à une activité de traiteur ou d'épicerie.
                                </p> 
                                </Col>
                        </Row>
                      
            </Container>

        </div>
    )
}

export default About
