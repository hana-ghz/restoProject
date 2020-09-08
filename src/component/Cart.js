import React from 'react';
import './Cart.css';
import {Row , Col } from 'react-bootstrap';
import FormCart from './FormCart'
import TableCart from './TableCart'
import CardCart from './CardCart';



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
                <FormCart/>
            </Col>
           
           
           
            <Col className="element" lg={6} >
                <div className="table-fixed">
                    <TableCart/>
                </div>
          
                <CardCart/>
            </Col>
        </Row>


        <div style={{height:'500px'}}></div>

        </>
    )
}




export default Cart
