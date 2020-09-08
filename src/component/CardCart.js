import React from 'react';
import {Table , Card } from 'react-bootstrap';


function CardCart() {
    return (
        <Card style={{ width: '100%' ,marginBottom:'20px' }}>
             <Card.Body style={cardBody} id="cardBody">
                    <Card.Title style={{textAlign:'center', fontWeight:'bold',fontSize:'25px'}}>The Bill</Card.Title>
                   <Table  striped bordered hover size="md" style={{marginBottom:'0'}}>
                       <tbody>
                        <tr>
                            <td  className="rowTitle">Subtotal</td>
                            <td>00000 dt </td>
                        </tr>
                       <tr>                              
                            <td className="rowTitle" > Delivery Fees </td>
                            <td> 00000 dt </td>
                       </tr>
                        <tr>
                            <td className="rowTitle"> Final Total</td>
                            <td> 00000 dt </td>
                        </tr>    
                          
                       </tbody>
                      
                   </Table>
                    
                                    
                </Card.Body>
            </Card>
    )
}



const  cardBody= { 
    width: '100%' , 
    padding:'0', 
    margin : '0' ,
    positon:'absolute' , bottom: '0'

}

export default CardCart
