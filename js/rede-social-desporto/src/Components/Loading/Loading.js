import React from "react";
import './Loading.css'

const Loading = () => (
  <div id="spinner">
    <img id="loading" src={require('./loading.gif')} alt="loading"></img>
  </div>
);

export default Loading;