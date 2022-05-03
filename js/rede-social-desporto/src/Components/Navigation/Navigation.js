import React from "react";
import './Navigation.css'
import { useAuth0 } from "@auth0/auth0-react";
import './NavLog.css'
import { FaSortDown, FaUserAlt } from 'react-icons/fa';
import { RiSettings5Fill } from 'react-icons/ri';
import LogOutOAuth from './LogOutOAuth';

const Navigation = () =>   {
  
  const {isAuthenticated} = useAuth0()

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  if(isAuthenticated) document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (isAuthenticated && !e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
  
  return(
        
        <>
        {isAuthenticated ? 
                  <div className="navbar">
                  <a className="leftSide" href="/">Home</a>
                  <a className="leftSide" href="/map">Mapa</a>
                  <a className="leftSide" href="/events">Eventos</a>
                  <div className="dropdown">
                      <button className="dropbtn " onClick={myFunction}><FaSortDown className="rightSide"></FaSortDown></button>
                      <div className="dropdown-content" id="myDropdown">
                          <a href="#"><FaUserAlt></FaUserAlt> Perfil</a>
                          <a href="#"><RiSettings5Fill></RiSettings5Fill> Definições</a>
                          <LogOutOAuth></LogOutOAuth>
                      </div>
                  </div> 
              </div>

                :

                        <div className="topnav">
                        <a className="leftSide" href="/">Home</a>
                        <a className="leftSide" href="/map">Mapa</a>
                        <a className="leftSide" href="/events">Eventos</a>
                        <a className="rightSide" href="/logIn">LogIn</a>
                        <a className="rightSide" href="/signUp">Sign Up</a>
                      </div>
      
      }

        </>
        
        
        );
    }

export default Navigation;
