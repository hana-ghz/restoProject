import React from 'react'
import { Carousel ,  Container} from 'react-bootstrap';
import { hydrate } from 'react-dom';
import BurgerSlide from './BurgerSlide';
import ContestSlide from './ContestSlide';


function SliderComp() {
    const healthy= require('./images/healthy.jpg')

    return (

        <Carousel >
            <Carousel.Item>
                <BurgerSlide/>
            </Carousel.Item>

            <Carousel.Item >
            <img
                    className="d-block w-100 image"
                    src={healthy}
                    alt="Second slide"
                />
                <Carousel.Caption>
                   <div className="container-fluid"><h3 className="caption"> healthy foods </h3></div> 
                </Carousel.Caption>
            </Carousel.Item>

        <Carousel.Item >
               <ContestSlide/>
         </Carousel.Item>
      </Carousel>
    )
}

export default SliderComp
