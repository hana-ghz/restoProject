import React ,{useState , useRef , useEffect}from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import '../App.css'

function DisplayComp(props) {
    const [nb , setNb] = useState (6)
    const moreRef = useRef()
    const lessRef = useRef()
    const {foods , category} = props

    // Show an element
    const show = (ref)=> {
	    ref.current.style.display = 'block';
    };

    // Hide an element
    const hide =  (ref) =>{
        ref.current.style.display = 'none';
    };

    function showMore(){
        setNb(foods.length)
        hide(moreRef)
        show(lessRef)
    }
    function showLess(){
        setNb(6)
        show(moreRef)
        hide(lessRef)
    }

    const foodsDisplay= foods.slice(0, nb).map((food , index) =>{

        return(
           
             <Col className="element "  key= {index}>

                    <div style={{textAlign:'center', marginBottom:'20px' }}>

                    <img src={ require(`./images/Menu/${category}/${food.split(" ")[0]}.jpg`) } alt=" not found" className="burger" />
                     <span className="text middle" ><strong> {food.split(" ")[1]} </strong>  <br/> {food.substring(food.split(" ")[0].length+food.split(" ")[1].length+food.split(" ")[2].length+3,food.length)} <br/> price: {food.split(" ")[2]}</span>
                     
                     <Button variant="warning" style={{height:'40px'}}> <img src={require("./images/chariot.png")} alt="not found" style={{height:'30px', width:'30px'}}></img> Command</Button>

                    </div>
                     
             </Col>        
       )
    })

    useEffect(() => {
       hide(lessRef)
    }, [])

    
    return(
    <React.Fragment>  
                
        <Row style={{paddingTop:"10px"}}  xs={2} md={3} lg={6} >
            {foodsDisplay}   
        </Row> 
        {console.log("here")} 

        <Button ref={moreRef} onClick={showMore} style={styleBtn}>show more</Button>
        <Button ref={lessRef} onClick={showLess} style={styleBtn}>show less</Button>

    </React.Fragment>
    
    )
}

const styleBtn={
    marginTop:'10px',
    backgroundColor:'#146CA3',
     border:'0px',
     marginLeft:'47%'
  }
  
  


export default DisplayComp
