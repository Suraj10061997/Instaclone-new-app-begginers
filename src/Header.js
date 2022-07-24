import React from "react";
import { Link } from "react-router-dom";

import "./App";
//top part pictures
import pic4 from "./images/nested_circle.png";
import pic5 from "./images/insta_camera.png";


const Header = () =>{
    return(
        <div className='top'>
            <div className='image-container-1'>
                <img className='img' src={pic4} alt=""></img>
            </div>
            <span className='top-text'>Instaclone</span>
            <Link to="/form"><div className='image-container-2'>
                <img className='img' src={pic5} alt=""></img>
            </div></Link>
        </div>
    )
}

export default Header;