import './App.css';
import React,{Component} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react";

import Navigation from './Components/Navigation/Navigation';
import SearchBar from './Components/SearchBar/SearchBar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Map from './Components/Map/Map';
import Events from './Components/Events/Events';
import SignUp from './Components/Sign_Up/Sign_Up';
import LogIn from './Components/LogIn/LogIn';
import ChooseAuthPath from './Components/Auth0/ChooseAuthPath';
import Loading from './Components/Loading';

const App = () => {

    const { isLoading, isAuthenticated  } = useAuth0()

    if(isLoading){
      return <Loading />
    }

    return(
      <Router>
       
          <div className="App"> 
              <Navigation></Navigation>    
              <SearchBar></SearchBar>                          
              <Routes>
                <Route path='/map' element={<ChooseAuthPath></ChooseAuthPath>}></Route>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/m' element={<Map></Map>}></Route>
                <Route path='/events' element={isAuthenticated?< Events></Events> : <LogIn></LogIn>}></Route>
                <Route path='/signUp' element={<SignUp></SignUp>}></Route>
                <Route path='/logIn' element={<LogIn></LogIn>}></Route>
              </Routes>          
          <Footer/>
          </div>
      </Router>
      );
  };

   export default App;
