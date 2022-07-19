import {Link} from "react-router-dom";
import React from "react";
import "./FrontPage.css";
import FrontImage from "./images/Front_img.PNG";

let FrontPage = () =>{
    return(
        <div className="front-wrapper">
            <div className="front-img-container">
                <img src={FrontImage} className="front-img" alt=""></img>
            </div>
            <div className="front-info-container">
                <div className="front-heading">10x Team 04</div>
                <Link to="/landing" className="front-link">Enter</Link>
            </div>
        </div>
    )
}

export default FrontPage;