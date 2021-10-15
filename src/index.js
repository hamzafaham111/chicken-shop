import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from './App';


ReactDOM.render(
  <>
  <Router>
    <Switch>
    <App />
    </Switch>
  </Router>
  </>,
  document.getElementById('root')
);
