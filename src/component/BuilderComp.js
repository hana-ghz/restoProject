import React, { useState, useEffect} from 'react'
import {Card , ListGroup, ListGroupItem} from 'react-bootstrap';


function BuilderComp(props) {
    const {data} = props ;
    const max=2;
    var currentData =[0 , 0 , 0 , 0 , 0];


    const handleInputChange = (event ,ind )=>{
        console.log(event.currentTarget)
        let isSelected = event.currentTarget.checked;
        let count = currentData.reduce((n , el)=>n+(el === true) , 0)
        console.log("length "+ count)
        console.log(isSelected)
        if(isSelected){
            console.log(ind)
                currentData[ind]--
                console.log(currentData)
                console.log(event.currentTarget.checked)
            
        } else if(currentData[ind]<max){
            
            event.currentTarget.checked=false
            console.log(ind)
            currentData[ind]++
            console.log(currentData)
            console.log(event.currentTarget.checked)
        }
       
    }



    const display= data.map((categ, index) => {

        const itemsShow= categ.list.map(( item , i) =>{
           console.log("the index "+i)

            return <ListGroupItem>{item} 
                               <input id={i}
                               type="checkbox" name="check" style={checkBoxStyle}
                               
                               onChange={(e)=>{handleInputChange (e ,index)}}
                               

                               /> 
                    </ListGroupItem>
        })
    
        return(
         <Card style={cardStyle} >
            <Card.Img variant="top" src={require(`./images/Build/${categ.name}.jpg`) } style={cardImg}/>
            <Card.Body style={{height:'30px' , position: 'relative' , boxSizing:'border-box'}}> 
                <Card.Title style={cardTitle}> {categ.name}</Card.Title>
            </Card.Body>
            
            <ListGroup className="list-group-flush">
                {itemsShow}
            </ListGroup>
         </Card> 
        )
    
    })

    return (
       <React.Fragment>{display}</React.Fragment>
    )
}

const cardImg={
    height:'220px'
}


const cardStyle={
    width: '25%' ,
    float: 'left',
    margin:'3%',
    boxSizing:'border-box'
   }

const cardTitle ={
   fontFamily: 'Oxygen , sansSerif',
   color:' #dc3545',
   fontSize:'1.5em', 
   position: 'absolute',
   top:'10px',
   left: '33%' , 
   padding:'0px',
   textTransform:'capitalize'
}

const checkBoxStyle={
    float:'right' , padding:'15px'
}
export default BuilderComp
