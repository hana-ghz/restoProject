import React from 'react'
import { Carousel ,  Container} from 'react-bootstrap';
import './SliderComp.css';
import {   Button} from 'react-bootstrap';
import {Link } from 'react-router-dom';





function SliderComp() {
    const healthy= require('./images/healthy.jpg')
    const contest= require('./images/contest.jpg')
    const fastFood= require('./images/fastFood.jpg')

    return (

        <React.Fragment>
           
            <Carousel id="slider" >
                <Carousel.Item className="CarouselItem" >
                    <Link to="/ContestForm">

                        <img className="d-block w-100 image"
                            src={contest}
                            alt="Third slide"
                        />
                    </Link>

                    <Button id="participate" style={joinBtn}>participate</Button>
                    <Carousel.Caption>
                    <h1 className="d-sm-none d-md-block"> your chance to win a 100dt gift card</h1>
                    </Carousel.Caption>                
                </Carousel.Item>

                <Carousel.Item className="CarouselItem" >
                <img
                        className="d-block w-100 image"
                        src={healthy}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    <div className="container-fluid"><h3 className="caption"> healthy foods </h3></div> 
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="CarouselItem" >
                    <Link to="/BuildBurger">
                        <img
                            className="d-block w-100 image"
                            src={fastFood}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                        <div className="container-fluid"><h3 className="caption"> custom burgers </h3></div> 
                        </Carousel.Caption> 
                        
                        <Button style={btn}>Order Now</Button>
                    </Link>
                </Carousel.Item>
            </Carousel>


        </React.Fragment>

    )
}

const  joinBtn={
    position: "absolute",
     right:"30px",
     bottom: "0px",
    fontWeight:"bold",
    borderRadius:"0",
    color:"white",
    backgroundColor:"primary",
    textDecoration :"none"
  }
const btn= {
    position: "absolute",
    top:"30px",
    left:"60%",
    backgroundColor:"#00A6F6",
    border:"none",
    fontWeight: "bold"
  }

export default SliderComp
