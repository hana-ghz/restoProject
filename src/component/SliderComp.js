import React from 'react'
import { Carousel ,  Container} from 'react-bootstrap';
import './SliderComp.css';
import {   Button} from 'react-bootstrap';
import {Link } from 'react-router-dom';


function SliderComp() {
    const healthy= require('./images/abc.jpg')
    const contest= require('./images/contest1.jpg')
    const fastFood= require('./images/burger2.jpg')

    return (

        <React.Fragment>
           
            <Carousel id="slider" >

                <Carousel.Item className="CarouselItem" >
                    <Link to="/BuildBurger">
                        <img
                            className="d-block w-100 image"
                            src={fastFood}
                            alt="Third slide"
                        />
                        
                    </Link>
                </Carousel.Item>

                <Carousel.Item className="CarouselItem" >
                    <Link to="/HealthyFood">
                    <img
                        className="d-block w-100 image"
                        src={healthy}
                        alt="Second slide"
                    />
                    </Link>
                </Carousel.Item>

                <Carousel.Item className="CarouselItem" >
                    <Link to="/ContestForm">

                        <img className="d-block w-100 image"
                            src={contest}
                            alt="Third slide"
                        />
                    </Link>

                    
                    <Carousel.Caption>
                    <h1 className="d-sm-none d-md-block"> your chance to win a 100dt gift card</h1>
                    </Carousel.Caption>                
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


export default SliderComp
