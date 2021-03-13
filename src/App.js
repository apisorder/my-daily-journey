

import React from "react";

// react router
import { 
  HashRouter as Router, 
  Switch, 
  Route, 
  Link } from "react-router-dom";

import ScrollToTop from './components/ScrollToTop';

// header
import Header from './components/Header';
import {ReactComponent as Logo} from './images/logo.svg';

// footer
import Footer from './components/Footer';
import {ReactComponent as About} from './images/about.svg';

// components to add styles
import DividerStyled from './components/DividerStyled';
import UnorderedListStyled from './components/UnorderedListStyled';
import ListItemStyled from './components/ListItemStyled';
import ButtonStyled from './components/ButtonStyled';

// components for each individual route
import Home from './components/Home';
import Setup from './components/Setup';
import Variables from './components/Variables';
import DataTypes from './components/DataTypes';

// CSS
import { createGlobalStyle } from 'styled-components';
import background from './images/background.png';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url(${background});
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

// main
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        {/* to enable linked routes to always go to the top of the page */}
        <ScrollToTop />

          {/* upper-div: header */}
          {/* header */}
          {/* <div> */}
          <DividerStyled>
            <Header>
          <Logo />
          </Header>
            {/* <ul style={{display: "inline-block"}}>
              <li style={{display: "inline-block"}}><Link to="/">((Home))</Link></li>
              <li style={{display: "inline-block"}}><Link to="/setup">((Setup))</Link></li>
            </ul> */}
          {/* </div> */}
          </DividerStyled>
          {/* header */}
          {/* upper-div: header */}


        {/* middle-div: sidebar (left) & main display (right) */}
        {/* <div style={{ display: "flex" }}> */}
        <DividerStyled parallel>

          {/* side bar */}
          {/* <DividerStyled sidebar> */}
          {/* <div> */}
          <DividerStyled>
            
            {/* <Logo /> */}

            {/* <ul> */}
            <UnorderedListStyled sidebar>
              <ListItemStyled popout>
              {/* <li> */}
                <Link to="/"><ButtonStyled popout>Home</ButtonStyled></Link>
                {/* </li> */}
              </ListItemStyled>
              <ListItemStyled>
              {/* <li> */}
                <Link to="/setup"><ButtonStyled>Setup</ButtonStyled></Link>
                {/* </li> */}
                </ListItemStyled>
              {/* <li> */}
              <ListItemStyled popout>
                <Link to="/variables"><ButtonStyled popout>Variables</ButtonStyled></Link>
                {/* </li> */}
                </ListItemStyled>
              {/* <li> */}
              <ListItemStyled>
                <Link to="/data-types"><ButtonStyled>Data Types</ButtonStyled></Link>
                {/* </li> */}
              </ListItemStyled>
            {/* </ul> */}
            </UnorderedListStyled>
          {/* </div> */}
          </DividerStyled>
          {/* </DividerStyled> */}
          {/* side bar */}

          {/* main display */}
          {/* <div style={{ flex: 1}}> */}
          <DividerStyled>
            <Switch>
              <Route exact path='/'><Home /></Route>          
              <Route exact path='/setup'><Setup /></Route>          
              <Route exact path='/variables'><Variables /></Route>          
              <Route exact path='/data-types'><DataTypes /></Route>          
            </Switch>
          {/* </div> */}
          </DividerStyled>
          {/* main display */}

          {/* </div> */}
          </DividerStyled>
          {/* middle-div: sidebar (left) & main display (right) */}
          
          {/* lower-div: footer */}
          {/* footer */}
          {/* <div> */}
          <DividerStyled>
            <Footer>
            <About />
            {/* <ul style={{display: "inline-block"}}>
              <li style={{display: "inline-block"}}><Link to="/">((Home))</Link></li>
              <li style={{display: "inline-block"}}><Link to="/setup">((Setup))</Link></li>
            </ul> */}
            </Footer>
          {/* </div> */}
          </DividerStyled>
          {/* footer */}
          {/* lower-div: footer */}

      </Router>
    </>
  );
}
export default App;