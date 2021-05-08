

// these are styled components used with React, essentially localized CSS-styled React components
import React from 'react';
import DividerStyled from './DividerStyled';
import AnchorStyled from './AnchorStyled';

// all React state is stored in App.js, and passed in via props, which has been destructured for faster access
// extract relevant information from App component's state and use Math.trunc() and multiplication to achieve desired output
// goal is the ratio between needed servings and servings consumed, and progress is the percentage based on that ratio for easier viewing
const Summary = ({ myServings }) => {
    return (
        <>
            <DividerStyled>
                <AnchorStyled summaryed>
                    📝Summary
                </AnchorStyled>

                <AnchorStyled subSummaryed>
                    fruits 🍉🥝🍒
                </AnchorStyled>
                
                <AnchorStyled goal>
                    goal: { myServings.fruits } / { myServings.defaultFruits }                        
                </AnchorStyled>

                <AnchorStyled progress>
                    🌡️ progress: { Math.trunc( ( myServings.fruits  /  myServings.defaultFruits ) * 100 ) } %                       
                </AnchorStyled>

                <AnchorStyled subSummaryedAlt>
                    veggies 🍆🥦🍅
                </AnchorStyled>

                <AnchorStyled goalAlt>
                    goal: { myServings.veggies } / { myServings.defaultVeggies }                        
                </AnchorStyled>

                <AnchorStyled progressAlt>
                    🌡️ progress: { Math.trunc( ( myServings.veggies  /  myServings.defaultVeggies ) * 100 ) } %                       
                </AnchorStyled>

                <AnchorStyled subSummaryed>
                    carbs 🍞🍝🥯
                </AnchorStyled>
                
                <AnchorStyled goal>
                    goal: { myServings.carbohydrates } / { myServings.defaultCarbohydrates }                        
                </AnchorStyled>

                <AnchorStyled progress>
                    🌡️ progress: { Math.trunc( ( myServings.carbohydrates  /  myServings.defaultCarbohydrates ) * 100 ) } %                       
                </AnchorStyled>

                <AnchorStyled subSummaryedAlt>
                    proteins 🍤🥚🧀
                </AnchorStyled>

                <AnchorStyled goalAlt>
                    goal: { myServings.proteins } / { myServings.defaultProteins }                        
                </AnchorStyled>

                <AnchorStyled progressAlt>
                    🌡️ progress: { Math.trunc( ( myServings.proteins  /  myServings.defaultProteins ) * 100 ) } %                       
                </AnchorStyled>

                <AnchorStyled subSummaryed>
                    mental 🛑💤🔇
                </AnchorStyled>
                
                <AnchorStyled goal>
                    goal: { myServings.takeBreaks } / { myServings.defaultTakeBreaks }                        
                </AnchorStyled>

                <AnchorStyled progress>
                    🌡️ progress: { Math.trunc( ( myServings.takeBreaks  /  myServings.defaultTakeBreaks ) * 100 ) } %                       
                </AnchorStyled>

                <AnchorStyled subSummaryedAlt>
                    spiritual 🔥💬🩹
                </AnchorStyled>

                <AnchorStyled goalAlt>
                    goal: { myServings.presentLivings } / { myServings.defaultPresentLivings }                        
                </AnchorStyled>

                <AnchorStyled progressAlt>
                    🌡️ progress: { Math.trunc( ( myServings.presentLivings  /  myServings.defaultPresentLivings ) * 100 ) } %                       
                </AnchorStyled>
            </DividerStyled>

        </>
    )
}
export default Summary;