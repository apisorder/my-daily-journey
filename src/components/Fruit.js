

// these are styled components used with React, essentially localized CSS-styled React components
import React, { useState } from 'react';
import DividerStyled from './DividerStyled';
import AnchorStyled from './AnchorStyled';
import ImageStyled from './ImageStyled';

import FruitOne from '../images/FruitOne.png';
import FruitTwo from '../images/FruitTwo.png';

// most React state is stored in App.js, and passed in via props, which has been destructured for faster access
// extract relevant information from App component's state
// local state is used to control whether to show the reminder images or Notification, and to toggle the control
// the supported functionalities are adding 1, 2, or 3 servings consumed, and calculates the result based on the default serving size
// additionally, resetting default serving size and servings consumed are also supported
const Fruit = ({ 
    myServings, 
    myAddFruitServing1, 
    myAddFruitServing2, 
    myAddFruitServing3, 
    myResetFruitServing, 
    myRandomizeDefaultFruitServing,    
}) => {

    const [ showReminder, setShowReminder ] = useState( true );
    const toggleReminder = () => (
        setShowReminder( showReminder => ! showReminder )
    )

    return (
        <>
            <DividerStyled>
                    <AnchorStyled categoryed>
                        🍉🥝🍒 fruits
                    </AnchorStyled>

                    <AnchorStyled defaulted>
                        needed: { myServings.defaultFruits }
                    </AnchorStyled>

                    <AnchorStyled consumed>
                        consumed: { myServings.fruits }                        
                    </AnchorStyled>

                    <AnchorStyled remained>
                        {/* if already met the requirement, display 0 */}
                        remaining: { 
                            (myServings.defaultFruits - myServings.fruits) < 0 
                            ? 0 
                            : (myServings.defaultFruits - myServings.fruits) 
                            }

                    </AnchorStyled>

                    <AnchorStyled added 
                        onClick={ myAddFruitServing1 }
                    >
                        +1 🍉       
                    </AnchorStyled>

                    <AnchorStyled added
                        onClick={ myAddFruitServing2 }
                    >
                        +2 🍉🥝
                    </AnchorStyled>

                    <AnchorStyled added
                        onClick={ myAddFruitServing3 }
                    >
                        +3🍉🥝🍒
                    </AnchorStyled>

                    <AnchorStyled
                        onClick={ myRandomizeDefaultFruitServing }
                    >
                        needed 🔃
                    </AnchorStyled>

                    <AnchorStyled
                        onClick={ myResetFruitServing }
                    >
                        consumed 🔃
                    </AnchorStyled>

                    { showReminder &&
                        <AnchorStyled
                            onClick={ toggleReminder }>
                            🎗️ Show Reminder
                        </AnchorStyled>
                    }

            </DividerStyled>
            {/* <DividerStyled> */}

            {
                !showReminder &&
                <DividerStyled comparison>
                    <DividerStyled>
                        <ImageStyled 
                            src={ FruitOne } 
                            alt='Fruit One'
                        />
                    </DividerStyled>

                    <DividerStyled>
                        <ImageStyled 
                            src={ FruitTwo } 
                            alt='Fruit Two'
                        />
                    </DividerStyled>
                </DividerStyled>                
            }

            {
                !showReminder &&
                <AnchorStyled
                        onClick={ toggleReminder }>
                        Hide Reminder
                </AnchorStyled>
            }
        </>
    )
}
export default Fruit;