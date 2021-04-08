

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
import Fruit from './components/Fruit';
import Veggie from './components/Veggie';
import Carbohydrate from './components/Carbohydrate';
import Protein from './components/Protein';
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
    // FDA recommends 4 servings daily
    defaultFruits: 3,
    fruits: 0,
    // FDA recommends 5 servings daily
    defaultVeggies: 4,
    veggies: 0,
    // 6-11 servings on average, based on research; default to 8
    defaultCarbohydrates: 8,
    carbohydrates: 0,
    // 4-6 servings on average, based on research; default to 5
    defaultProteins: 5,
    proteins: 0
  })

  const [ reminder, setReminder ] = useState(
    defaultReminder: 'All is well.',
    reminderBank: [
      'Worst case scenario: how would this affect me 30 years from now? -- Jeff',
      'We are all doing the best we can -- Jacquline',
      'Lowever your expecations, then lower them some more -- Dottie'
  ])

  const randomizeDefaultReminder = () => {
    setReminder( reminders => ({
        ...reminders,
        defaultReminder: reminderBank[0 + Math.trunc((Math.random() * 5))]
    }))
  }

  // fruit functions
  const randomizeDefaultFruitServing = () => (
    // original default is 3
    // new default range = (2, 6)
    setServings( servings => ({
      ...servings,
      defaultFruits: 2 + Math.trunc((Math.random() * 5))
    }))
  )

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
  // fruit functions

  // veggie functions
  const randomizeDefaultVeggieServing = () => (
    // original default is 4
    // new default range = (3, 7)
    setServings( servings => ({
      ...servings,
      defaultVeggies: 3 + Math.trunc((Math.random() * 5))
    }))
  )

  const addVeggieServing1 = () => (
    setServings( servings => ({
      ...servings,
      veggies: servings.veggies + 1
    }))
  )

  const addVeggieServing2 = () => (
    setServings( servings => ({
      ...servings,
      veggies: servings.veggies + 2
    }))
  )

  const resetVeggieServing = () => (
    setServings( servings => ({
      ...servings,
      veggies: 0
    }))
  )
  // veggie functions

  // carbohydrate functions
  const randomizeDefaultCarbohydrateServing = () => (
    // original default is 8
    // new default range = (7, 11)
    setServings( servings => ({
      ...servings,
      defaultCarbohydrates: 7 + Math.trunc((Math.random() * 5))
    }))
  )

  const addCarbohydrateServing1 = () => (
    setServings( servings => ({
      ...servings,
      carbohydrates: servings.carbohydrates + 1
    }))
  )

  const addCarbohydrateServing2 = () => (
    setServings( servings => ({
      ...servings,
      carbohydrates: servings.carbohydrates + 2
    }))
  )

  const resetCarbohydrateServing = () => (
    setServings( servings => ({
      ...servings,
      carbohydrates: 0
    }))
  )
  // carbohydrate functions

  // protein functions
  const randomizeDefaultProteinServing = () => (
    // original default is 5
    // new default range = (4, 8)
    setServings( servings => ({
      ...servings,
      defaultProteins: 4 + Math.trunc((Math.random() * 5))
    }))
  )

  const addProteinServing1 = () => (
    setServings( servings => ({
      ...servings,
      proteins: servings.proteins + 1
    }))
  )

  const addProteinServing2 = () => (
    setServings( servings => ({
      ...servings,
      proteins: servings.proteins + 2
    }))
  )

  const resetProteinServing = () => (
    setServings( servings => ({
      ...servings,
      proteins: 0
    }))
  )
  // protein functions

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
        <DividerStyled comparison>

          {/* side bar */}
          <DividerStyled>
            
            <UnorderedListStyled sidebar>
              <ListItemStyled>
                <Link to="/">
                  <ButtonStyled silver>
                    Home
                  </ButtonStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/fruit">
                  <ButtonStyled>
                    Fruit
                  </ButtonStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/veggie">
                  <ButtonStyled silver>
                    Veggie
                  </ButtonStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/carbohydrate">
                  <ButtonStyled>
                    Carbohydrate
                  </ButtonStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/protein">
                  <ButtonStyled silver>
                    Protein
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
                  <ButtonStyled silver>
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
                  <ButtonStyled silver>
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
                  myRandomizeDefaultReminder={ randomizeDefaultReminder }
                  />
              </Route>          

              <Route exact path='/fruit'>
                <Fruit 
                  myServings={ servings }

                  myAddFruitServing1={ addFruitServing1 }
                  myAddFruitServing2={ addFruitServing2 }
                  myResetFruitServing={ resetFruitServing }                
                  myRandomizeDefaultFruitServing={ randomizeDefaultFruitServing }                                    
                />
              </Route>          

              <Route exact path='/veggie'>
                <Veggie 
                  myServings={ servings }
                  myAddVeggieServing1={ addVeggieServing1 }
                  myAddVeggieServing2={ addVeggieServing2 }
                  myResetVeggieServing={ resetVeggieServing }                
                  myRandomizeDefaultVeggieServing={ randomizeDefaultVeggieServing }
                />
              </Route>          

              <Route exact path='/carbohydrate'>
                <Carbohydrate 
                  myServings={ servings }
                  myAddCarbohydrateServing1={ addCarbohydrateServing1 }
                  myAddCarbohydrateServing2={ addCarbohydrateServing2 }
                  myResetCarbohydrateServing={ resetCarbohydrateServing }                
                  myRandomizeDefaultCarbohydrateServing={ randomizeDefaultCarbohydrateServing }                  
                />
              </Route>          

              <Route exact path='/protein'>
                <Protein 
                  myServings={ servings }
                  myAddProteinServing1={ addProteinServing1 }
                  myAddProteinServing2={ addProteinServing2 }
                  myResetProteinServing={ resetProteinServing }                
                  myRandomizeDefaultProteinServing={ randomizeDefaultProteinServing }                
                />
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