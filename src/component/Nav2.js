import React from 'react'
import {  Navbar, Nav } from 'react-bootstrap'
import '../App.css';

const title={

    fontFamily:' Verdana, Arial, Helvetica, sans-serif',
    fontSize:'35px',
    textAlign:'center',
    margin:'auto',
    color:'#ffbb33', 
    textDecoration:'underline',
    border:'0',
    borderRadius:'15px',
    padding:'0 ',
    fontStyle:'italic',
}


function Nav2() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark" sticky="top" >
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  
 
    <Navbar.Brand href="#" style={title}> The Resto</Navbar.Brand>

    <img src={ require('./images/fast-food.png') } alt="photo not found" style={{resizeMode: "cover",
            height: '50px',
            width: '50px',
            marginRight:'20px',
            marginLeft:'10px'
            }} className="img4"/>

    <img src={ require('./images/burger.png') } alt="photo not found" style={{resizeMode: "cover",
            height: '50px',
            width: '50px'}} className="img2"/>



  
  <Navbar.Collapse id="responsive-navbar-nav">
  
    <Nav className="ml-auto">  
       <React.Fragment >    

        <Nav.Link href="#"  style={{marginRight:'15px', marginLeft:'0px' ,paddingLeft:'0px',fontSize:'20px',}} ><svg width="30px" height="30px" viewBox="0 0 16 16" class="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" href="#">
  <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"/>
  <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
        </svg>&#9;Home</Nav.Link>
       </React.Fragment>
      
        <React.Fragment >
        
      <Nav.Link href="#" style={{marginLeft:'0px',paddingLeft:'0',fontSize:'20px'}}><svg width="30px" height="30px" viewBox="0 0 16 16" class="bi bi-geo-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>&#9;Our Map</Nav.Link>
        </React.Fragment>

        <React.Fragment>
        
        <Nav.Link href="#" style={{ marginRight:'15px' ,fontSize:'20px'}}><svg width="40px" height="40px" viewBox="0 0 16 16" class="bi bi-bicycle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M3 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    <path fill-rule="evenodd" d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935 2.375 3.8a.5.5 0 1 1-.848.53L10.5 6.943l-2.076 3.322A.5.5 0 0 1 8 10.5H3a.5.5 0 0 1-.424-.765L5 5.857V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443L3.902 9.5h3.196L5.5 6.943zM8 9.057L9.598 6.5H6.402L8 9.057z"/>
  </svg>&#9;Delivery</Nav.Link>
          </React.Fragment>
  
          <React.Fragment >
          
        <Nav.Link href="#" style={{fontSize:'20px'}}><svg width="30px" height="30px" viewBox="0 0 16 16" class="bi bi-info-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  </svg>&#9;About us</Nav.Link>
          </React.Fragment>
        
    </Nav>
    
    </Navbar.Collapse>

  
</Navbar>
        <div style={{height:'900px'}}></div>
        </div>
    )
}

export default Nav2
