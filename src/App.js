

import React, { useState } from "react";

// react router
import { 
  HashRouter as Router, 
  Switch, 
  Route, 
  Link } from "react-router-dom";

// to enable linked routes to always go to the top of the page
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
import RawFood from './components/RawFood';
import CookedFood from './components/CookedFood';
import MentalHealth from './components/MentalHealth';
import SpiritualHealth from './components/SpiritualHealth';
import Reference from './components/Reference';
import Summary from './components/Summary';

// global CSS
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
  // encourageMessage
  const [ servings, setServings ] = useState({
    fruits: 0,
    veggies: 0,
    carbohydrates: 0,
    proteins: 0
  })

  const addFruitServing1 = () => (
    setServings( servings => ({
      ...servings,
      fruits: servings.fruits + 1
    }))
  )

  const addFruitServing2 = () => (
    setServings( servings => ({
      ...servings,
      fruits: servings.fruits + 2
    }))
  )

  const resetFruitServing = () => (
    setServings( servings => ({
      ...servings,
      fruits: 0
    }))
  )

  return (
    <>
      <GlobalStyle />
      <Router>
        {/* to enable linked routes to always go to the top of the page */}
        <ScrollToTop />

          {/* upper-div: header */}
          {/* header */}
          <DividerStyled>
            <Header>
              <Logo />
            </Header>
          </DividerStyled>
          {/* header */}
          {/* upper-div: header */}


        {/* middle-div: sidebar (left) & main display (right) */}
        <DividerStyled parallel>

          {/* side bar */}
          <DividerStyled>
            
            <UnorderedListStyled sidebar>

              <ListItemStyled>
                <Link to="/">
                  <ButtonStyled popout>
                    Home
                  </ButtonStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/raw-food">
                  <ButtonStyled>
                    Raw Food
                  </ButtonStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/cooked-food">
                  <ButtonStyled popout>
                  Cooked Food
                  </ButtonStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/mental-health">
                  <ButtonStyled>
                    Mental Health
                  </ButtonStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/spiritual-health">
                  <ButtonStyled popout>
                  Spiritual Health
                  </ButtonStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/reference">
                  <ButtonStyled>
                    Reference
                  </ButtonStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/summary">
                  <ButtonStyled popout>
                    Summary
                  </ButtonStyled>
                </Link>
              </ListItemStyled>
              
            </UnorderedListStyled>

          </DividerStyled>         
          {/* side bar */}

          {/* main display */}
          <DividerStyled>
            <Switch>

              <Route exact path='/'>
                <Home 
                  myServings={ servings }
                  myAddFruitServing1={ addFruitServing1 }
                  myAddFruitServing2={ addFruitServing2 }
                  myResetFruitServing={ resetFruitServing }
                  />
              </Route>          

              <Route exact path='/raw-food'>
                <RawFood 
                  myServings={ servings }
                  myAddFruitServing1={ addFruitServing1 }
                  myAddFruitServing2={ addFruitServing2 }
                  myResetFruitServing={ resetFruitServing }                
                />
              </Route>          

              <Route exact path='/cooked-food'>
                <CookedFood />
              </Route>          

              <Route exact path='/mental-health'>
                <MentalHealth />
              </Route>          

              <Route exact path='/spiritual-health'>
                <SpiritualHealth />
              </Route>          

              <Route exact path='/reference'>
                <Reference />
              </Route>          

              <Route exact path='/summary'>
                <Summary 
                  myServings={ servings }                
                />
              </Route>          

            </Switch>

          </DividerStyled>
          {/* main display */}

        </DividerStyled>
        {/* middle-div: sidebar (left) & main display (right) */}
          
        {/* lower-div: footer */}
        {/* footer */}
        <DividerStyled>
          <Footer>
            <About />
          </Footer>
        </DividerStyled>
        {/* footer */}
        {/* lower-div: footer */}

      </Router>
    </>
  );
}
export default App;