// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import Productpage from './components/productpage';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      {/* <App /> */}
      <Productpage />
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);