

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

// these are styled components used with React, essentially localized CSS-styled React components
import DividerStyled from './components/DividerStyled';
import UnorderedListStyled from './components/UnorderedListStyled';
import ListItemStyled from './components/ListItemStyled';
import AnchorStyled from './components/AnchorStyled';

// components for each individual route
import Home from './components/Home';
import Fruit from './components/Fruit';
import Veggie from './components/Veggie';
import Carbohydrate from './components/Carbohydrate';
import Protein from './components/Protein';
import MentalHealth from './components/MentalHealth';
import SpiritualHealth from './components/SpiritualHealth';
import Summary from './components/Summary';

// global CSS with styled components
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
// most React state is stored in App.js, and passed in via props to most routes,
// where each component extracts relevant information from the passed props
// the supported functionalities are adding 1, 2, or 3 servings consumed, and calculates the result based on the default serving size
// additionally, resetting default serving size and servings consumed are also supported
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
    proteins: 0,

    // number of 15-minute breaks
    defaultTakeBreaks: 2,
    takeBreaks: 0,

    // number of times living at the present
    defaultPresentLivings: 2,
    presentLivings: 0,
  })

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

  const addFruitServing3 = () => (
    setServings( servings => ({
      ...servings,
      fruits: servings.fruits + 3
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

  const addVeggieServing3 = () => (
    setServings( servings => ({
      ...servings,
      veggies: servings.veggies + 3
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

  const addCarbohydrateServing3 = () => (
    setServings( servings => ({
      ...servings,
      carbohydrates: servings.carbohydrates + 3
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

  const addProteinServing3 = () => (
    setServings( servings => ({
      ...servings,
      proteins: servings.proteins + 3
    }))
  )

  const resetProteinServing = () => (
    setServings( servings => ({
      ...servings,
      proteins: 0
    }))
  )
  // protein functions

  // take break functions
  const randomizeDefaultTakeBreakServing = () => (
    // original default is 2
    // new default range = (1, 3)
    setServings( servings => ({
      ...servings,
      defaultTakeBreaks: 1 + Math.trunc((Math.random() * 3))
    }))
  )

  const addTakeBreakServing1 = () => (
    setServings( servings => ({
      ...servings,
      takeBreaks: servings.takeBreaks + 1
    }))
  )

  const addTakeBreakServing2 = () => (
    setServings( servings => ({
      ...servings,
      takeBreaks: servings.takeBreaks + 2
    }))
  )

  const addTakeBreakServing3 = () => (
    setServings( servings => ({
      ...servings,
      takeBreaks: servings.takeBreaks + 3
    }))
  )

  const resetTakeBreakServing = () => (
    setServings( servings => ({
      ...servings,
      takeBreaks: 0
    }))
  )
  // take break functions

  // present living functions
  const randomizeDefaultPresentLivingServing = () => (
    // original default is 2
    // new default range = (1, 3)
    setServings( servings => ({
      ...servings,
      defaultPresentLivings: 1 + Math.trunc((Math.random() * 3))
    }))
  )

  const addPresentLivingServing1 = () => (
    setServings( servings => ({
      ...servings,
      presentLivings: servings.presentLivings + 1
    }))
  )

  const addPresentLivingServing2 = () => (
    setServings( servings => ({
      ...servings,
      presentLivings: servings.presentLivings + 2
    }))
  )

  const addPresentLivingServing3 = () => (
    setServings( servings => ({
      ...servings,
      presentLivings: servings.presentLivings + 3
    }))
  )

  const resetPresentLivingServing = () => (
    setServings( servings => ({
      ...servings,
      presentLivings: 0
    }))
  )
  // present living functions

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
                  <AnchorStyled silver>
                    Home
                  </AnchorStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/fruit">
                  <AnchorStyled>
                    Fruit
                  </AnchorStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/veggie">
                  <AnchorStyled silver>
                    Veggie
                  </AnchorStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/carbohydrate">
                  <AnchorStyled>
                    Carbohydrate
                  </AnchorStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/protein">
                  <AnchorStyled silver>
                    Protein
                  </AnchorStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/mental-health">
                  <AnchorStyled>
                    Mental Health
                  </AnchorStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/spiritual-health">
                  <AnchorStyled silver>
                  Spiritual Health
                  </AnchorStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/summary">
                  <AnchorStyled>
                    Summary
                  </AnchorStyled>
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
                  />
              </Route>          

              <Route exact path='/fruit'>
                <Fruit 
                  myServings={ servings }

                  myAddFruitServing1={ addFruitServing1 }
                  myAddFruitServing2={ addFruitServing2 }
                  myAddFruitServing3={ addFruitServing3 }
                  myResetFruitServing={ resetFruitServing }                
                  myRandomizeDefaultFruitServing={ randomizeDefaultFruitServing }                                    
                />
              </Route>          

              <Route exact path='/veggie'>
                <Veggie 
                  myServings={ servings }
                  myAddVeggieServing1={ addVeggieServing1 }
                  myAddVeggieServing2={ addVeggieServing2 }
                  myAddVeggieServing3={ addVeggieServing3 }
                  myResetVeggieServing={ resetVeggieServing }                
                  myRandomizeDefaultVeggieServing={ randomizeDefaultVeggieServing }
                />
              </Route>          

              <Route exact path='/carbohydrate'>
                <Carbohydrate 
                  myServings={ servings }
                  myAddCarbohydrateServing1={ addCarbohydrateServing1 }
                  myAddCarbohydrateServing2={ addCarbohydrateServing2 }
                  myAddCarbohydrateServing3={ addCarbohydrateServing3 }
                  myResetCarbohydrateServing={ resetCarbohydrateServing }                
                  myRandomizeDefaultCarbohydrateServing={ randomizeDefaultCarbohydrateServing }                  
                />
              </Route>          

              <Route exact path='/protein'>
                <Protein 
                  myServings={ servings }
                  myAddProteinServing1={ addProteinServing1 }
                  myAddProteinServing2={ addProteinServing2 }
                  myAddProteinServing3={ addProteinServing3 }
                  myResetProteinServing={ resetProteinServing }                
                  myRandomizeDefaultProteinServing={ randomizeDefaultProteinServing }                
                />
              </Route>          

              <Route exact path='/mental-health'>
                <MentalHealth 
                  myServings={ servings }
                  myAddTakeBreakServing1={ addTakeBreakServing1 }
                  myAddTakeBreakServing2={ addTakeBreakServing2 }
                  myAddTakeBreakServing3={ addTakeBreakServing3 }
                  myResetTakeBreakServing={ resetTakeBreakServing }                
                  myRandomizeDefaultTakeBreakServing={ randomizeDefaultTakeBreakServing }                
                />
              </Route>          

              <Route exact path='/spiritual-health'>
                <SpiritualHealth 
                  myServings={ servings }
                  myAddPresentLivingServing1={ addPresentLivingServing1 }
                  myAddPresentLivingServing2={ addPresentLivingServing2 }
                  myAddPresentLivingServing3={ addPresentLivingServing3 }
                  myResetPresentLivingServing={ resetPresentLivingServing }                
                  myRandomizeDefaultPresentLivingServing={ randomizeDefaultPresentLivingServing }                
                />
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