

// these are styled components used with React, essentially localized CSS-styled React components
import React, { useState } from 'react';
import DividerStyled from './DividerStyled';
import ButtonStyled from './ButtonStyled';
import ImageStyled from './ImageStyled';

import SpirtualHealthOne from '../images/SpiritualHealthOne.png';
import SpiritualHealthTwo from '../images/SpiritualHealthTwo.png';

// most React state is stored in App.js, and passed in via props, which has been destructured for faster access
// extract relevant information from App component's state
// local state is used to control whether to show the reminder images or Notification, and to toggle the control
// the supported functionalities are adding 1, 2, or 3 servings consumed, and calculates the result based on the default serving size
// additionally, resetting default serving size and servings consumed are also supported
const SpirtualHealth = ({ 
    myServings, 
    myAddPresentLivingServing1, 
    myAddPresentLivingServing2, 
    myAddPresentLivingServing3, 
    myResetPresentLivingServing, 
    myRandomizeDefaultPresentLivingServing,    
}) => {

    const [ showReminder, setShowReminder ] = useState( true );
    const toggleReminder = () => (
        setShowReminder( showReminder => ! showReminder )
    )

    return (
        <>
            <DividerStyled>
                    <ButtonStyled categoryed>
                        🔥💬🩹 Here and Now
                    </ButtonStyled>

                    <ButtonStyled defaulted>
                        needed: { myServings.defaultPresentLivings }                        
                    </ButtonStyled>

                    <ButtonStyled consumed>
                        consumed: { myServings.presentLivings }                        
                    </ButtonStyled>

                    <ButtonStyled remained>
                        {/* if already met the requirement, display 0 */}
                        remaining: { 
                            (myServings.defaultPresentLivings - myServings.presentLivings) < 0 
                            ? 0 
                            : (myServings.defaultPresentLivings - myServings.presentLivings) 
                            }

                    </ButtonStyled>

                    <ButtonStyled added 
                        onClick={ myAddPresentLivingServing1 }
                    >
                        +1 🔥       
                    </ButtonStyled>

                    <ButtonStyled added
                        onClick={ myAddPresentLivingServing2 }
                    >
                        +2 🔥💬
                    </ButtonStyled>

                    <ButtonStyled added
                        onClick={ myAddPresentLivingServing3 }
                    >
                        +3🔥💬🩹
                    </ButtonStyled>

                    <ButtonStyled resetDefaulted
                        onClick={ myRandomizeDefaultPresentLivingServing }
                    >
                        needed 🔃
                    </ButtonStyled>

                    <ButtonStyled resetConsumed
                        onClick={ myResetPresentLivingServing }
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
                            src={ SpirtualHealthOne } 
                            alt='Spirtual Health One'
                        />
                    </DividerStyled>

                    <DividerStyled>
                        <ImageStyled 
                            src={ SpiritualHealthTwo } 
                            alt='Spiritual Health Two'
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
export default SpirtualHealth;