import React from "react";
import './Navigation.css'
import './NavLog.css'
import { Link } from "react-router-dom";

const Navigation = () =>   {

  return(
        
        <>
          <div className="topnav">
            <Link className="leftSide" to="/">Home</Link>
            <Link className="leftSide" to="/map">Map</Link>
            <Link className="leftSide" to="/events">Events</Link>
            <Link className="rightSide" to="/logIn">LogIn</Link>
          </div>
        </>
  );
}

export default Navigation;
