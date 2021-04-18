

// these are styled components used with React, essentially localized CSS-styled React components
import React, { useState } from 'react';
import DividerStyled from './DividerStyled';
import ButtonStyled from './ButtonStyled';
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
                    <ButtonStyled categoryed>
                        🍆🥦🍅 veggies
                    </ButtonStyled>

                    <ButtonStyled defaulted>
                        needed: { myServings.defaultVeggies }                        
                    </ButtonStyled>

                    <ButtonStyled consumed>
                        consumed: { myServings.veggies }                        
                    </ButtonStyled>

                    <ButtonStyled remained>
                        {/* if already met the requirement, display 0 */}
                        remaining: { 
                            (myServings.defaultVeggies - myServings.veggies) < 0 
                            ? 0 
                            : (myServings.defaultVeggies - myServings.veggies) 
                            }

                    </ButtonStyled>

                    <ButtonStyled added 
                        onClick={ myAddVeggieServing1 }
                    >
                        +1 🍆
                    </ButtonStyled>

                    <ButtonStyled added
                        onClick={ myAddVeggieServing2 }
                    >
                        +2 🍆🥦
                    </ButtonStyled>

                    <ButtonStyled added
                        onClick={ myAddVeggieServing3 }
                    >
                        +3🍆🥦🍅
                    </ButtonStyled>

                    <ButtonStyled resetDefaulted
                        onClick={ myRandomizeDefaultVeggieServing }
                    >
                        needed 🔃
                    </ButtonStyled>

                    <ButtonStyled resetConsumed
                        onClick={ myResetVeggieServing }
                    >
                        consumed 🔃
                    </ButtonStyled>

                    { showReminder &&
                        <ButtonStyled
                            onClick={ toggleReminder }>
                            🎗️ Show Reminder
                        </ButtonStyled>
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
                <ButtonStyled
                        onClick={ toggleReminder }>
                        Hide Reminder
                </ButtonStyled>
            }
        </>
    )
}
export default Veggie;