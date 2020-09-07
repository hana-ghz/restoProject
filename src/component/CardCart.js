import React from 'react';
import {Table , Card } from 'react-bootstrap';


function CardCart() {
    return (
        <Card style={{ width: '18rem'  , position:'relative'}}>
             <Card.Body style={cardBody} id="cardBody">
                    <Card.Title>The Bill</Card.Title>
                   <Table style={cardTable}  id="cardTable">
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
const cardTable ={
   
        width: '100%',
        position: 'relative',
        bottom:'0px',
    
}
    
export default CardCart
