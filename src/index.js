import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import "typeface-roboto";
import "./App.css";



document.getElementById('root').innerText = 'Eventjes geduld ...'
document.title = "Frederik Hausburg.net"

// makes sure the entire App only gets rendered AFTER we know if the user is logged in
// axios.get('/api/auth/checkuser').then(res => {
  ReactDOM.render(
    
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    , document.getElementById('root'));
    
// }).catch(err => {
//   alert('backend not running or /checkuser route not defined !')
// })
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();