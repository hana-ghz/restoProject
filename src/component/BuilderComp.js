import React from 'react'
import {Card , ListGroup, ListGroupItem} from 'react-bootstrap';


function BuilderComp(props) {
    const {data} = props 
    

    const display= data.map((categ, index) => {
        
        const itemsShow= categ.list.map(( item , i) =>{
            return <ListGroupItem>{item} <input type="checkbox" name="check" style={checkBoxStyle}/> </ListGroupItem>
        })
    
        return(
         <Card style={cardStyle} >
            <Card.Img variant="top" src={require(`./images/Build/${categ.name}.jpg`)}  />
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
    float:'right' , padding:'10px'
}
export default BuilderComp
