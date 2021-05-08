

// these are styled components used with React, essentially localized CSS-styled React components
import React, { useState } from 'react';
import DividerStyled from './DividerStyled';
import AnchorStyled from './AnchorStyled';
import ImageStyled from './ImageStyled';

import CarbohydrateOne from '../images/CarbohydrateOne.png';
import CarbohydrateTwo from '../images/CarbohydrateTwo.png';

// most React state is stored in App.js, and passed in via props, which has been destructured for faster access
// extract relevant information from App component's state
// local state is used to control whether to show the reminder images or Notification, and to toggle the control
// the supported functionalities are adding 1, 2, or 3 servings consumed, and calculates the result based on the default serving size
// additionally, resetting default serving size and servings consumed are also supported
const Carbohydrate = ({ 
    myServings, 
    myAddCarbohydrateServing1, 
    myAddCarbohydrateServing2, 
    myAddCarbohydrateServing3, 
    myResetCarbohydrateServing, 
    myRandomizeDefaultCarbohydrateServing,    
}) => {

    const [ showReminder, setShowReminder ] = useState( true );
    const toggleReminder = () => (
        setShowReminder( showReminder => !showReminder )
    )

    return (
        <>
            <DividerStyled>
                    <AnchorStyled categoryed>
                        🍞🍝🥯 carbs
                    </AnchorStyled>

                    <AnchorStyled defaulted>
                        needed: { myServings.defaultCarbohydrates }                        
                    </AnchorStyled>

                    <AnchorStyled consumed>
                        consumed: { myServings.carbohydrates }                        
                    </AnchorStyled>

                    <AnchorStyled remained>
                        {/* if already met the requirement, display 0 */}
                        remaining: { 
                            (myServings.defaultCarbohydrates - myServings.carbohydrates) < 0 
                            ? 0 
                            : (myServings.defaultCarbohydrates - myServings.carbohydrates) 
                            }

                    </AnchorStyled>

                    <AnchorStyled added 
                        onClick={ myAddCarbohydrateServing1 }
                    >
                        +1 🍞
                    </AnchorStyled>

                    <AnchorStyled added
                        onClick={ myAddCarbohydrateServing2 }
                    >
                        +2 🍞🍝
                    </AnchorStyled>

                    <AnchorStyled added
                        onClick={ myAddCarbohydrateServing3 }
                    >
                        +3🍞🍝🥯
                    </AnchorStyled>

                    <AnchorStyled resetDefaulted
                        onClick={ myRandomizeDefaultCarbohydrateServing }
                    >
                        needed 🔃
                    </AnchorStyled>

                    <AnchorStyled resetConsumed
                        onClick={ myResetCarbohydrateServing }
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
                            src={ CarbohydrateOne } 
                            alt='Carbohydrate One'
                        />
                    </DividerStyled>

                    <DividerStyled>
                        <ImageStyled 
                            src={ CarbohydrateTwo } 
                            alt='Carbohydrate Two'
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
export default Carbohydrate;