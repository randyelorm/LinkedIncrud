import React from 'react';
import "./left.css"
import profile_img from "../../Images/profile.jpeg"
import backdrop from "../../Images/backdrop.jpeg"

const LeftColumn = () => {
    return (
        <div className = "col-sm-3 left-box">
            <div className = "img_box">
                 <img src={backdrop} className ="img-fluid back_img " alt="" />
                <img src={profile_img} className ="img-fluid profile_img " alt="" />
             </div>
               
                
        </div>
    );
}

export default LeftColumn;
