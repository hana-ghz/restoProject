import React  ,  {useState,useEffect}from 'react';
import { Button , Table } from 'react-bootstrap';
import data from '../data.json';


function TableCart() {
    const [meals, setmeals] = useState([])

    useEffect(() => {
        setmeals(data)
    }, [])
    const orders= meals.map(function(meal){ return meal.test===true ? `${meal.name} ${meal.number} ${meal.price} ${meal.cat}`: ''}).filter(function(meal){return(meal!=='')})

    // const sendCommand = (order)=>{
    //     let cat= order.split(" ")[3]
    //     let num= order.split(" ")[1]
    //     const index = meals.findIndex(meal => ((meal.category === cat)&& (meal.number === num))  )
    //     let newArray = [...meals]
    //     newArray[index] = {...newArray[index], test:false}
    //     setmeals(newArray)
    
    // }

    const sendCommand = ( order)=>{
        let cat= order.split(" ")[3]
        let num= order.split(" ")[1]
        const index = meals.findIndex((meal) =>{ return((meal.cat == cat)& (meal.number == num)) } )
        let newArray = [...meals]
        newArray[index] = {...newArray[index], test:false}
        setmeals(newArray)
    
    }


    const  ordersDisplay= orders.map((order)=> {

       
        return(
            <tr>
            <td>
                <Button onClick={( ) =>{sendCommand( order)}}
                style={{backgroundColor: 'transparent' ,border:'none'}}>
                    <svg style={svgCart} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle"  xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                      </svg>

                </Button>
                
            </td>
            <td>{order.split(" ")[0] + order.split(" ")[1]}</td>
            <td>{order.split(" ")[2]  }</td>
            <td>
            <input type="number"  className="NumericInput"></input>

            </td>
        </tr>
        )
    })
    return (
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
            {ordersDisplay}
         
        </tbody>
    </Table>
    )
}


const svgCart ={
    fill: 'red',
    height: '20px',
    width: '20px',
    paddingRight: 'auto',
    fontWeight: 'bold',
    }
   

export default TableCart
