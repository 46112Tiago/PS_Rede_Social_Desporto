import './App.css';
import Navigation from './Components/Navigation/Navigation.js';
import React,{Component} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignUp from './Components/Sign_Up/Sign_Up';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
  }
  
  callAPI() {
    fetch("http://localhost:9000/testAPI")
       .then(res => res.text())
       .then(res => this.setState({ apiResponse: res })).catch(err => err);
  }
  
  componentDidMount() {
    this.callAPI();
  }

  render(){
    return(
      <Router>
        <div className="App">       
          <Navigation/>
          
          <Routes>

            <Route path='/signUp' element={<SignUp></SignUp>}></Route>

          </Routes>
        </div>
      </Router>
      );
  };
} export default App;
