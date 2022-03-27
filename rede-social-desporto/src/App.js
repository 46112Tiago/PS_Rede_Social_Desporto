import './App.css';
import Navigation from './Components/Navigation/Navigation.js';
import React,{Component} from "react";
import logo from "./logo.svg";


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
    return(<div className="App">       
        <Navigation/>
        <p className="App-intro">{this.state.apiResponse}</p>
       
        
      </div>
      );
  };
} export default App;
