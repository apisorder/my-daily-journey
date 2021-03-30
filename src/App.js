

import React from "react";

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
import NumericCalculations from './components/NumericCalculations';
import Branches from './components/Branches';
import QuadraticEquation from './components/QuadraticEquation';
import Characters from './components/Characters';
import Arrays from './components/Arrays';
import Loops from './components/Loops';
import Functions from './components/Functions';
import Files from './components/Files';
import Objects from './components/Objects';
import Library from './components/Library';
import Quiz from './components/Quiz';

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
                <Link to="/numeric-calculations">
                  <ButtonStyled>
                    3. Numeric Calculations
                  </ButtonStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/branches">
                  <ButtonStyled popout>
                    4. Branches
                  </ButtonStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/quadratic-equation">
                  <ButtonStyled>
                    5. Quadratic Equation
                  </ButtonStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/string">
                  <ButtonStyled popout>
                    6. String
                  </ButtonStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/arrays">
                  <ButtonStyled>
                    7. Arrays
                  </ButtonStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/loops">
                  <ButtonStyled popout>
                    8. Loops
                  </ButtonStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/functions">
                  <ButtonStyled>
                    9. Functions
                  </ButtonStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/files">
                  <ButtonStyled popout>
                    10. Files
                  </ButtonStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/objects">
                  <ButtonStyled>
                    11. Objects
                  </ButtonStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/library">
                  <ButtonStyled popout>
                    12. Library
                  </ButtonStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/quiz">
                  <ButtonStyled>
                    Quiz
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
                <Home />
              </Route>          

              <Route exact path='/raw-food'>
                <RawFood />
              </Route>          

              <Route exact path='/cooked-food'>
                <CookedFood />
              </Route>          

              <Route exact path='/numeric-calculations'>
                <NumericCalculations />
              </Route>          

              <Route exact path='/branches'>
                <Branches />
              </Route>          

              <Route exact path='/quadratic-equation'>
                <QuadraticEquation />
              </Route>          

              <Route exact path='/string'>
                <Characters />
              </Route>          

              <Route exact path='/arrays'>
                <Arrays />
              </Route>          

              <Route exact path='/loops'>
                <Loops />
              </Route>          

              <Route exact path='/functions'>
                <Functions />
              </Route>          

              <Route exact path='/files'>
                <Files />
              </Route>          

              <Route exact path='/objects'>
                <Objects />
              </Route>          

              <Route exact path='/library'>
                <Library />
              </Route>          

              <Route exact path='/quiz'>
                <Quiz />
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