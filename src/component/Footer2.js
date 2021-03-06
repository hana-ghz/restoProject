import React from 'react';
import './Footer2.css';
import {Link} from 'react-router-dom'

function Footer2() {
    const logo= require('./images/logo4.png')
    
    return (
            <footer className="footer">
                <div className="row" style={{width:"100%"}}>
                    <div className="col-md-4 col-sm-12 display ">
                        <img src={logo} id="logoFooter" alt="the logo"></img>

                        <Link to="/About" style={{textDecoration:'none'}}> 
                        <h4 className="h4Footer"> About us</h4>
                        <p className="pFooter"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                           </p>
                        </Link>

                    </div>
                    <hr/>
                    <div  className="col-md-4 col-sm-12 display">
                        <h3 className="h3Footer"> Quick links</h3>
                            <ul>
                                <li className="elFooter"> <Link to="/Menu">Our Menu</Link> </li>
                                <li className="elFooter"> <Link to="/Menu">Drinks</Link></li>
                                <li className="elFooter"> <Link to="/Menu">Desserts</Link></li>
                            </ul>
                    </div>
                    <hr/>
                    <div  className="col-md-4 col-sm-12 content" style={{textAlign:'center'}}>
                        <h3 className="h3Footer"> Stay in touch</h3>
                            <ul>
                                <li className="elFooter"> 
                                    <a href="tel:95403258">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className=" icon bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
                                        </svg>
                                        <span className="spanFooter">95403258</span>
                                     </a>
                                     
                                </li>
                                <li className="elFooter"> 
                                    <svg  width="1em" height="1em" viewBox="0 0 16 16" className="icon bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                                    </svg>
                                    <span className="spanFooter">resto123@gmail.com</span>
                                </li>
                                <li className="elFooter">
                                    <a href="https://www.facebook.com/sofiene.chihy/" target="_blank">
                                    <img src={require('./images/facebook.png')} alt="facebook" className="footer-sm"></img>
                                    </a>
                                    <a href="https://www.instagram.com/?hl=fr" target="_blank">
                                    <img src={require('./images/insta.png')} alt="insta" className="footer-sm"></img>
                                    </a>
                                    <a href="https://twitter.com/?lang=fr" target="_blank">
                                    <img src={require('./images/twitter.png')} alt="twitter" className="footer-sm"></img>
                                    </a>

                                </li>
                            </ul>
                            <svg id="scroll" width="1em" height="1em" viewBox="0 0 16 16" className="icon bi bi-arrow-up-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-10.646.354a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.354 8.354z"/>
                                    </svg>
                    </div>

                </div>
            </footer>
    )
}
const footerStyle={
    height: '220px',
    marginTop: '-220px',
    position:'relative' , 
    bootom : '0px'

}
export default Footer2
