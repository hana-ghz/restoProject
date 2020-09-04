import React from 'react'
import {  Navbar, NavLink, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../App.css';

const title={
  
    margin:'auto',
    padding:'0 ',
    height:'60px'
}


function Nav2() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark" fixed="top" style={{borderRadius:'5px', textAlign:'center',margin:'0px', padding:'0px'}} >
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  
    <Navbar.Brand> <img src={require('./images/logo4.png')} alt='the logo is here'  style={title}></img></Navbar.Brand>

    <img src={ require('./images/fast-food.png') } alt=" not found" style={{resizeMode: "cover",
            height: '50px',
            width: '50px',
            marginRight:'20px',
            marginLeft:'10px'
            }} className="img4"/>

    <img src={ require('./images/burger.png') } alt=" not found" style={{resizeMode: "cover",
            height: '50px',
            width: '50px' }} />

  
  <Navbar.Collapse id="responsive-navbar-nav">
  
    <Nav className="ml-auto">  
       <React.Fragment >    
            
            <Link to="/" className="text-warning" style={{marginRight:'15px', marginLeft:'0px' ,paddingLeft:'0px',fontSize:'23px',textDecoration:'none'}} ><svg width="30px" height="30px" viewBox="0 0 16 16" class="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" href="#">
  <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"/>
  <path fillRule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
        </svg>&#9;Home</Link>

       </React.Fragment>
      
      
       <React.Fragment>
        
        <Link to="/Menu" className="text-warning"  style={{ marginRight:'15px' ,fontSize:'23px',textDecoration:'none'}}><svg width="30px" height="30px" viewBox="0 0 16 16" className="bi bi-layout-text-sidebar-reverse" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M2 1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm12-1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
  <path fillRule="evenodd" d="M5 15V1H4v14h1zm8-11.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"/>
</svg>&#9;Menu</Link>
          </React.Fragment>


        <React.Fragment >

        <Link to="/OurMap" className="text-warning" style={{marginLeft:'0px',paddingLeft:'0',fontSize:'23px',marginRight:'10px',textDecoration:'none'}}><svg width="30px" height="30px" viewBox="0 0 16 16" class="bi bi-geo-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>&#9;Our Map</Link>

        </React.Fragment>
  
          <React.Fragment >
          
        <Link to="/About" className="text-warning" style={{fontSize:'23px',textDecoration:'none',paddingRight:'5px'}}><svg width="30px" height="30px" viewBox="0 0 16 16" class="bi bi-info-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  </svg>&#9;About us</Link>
          </React.Fragment>
        
    </Nav>
    
    </Navbar.Collapse>
</Navbar>

        </div>
    )
}

export default Nav2
