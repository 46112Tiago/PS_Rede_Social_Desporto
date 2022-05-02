import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.render(
  <React.StrictMode>
     <Auth0Provider
          domain="dev-7xsir3ai.eu.auth0.com"
          clientId="eG9fFbcWlzOLUqMg69ZGpMg4iZ6YQfnn"
          redirectUri={"https://localhost:3000/map"}
          audience={"http://localhost:8080"}
        >
          <App />
        </Auth0Provider>
          
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
