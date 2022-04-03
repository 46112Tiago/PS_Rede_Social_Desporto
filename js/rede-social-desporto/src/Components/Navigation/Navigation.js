import React from "react";
import './Navigation.css'

function Navigation()  {
      return(
        
        <>
          <div className="topnav">
            <a className="leftSide" href="/">Home</a>
            <a className="leftSide" href="/map">Mapa</a>
            <a className="leftSide" href="/events">Eventos</a>
            <a className="rightSide" href="/logIn">LogIn</a>
            <a className="rightSide" href="/signUp">Sign Up</a>
          </div>
        </>
        
        
        );
    }

export default Navigation;
