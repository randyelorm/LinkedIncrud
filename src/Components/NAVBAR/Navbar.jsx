import React from 'react';
import "./nav.css"
import profile_img from "../../Images/profile.jpeg"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Navbar = () => {
    return (
        <div className ="nav-box  col-sm-12">
            <div className = "nav_items container">
                <div className = "logo_search">
                     <i className="fab fa-linkedin"></i>
                    <input type="search" className = "search_input" placeholder = " &#xF002; Search" style={{fontFamily: "Arial, FontAwesome"}} />
                </div>

                <div className = " right_icons">
                    
                    <a href="" className=" "> <i class="fas fa-search"></i> </a>
                  
                        <a href="" className="nav_icons nav_icons_nd_text">
                            <i className = "fas fa-home"></i> 
                            <span className ="logo_text">Home</span>
                        </a> 
                        
        
                    <a href="" className="nav_icons nav_icons_nd_text">
                        <i class="fas fa-people-arrows"></i>
                        <span className ="logo_text"> My Network</span>

                    </a>

                    <a href="" className="nav_icons nav_icons_nd_text">
                        <i class="fas fa-briefcase"></i>
                        <span className ="logo_text"> Jobs</span>
                    </a>

                    <a href="" className="nav_icons nav_icons_nd_text">
                        <i class="fas fa-envelope-square"> </i>
                        <span className ="logo_text">Messaging</span>
                     </a>

                  
                    <a href="" className="nav_icons nav_icons_nd_text">
                        <i className = "fas fa-bell"></i>
                        <span className ="logo_text">Notifications</span>
                    
                    </a>

                    <a href="" className="nav_icons nav_icons_nd_text">
                        <img src={profile_img} className = "nav_profile" alt="" />
                        <span className ="logo_text">Me</span>
                       
                    </a>

                    
             
                   <a href="" className = "nav_icons nav_icons_nd_text" >
                       <i class="fas fa-th-list"></i>
                       <span className ="logo_text">Work</span>
                    </a>

                    <a href="" className="nav_icons nav_icons_nd_text">
                        <i class="fas fa-shopping-bag"></i>
                        <span className ="logo_text">Post a job</span>
                    </a>

                   
                    
                </div>
             </div>
           
        </div>
    );
}

export default Navbar;
