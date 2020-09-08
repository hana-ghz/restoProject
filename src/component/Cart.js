import React ,{useState} from 'react';
import './Cart.css';
import {Button, Container } from 'react-bootstrap';
import Cart1 from "./Cart1"
import Cart2 from "./Cart2"



function Cart() {


    const [haveItems,setHaveItems]= useState("DONT HAVE ITEMS")
        
        return (

            haveItems=== "HAVE ITEMS" ? (
            
                <>
                <div style={{height:'70px'}}></div>
    
                <Button onClick={()=> haveItems==="HAVE ITEMS" ? setHaveItems("DONT HAVE ITEMS") : setHaveItems("HAVE ITEMS")}>{haveItems}</Button>
                <Cart1 />)
                </>
                
                )    
            
            : (
            
                <Container style={{backgroundColor:'#eaeded'}}>
            <div style={{height:'70px'}}></div>
             <h1 className="cart2-header">Here's your cart </h1>
            <Cart2 />
            </Container>
    
            )
     
    )
}




export default Cart
