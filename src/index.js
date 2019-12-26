import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Resume from './Components/Resume';
import About from './Components/About';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/resume" component={Resume} />
      <Route path="/about" component={About} />
    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
