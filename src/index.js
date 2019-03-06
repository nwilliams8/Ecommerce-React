import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link, Location } from '@reach/router';
import posed, { PoseGroup } from 'react-pose';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Store from './pages/store';
import Nav from './Menu.js';
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";

import './style.css';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: 300 },
  exit: { opacity: 0 }
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

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "40px"
};
const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
  border: "none",
};

const App = () => (
  <div id="site-container">
    <header>
      <h1>Ecommerce</h1>
    </header>
    <div id="content-container">
    <Popup
      modal
      closeOnDocumentClick
      overlayStyle={{ background: "rgba(255,218,185,0.8" }}
      contentStyle={contentStyle}
      trigger={open => <BurgerIcon open={open} />}
    >
      {close => <Nav close={close} />}
    </Popup>
      <PosedRouter>
        <Home path="/" />
        <About path="/about" />
        <Contact path="/contact" />
        <Store path="/store" />
      </PosedRouter>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
