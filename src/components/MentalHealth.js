

// these are styled components used with React, essentially localized CSS-styled React components
import React, { useState } from 'react';
import DividerStyled from './DividerStyled';
import ButtonStyled from './ButtonStyled';
import ImageStyled from './ImageStyled';

import MentalHealthOne from '../images/MentalHealthOne.png';
import MentalHealthTwo from '../images/MentalHealthTwo.png';

// most React state is stored in App.js, and passed in via props, which has been destructured for faster access
// extract relevant information from App component's state
// local state is used to control whether to show the reminder images or Notification, and to toggle the control
// the supported functionalities are adding 1, 2, or 3 servings consumed, and calculates the result based on the default serving size
// additionally, resetting default serving size and servings consumed are also supported
const MentalHealth = ({ 
    myServings, 
    myAddTakeBreakServing1, 
    myAddTakeBreakServing2, 
    myAddTakeBreakServing3, 
    myResetTakeBreakServing, 
    myRandomizeDefaultTakeBreakServing,    
}) => {

    const [ showReminder, setShowReminder ] = useState( true );
    const toggleReminder = () => (
        setShowReminder( showReminder => ! showReminder )
    )

    return (
        <>
            <DividerStyled>
                    <ButtonStyled categoryed>
                        🛑💤🔇 BREAK
                    </ButtonStyled>

                    <ButtonStyled defaulted>
                        needed: { myServings.defaultTakeBreaks }                        
                    </ButtonStyled>

                    <ButtonStyled consumed>
                        consumed: { myServings.takeBreaks }                        
                    </ButtonStyled>

                    <ButtonStyled remained>
                        {/* if already met the requirement, display 0 */}
                        remaining: { 
                            (myServings.defaultTakeBreaks - myServings.takeBreaks) < 0 
                            ? 0 
                            : (myServings.defaultTakeBreaks - myServings.takeBreaks) 
                            }

                    </ButtonStyled>

                    <ButtonStyled added 
                        onClick={ myAddTakeBreakServing1 }
                    >
                        +1 🛑       
                    </ButtonStyled>

                    <ButtonStyled added
                        onClick={ myAddTakeBreakServing2 }
                    >
                        +2 🛑💤
                    </ButtonStyled>

                    <ButtonStyled added
                        onClick={ myAddTakeBreakServing3 }
                    >
                        +3🛑💤🔇
                    </ButtonStyled>

                    <ButtonStyled resetDefaulted
                        onClick={ myRandomizeDefaultTakeBreakServing }
                    >
                        needed 🔃
                    </ButtonStyled>

                    <ButtonStyled resetConsumed
                        onClick={ myResetTakeBreakServing }
                    >
                        consumed 🔃
                    </ButtonStyled>

                    { showReminder &&
                        <ButtonStyled
                            onClick={ toggleReminder }>
                            🎗️Show Reminder
                        </ButtonStyled>
                    }

            </DividerStyled>
            {/* <DividerStyled> */}

            {
                !showReminder &&
                <DividerStyled comparison>
                    <DividerStyled>
                        <ImageStyled 
                            src={ MentalHealthOne } 
                            alt='Mental Health One'
                        />
                    </DividerStyled>

                    <DividerStyled>
                        <ImageStyled 
                            src={ MentalHealthTwo } 
                            alt='Mental Health Two'
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
export default MentalHealth;