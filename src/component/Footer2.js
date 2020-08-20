import React from 'react';
import './Footer2.css';




function Footer2() {
    const logo= require('./images/logo4.png')

    
    
    return (
            <footer className="footer">
                <div className="row">
                    <div className="col-md-4 col-sm-12 display ">
                        <img src={logo} className="logo"></img>
                        <h4> About us</h4>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                           </p>
                    </div>
                    <hr/>
                    <div  className="col-md-4 col-sm-12 display">
                        <h3> Quick links</h3>
                            <ul>
                                <li> <a href="#">Our Menu</a> </li>
                                <li> <a href="#">Drinks</a></li>
                                <li> <a href="#">Desserts</a></li>
                            </ul>
                    </div>
                    <hr/>
                    <div  className="col-md-4 col-sm-12 content">
                        <h3> Stay in touch</h3>
                            <ul>
                                <li> 
                                    <a href="tel:95403258">
                                        <svg className="icon" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
                                        </svg>
                                        <span>95403258</span>
                                     </a>
                                     
                                </li>
                                <li> 
                                    <svg className="icon" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                                    </svg>
                                    <span>resto123@gmail.com</span>
                                </li>
                            </ul>
                            <svg id="scroll" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-10.646.354a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.354 8.354z"/>
                                    </svg>
                    </div>


                </div>
            </footer>
    )
}

export default Footer2
