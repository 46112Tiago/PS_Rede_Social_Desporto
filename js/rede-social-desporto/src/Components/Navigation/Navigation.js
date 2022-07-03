import React from "react";
import './Navigation.css'
import { Link } from "react-router-dom";

const Navigation = () =>   {

  return(
        
        <>
          <div id="topnav">
            <Link className="leftSide anchor" to="/">Home</Link>
            <Link className="leftSide anchor" to="/map">Map</Link>
            <Link className="leftSide anchor" to="/events">Events</Link>
            <Link className="rightSide anchor" to="/logIn">LogIn</Link>
          </div>
        </>
  );
}

export default Navigation;
