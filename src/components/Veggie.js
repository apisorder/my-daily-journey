

// these are styled components used with React, essentially localized CSS-styled React components
import React, { useState } from 'react';
import DividerStyled from './DividerStyled';
import AnchorStyled from './AnchorStyled';
import ImageStyled from './ImageStyled';

import VeggieOne from '../images/VeggieOne.png';
import VeggieTwo from '../images/VeggieTwo.png';

// most React state is stored in App.js, and passed in via props, which has been destructured for faster access
// extract relevant information from App component's state
// local state is used to control whether to show the reminder images or Notification, and to toggle the control
// the supported functionalities are adding 1, 2, or 3 servings consumed, and calculates the result based on the default serving size
// additionally, resetting default serving size and servings consumed are also supported
const Veggie = ({ 
    myServings, 
    myAddVeggieServing1, 
    myAddVeggieServing2, 
    myAddVeggieServing3, 
    myResetVeggieServing, 
    myRandomizeDefaultVeggieServing,    
}) => {

    const [ showReminder, setShowReminder ] = useState( true );
    const toggleReminder = () => (
        setShowReminder( showReminder => ! showReminder )
    )

    return (
        <>
            <DividerStyled>
                    <AnchorStyled categoryed>
                        🍆🥦🍅 veggies
                    </AnchorStyled>

                    <AnchorStyled defaulted>
                        needed: { myServings.defaultVeggies }                        
                    </AnchorStyled>

                    <AnchorStyled consumed>
                        consumed: { myServings.veggies }                        
                    </AnchorStyled>

                    <AnchorStyled remained>
                        {/* if already met the requirement, display 0 */}
                        remaining: { 
                            (myServings.defaultVeggies - myServings.veggies) < 0 
                            ? 0 
                            : (myServings.defaultVeggies - myServings.veggies) 
                            }

                    </AnchorStyled>

                    <AnchorStyled added 
                        onClick={ myAddVeggieServing1 }
                    >
                        +1 🍆
                    </AnchorStyled>

                    <AnchorStyled added
                        onClick={ myAddVeggieServing2 }
                    >
                        +2 🍆🥦
                    </AnchorStyled>

                    <AnchorStyled added
                        onClick={ myAddVeggieServing3 }
                    >
                        +3🍆🥦🍅
                    </AnchorStyled>

                    <AnchorStyled resetDefaulted
                        onClick={ myRandomizeDefaultVeggieServing }
                    >
                        needed 🔃
                    </AnchorStyled>

                    <AnchorStyled resetConsumed
                        onClick={ myResetVeggieServing }
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
                            src={ VeggieOne } 
                            alt='Veggie One'
                        />
                    </DividerStyled>

                    <DividerStyled>
                        <ImageStyled 
                            src={ VeggieTwo } 
                            alt='Veggie Two'
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
export default Veggie;