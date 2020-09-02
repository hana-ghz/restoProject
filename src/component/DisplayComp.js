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
           
             <Col className="element"  key= {index}>
        
                <img src={ require(`./images/Menu/${category}/${food}.jpg`) } alt=" not found" className="burger" />
                <div className="middle">
                    <div className="text">John Doe</div>
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
    backgroundColor:'#146CA3',
     border:'0px'
  }
  
  


export default DisplayComp
