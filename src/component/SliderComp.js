import React from 'react'
import { Carousel } from 'react-bootstrap';
import './SliderComp.css';
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
                </Carousel.Item>

                

                
            </Carousel>

        </React.Fragment>

    )
}



export default SliderComp
