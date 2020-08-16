import React from 'react'
import { Carousel ,  Button} from 'react-bootstrap';


function BurgerSlide() {

    const fastFood= require('./images/fastFood.jpg')

    return (
        <React.Fragment>
             <img
                    className="d-block w-100 image"
                    src={fastFood}
                    alt="Third slide"
                />
                <Carousel.Caption>
                   <div className="container-fluid"><h3 className="caption"> custom burgers </h3></div> 
                </Carousel.Caption>
                <Button className="btn" style={btn}>Order Now</Button> 

        </React.Fragment>
    )
}

const btn= {
    position: "absolute",
    top:"30px",
    left:"60%",
    backgroundColor:"#00A6F6",
    border:"none",
    fontWeight: "bold"
  }
  

export default BurgerSlide
