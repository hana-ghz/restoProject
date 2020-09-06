import React, { useState} from 'react'
import {Card , ListGroup, ListGroupItem} from 'react-bootstrap';


function BuilderComp(props) {
    const {data} = props ;
    const max=2;
    let currentData =[false , false , false , false , false];

    const handleInputChange = (event ,i )=>{
        console.log(event.currentTarget)
        let isSelected = event.currentTarget.checked;
        let count = currentData.reduce((n , el)=>n+(el === true) , 0)
        console.log("length "+ count)
        console.log(isSelected)
        if(isSelected){
            if(count<max){
               
                currentData[i]=true
                console.log(currentData)
                console.log(event.currentTarget.checked)
            }
        }
       
    }

    


    const display= data.map((categ, index) => {

        const itemsShow= categ.list.map(( item , i) =>{
           
            return <ListGroupItem>{item} 
                               <input id={i}
                               type="checkbox" name="check" style={checkBoxStyle}
                               checked={currentData[i]}
                               onChange={(e , i )=>{handleInputChange (e ,i)}}
                               /> 
                    </ListGroupItem>
        })
    
        return(
         <Card style={cardStyle} >
            <Card.Img variant="top" src={require(`./images/Build/${categ.name}.jpg`) } style={cardImg} />
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
