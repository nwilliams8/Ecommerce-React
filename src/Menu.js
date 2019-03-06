import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link, Location } from '@reach/router';
import posed, { PoseGroup } from 'react-pose';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact'
import Store from './pages/store'

import './style.css';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: 300 },
  exit: { opacity: 0 }
});

const Menu = posed.li({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  },
  press: {
    scale: 1.1,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
});

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <PoseGroup>
        <RouteContainer key={location.key}>
          <Router location={location}>{children}</Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);

export default ({ close, ...props }) => (
  <div className="modalContent">
      <ul id="site-nav" className={close ? "navbar open" : "navbar"} {...props}>
        <Menu>
          <Link to="/">Home</Link>
        </Menu>
        <Menu>
          <Link to="/about">About</Link>
        </Menu>
        <Menu>
          <Link to="/contact">Contact</Link>
        </Menu>
        <Menu>
          <Link to="/store">Store</Link>
        </Menu>
      </ul>
      </div>
);
