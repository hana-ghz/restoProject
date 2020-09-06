import React, {useState, useEffect} from 'react'
import './OurMap.css'
import { Row, Col, Form,Button, Container } from 'react-bootstrap';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
import {Map,TileLayer, Marker, Popup} from 'react-leaflet';



function OurMap() {
    

    const [position, setPosition]= useState({ lat:36.82145516982224, lng:10.173152759645232});

    const [zoom , setZoom]= useState(11);
    const position1= [36.841729951552,10.19743211564804];
    const position2= [36.82145516982224,10.173152759645232];
    const position3= [36.77035154768671,10.23157027867596];
    const [larg, setLarg]=useState(0)
    const [long, setLong]=useState(0)
    const [checked, setChecked] = useState(false);
    const [haveLocation,setHaveLocation]= useState(false);

    const myIcon= L.icon({
        iconUrl: require('./images/burger.png') ,
        iconSize: [30,30],
        popupAnchor:[-7,-15]
    });
  
    const myIcon1= L.icon({
        iconUrl: require('./images/marker.png') ,
        iconSize: [30,30],
        popupAnchor:[-7,-15]
    });


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLarg(position.coords.latitude);
            setLong(position.coords.longitude);
            console.log(position.coords.latitude, position.coords.longitude);
            setHaveLocation(true);
          });
    },[])

    function CheckTheBox(){
        return(
            haveLocation ? setChecked(!checked) : (alert('Your have to allow the location detection to use this option, reload the page') )
        )
     }

    return (
        <div>
            <div style={{height:'60px'}}></div>

            <h1 className="map_header">Where can you find us?</h1>

            <Container fluid style={{ paddingTop:'10px', paddingBottom:'10px', backgroundColor:' #eaeded ', borderRadius:'8px'}}>

                        <Row style={{margin:'0px',padding:'0px'}} xs={1} md={1} lg={2} >
                                <Col className="element" lg={8} >
                                    <Map className="map" center={position} zoom={zoom}>
                                        <TileLayer
                                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />
                                                                                

                                        <Marker position={position}
                                            icon = {myIcon1} >
                                        <Popup>
                                            Your position
                                        </Popup>
                                        </Marker>

                                        <Marker position={position1}
                                            icon = {myIcon} >
                                        <Popup>
                                            Welcome to our <br /> Resto.
                                        </Popup>
                                        </Marker>
                                        <Marker position={position2}
                                            icon = {myIcon} >
                                        <Popup>
                                            Welcome to our <br /> Resto.
                                        </Popup>
                                        </Marker>
                                        <Marker position={position3}
                                            icon = {myIcon} >
                                        <Popup>
                                            Welcome to our <br /> Resto.
                                        </Popup>
                                        </Marker>

                                    
                                    </Map>
                                </Col>


                                <Col className="element" lg={4}>
                                    <h3 className="map_h">Find your position:</h3>
                                    <br></br>
                                    <Form >
                                        <Form.Group controlId="fromControl">
                                            
                                            <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Detect my position" checked={checked} onChange={CheckTheBox} />
                                            </Form.Group>
                                            <Form.Text className="text-muted">
                                            We'll never share your position with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                                                            
                                        <Button onClick={()=> (checked) ? ( setPosition({lat: larg, lng:long }) ,setZoom(14)) : '' } variant="primary">
                                            Submit
                                        </Button>
                                    </Form>
                                </Col>

                        </Row>
                       
                </Container>

        </div>
    )
}

export default OurMap
