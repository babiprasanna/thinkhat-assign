import {Link} from "react-router-dom"
import React, { useState } from 'react';
import "./index.css"

const Header = () => {
    const [isHoveredBtn1, setIsHoveredBtn1] = useState(false);
    const [isHoveredBtn2, setIsHoveredBtn2] = useState(false);
    const [isHoveredBtn3, setIsHoveredBtn3] = useState(false);

  const handleMouseOverBtn1 = () => {
    setIsHoveredBtn1(true);
  };

  const handleMouseOutBtn1 = () => {
    setIsHoveredBtn1(false);
  };
  
  const handleMouseOverBtn2 = () => {
    setIsHoveredBtn2(true);
  };

  const handleMouseOutBtn2 = () => {
    setIsHoveredBtn2(false);
  };

  const handleMouseOverBtn3 = () => {
    setIsHoveredBtn3(true);
  };

  const handleMouseOutBtn3 = () => {
    setIsHoveredBtn3(false);
  };

    return(
    <div className="header-container col-5 col-md-2 mb-3">
        <Link to="/" className={isHoveredBtn1 ? "buttons-container2 m-3":"buttons-container m-3"}  onMouseOver={handleMouseOverBtn1} onMouseOut={handleMouseOutBtn1}>
            <div className="home-button-box"></div>
            <h1 className="home-button-link-heading mb-2">Home</h1>
        </Link>
        <Link to="/citiesPage" className={isHoveredBtn2 ? "buttons-container2 m-3":"buttons-container m-3"}  onMouseOver={handleMouseOverBtn2} onMouseOut={handleMouseOutBtn2}>
            <div className="home-button-box"></div>
            <h1 className="home-button-link-heading mb-2">Cities</h1>
        </Link>
        <Link to="/cityAddModel" className={isHoveredBtn3 ? "buttons-container2 m-3":"buttons-container m-3"}  onMouseOver={handleMouseOverBtn3} onMouseOut={handleMouseOutBtn3}>
            <div className="home-button-box"></div>
            <h1 className="home-button-link-heading mb-2">cityAddModel</h1>
        </Link>
    </div>)
}

export default Header;