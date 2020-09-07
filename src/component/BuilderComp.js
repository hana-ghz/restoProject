import React, {useState} from 'react'
import {Card , ListGroup, ListGroupItem, Container,Col, Row, Button} from 'react-bootstrap';


function BuilderComp(props) {
    const {data} = props ;
    const [currentData,setCurrentData]= useState([0,0,0,0,0])
    var currentData1 =[0 , 0 , 0 , 0 , 0];
    const [price,setPrice]= useState(0)


    const handleInputChange = (event ,ind,max ,pr)=>{
        console.log(event.currentTarget)
        let isSelected = event.currentTarget.checked;
        currentData1=currentData
        let count = currentData1.reduce((n , el)=>n+(el === true) , 0)
        console.log("length "+ count)
        console.log(isSelected)
        if(!isSelected){
            console.log(ind)
                currentData[ind]--
                console.log(event.currentTarget)
                console.log(currentData)
                console.log(event.currentTarget.checked)
                setPrice(price-pr)
              
        } else if(currentData1[ind]<max){

            console.log(ind)
            currentData1[ind]++
            setCurrentData(currentData1)
            console.log(event.currentTarget)
            console.log(currentData)
            console.log(event.currentTarget.checked)  
            setPrice(price+pr)
            
        }else{
            console.log("nothing happens")
            event.currentTarget.checked=false

        }
    }


    const display= data.map((categ, index) => {

        const itemsShow= categ.list.map(( item , i) =>{
           console.log("the index "+i)

            return <ListGroupItem className="ItemStyle" >{item} 
                               <input id={i}
                               type="checkbox" name="check" style={checkBoxStyle}
                               
                               onChange={(e)=>{handleInputChange (e ,index,categ.number,categ.price)}}
                               /> 
                    </ListGroupItem>
        })
    
        return(
            <Col>
            <Card style={cardStyle} >
            <Card.Img variant="top" src={require(`./images/Build/${categ.name}.jpg`) } style={cardImg}/>
            <Card.Body style={{height:'30px' , position: 'relative' , boxSizing:'border-box'}}> 
                <Card.Title style={cardTitle}> {categ.name}: {categ.price} </Card.Title>
            </Card.Body>
            
            <ListGroup className="list-group-flush">
                {itemsShow}
            </ListGroup>
         </Card> 
            </Col>
         
        )
    
    })

    return (

        <Container fluid>
            <Row lg={3} md={2} xs={1}>
                <React.Fragment>{display}</React.Fragment>
                <div style={{marginTop:'30px',color:'#dc3545'}}>
                <h4>Price: </h4>
                <input type="text" value={price} onChange={(e)=> setPrice=(e.target.value)} readOnly></input>
                <br/>
                <Button variant="warning" style={{height:'40px',marginTop:'20px',marginBottom:'10px'}}> <img src={require("./images/chariot.png")} alt="not found" style={{height:'30px', width:'30px'}}></img> Command</Button>
                </div>
                
            </Row>
           
        </Container>
        
       
    )
}

const cardImg={
    height:'220px'
}


const cardStyle={
  
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
