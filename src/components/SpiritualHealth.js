

// these are styled components used with React, essentially localized CSS-styled React components
import React, { useState } from 'react';
import DividerStyled from './DividerStyled';
import AnchorStyled from './AnchorStyled';
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
                    <AnchorStyled categoryed>
                        🔥💬🩹 Here and Now
                    </AnchorStyled>

                    <AnchorStyled defaulted>
                        needed: { myServings.defaultPresentLivings }                        
                    </AnchorStyled>

                    <AnchorStyled consumed>
                        consumed: { myServings.presentLivings }                        
                    </AnchorStyled>

                    <AnchorStyled remained>
                        {/* if already met the requirement, display 0 */}
                        remaining: { 
                            (myServings.defaultPresentLivings - myServings.presentLivings) < 0 
                            ? 0 
                            : (myServings.defaultPresentLivings - myServings.presentLivings) 
                            }

                    </AnchorStyled>

                    <AnchorStyled added 
                        onClick={ myAddPresentLivingServing1 }
                    >
                        +1 🔥       
                    </AnchorStyled>

                    <AnchorStyled added
                        onClick={ myAddPresentLivingServing2 }
                    >
                        +2 🔥💬
                    </AnchorStyled>

                    <AnchorStyled added
                        onClick={ myAddPresentLivingServing3 }
                    >
                        +3🔥💬🩹
                    </AnchorStyled>

                    <AnchorStyled resetDefaulted
                        onClick={ myRandomizeDefaultPresentLivingServing }
                    >
                        needed 🔃
                    </AnchorStyled>

                    <AnchorStyled resetConsumed
                        onClick={ myResetPresentLivingServing }
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
                <AnchorStyled
                        onClick={ toggleReminder }>
                        Hide Reminder
                </AnchorStyled>
            }
        </>
    )
}
export default SpirtualHealth;