import React from "react";
import PhotoGrid from "../assets/images/photo-grid.png";
import "../static/css/style.css";


function Hero() {
    return(
        <div className="Hero-Main">
            <div className="Img-Hero">
                <img src={PhotoGrid} alt="Photo Grid" /></div>
            <div className="Hero-Text">
                <h1>Online Experiences</h1>
                <p>Airbnb, Inc. is an American company that operates an online marketplace for lodging, primarily homestays for vacation rentals, and tourism activities. Based in San Francisco, California, the platform is accessible via website and mobile app.</p>
                <button type="button">Book Now</button> 
            </div>
        </div>
    )

}

export default Hero;