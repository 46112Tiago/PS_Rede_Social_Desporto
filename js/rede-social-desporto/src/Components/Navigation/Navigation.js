import React from "react";
import './Navigation.css'
import { useAuth0 } from "@auth0/auth0-react";
import './NavLog.css'
import { Link } from "react-router-dom";

const Navigation = () =>   {
  
  const {isAuthenticated} = useAuth0()

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  if(isAuthenticated) document.getElementById("myDropdown").classList.toggle("show");
}


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
