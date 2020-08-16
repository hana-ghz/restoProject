import React from 'react'
import { Carousel ,  Button} from 'react-bootstrap';

function ContestSlide() {

    const contest= require('./images/contest.jpg')

    return (
        <React.Fragment>
                <img
                    className="d-block w-100 image"
                    src={contest}
                    alt="Third slide"
                />
                <Carousel.Caption>
                   <h1>your chance to win a 100dt gift card</h1>
                </Carousel.Caption>
                <Button style={joinBtn}>participate</Button>
        </React.Fragment>
    )
}


const  joinBtn={
    position: "absolute",
    right:"0px",
    bottom: "0px",
    fontWeight:"bold",
    borderRadius:"0"
  }
export default ContestSlide
