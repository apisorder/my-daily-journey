

// these are styled components used with React, essentially localized CSS-styled React components
import React, { useState } from 'react';
import DividerStyled from './DividerStyled';
import AnchorStyled from './AnchorStyled';
import ImageStyled from './ImageStyled';

import ProteinOne from '../images/ProteinOne.png';
import ProteinTwo from '../images/ProteinTwo.png';

// most React state is stored in App.js, and passed in via props, which has been destructured for faster access
// extract relevant information from App component's state
// local state is used to control whether to show the reminder images or Notification, and to toggle the control
// the supported functionalities are adding 1, 2, or 3 servings consumed, and calculates the result based on the default serving size
// additionally, resetting default serving size and servings consumed are also supported
const Protein = ({ 
    myServings, 
    myAddProteinServing1, 
    myAddProteinServing2, 
    myAddProteinServing3, 
    myResetProteinServing, 
    myRandomizeDefaultProteinServing,    
}) => {

    const [ showReminder, setShowReminder ] = useState( true );
    const toggleReminder = () => (
        setShowReminder( showReminder => ! showReminder )
    )

    return (
        <>
            <DividerStyled>
                    <AnchorStyled categoryed>
                        🍤🥚🧀 proteins
                    </AnchorStyled>

                    <AnchorStyled defaulted>
                        needed: { myServings.defaultProteins }                        
                    </AnchorStyled>

                    <AnchorStyled consumed>
                        consumed: { myServings.proteins }                        
                    </AnchorStyled>

                    <AnchorStyled remained>
                        {/* if already met the requirement, display 0 */}
                        remaining: { 
                            (myServings.defaultProteins - myServings.proteins) < 0 
                            ? 0 
                            : (myServings.defaultProteins - myServings.proteins) 
                            }

                    </AnchorStyled>

                    <AnchorStyled added 
                        onClick={ myAddProteinServing1 }
                    >
                        +1 🍤
                    </AnchorStyled>

                    <AnchorStyled added
                        onClick={ myAddProteinServing2 }
                    >
                        +2 🍤🥚
                    </AnchorStyled>

                    <AnchorStyled added
                        onClick={ myAddProteinServing3 }
                    >
                        +3🍤🥚🧀
                    </AnchorStyled>

                    <AnchorStyled resetDefaulted
                        onClick={ myRandomizeDefaultProteinServing }
                    >
                        needed 🔃
                    </AnchorStyled>

                    <AnchorStyled resetConsumed
                        onClick={ myResetProteinServing }
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
                            src={ ProteinOne } 
                            alt='Protein One'
                        />
                    </DividerStyled>

                    <DividerStyled>
                        <ImageStyled 
                            src={ ProteinTwo } 
                            alt='Protein Two'
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
export default Protein;