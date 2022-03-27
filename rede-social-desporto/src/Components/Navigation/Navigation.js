import './Navigation.css'

function Navigation()  {
      return(
        
        <>
          <div className="topnav">
            <a className="leftSide" href="#home">Home</a>
            <a className="leftSide" href="#map">Map</a>
            <a className="leftSide" href="#events">Events</a>
            <a className="leftSide" href="#about">About</a>
            <a className="rightSide" href="#logIn">LogIn</a>
            <a className="rightSide" href="#signUp">Sign Up</a>
          </div>
        </>
        
        
        );
    }

export default Navigation;
