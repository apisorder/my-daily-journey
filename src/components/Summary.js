

// these are styled components used with React, essentially localized CSS-styled React components
import React from 'react';
import DividerStyled from './DividerStyled';
import ButtonStyled from './ButtonStyled';

// all React state is stored in App.js, and passed in via props, which has been destructured for faster access
// extract relevant information from App component's state and use Math.trunc() and multiplication to achieve desired output
// goal is the ratio between needed servings and servings consumed, and progress is the percentage based on that ratio for easier viewing
const Summary = ({ myServings }) => {
    return (
        <>
            <DividerStyled>
                <ButtonStyled summaryed>
                    📝Summary
                </ButtonStyled>

                <ButtonStyled subSummaryed>
                    fruits 🍉🥝🍒
                </ButtonStyled>
                
                <ButtonStyled goal>
                    goal: { myServings.fruits } / { myServings.defaultFruits }                        
                </ButtonStyled>

                <ButtonStyled progress>
                    🌡️ progress: { Math.trunc( ( myServings.fruits  /  myServings.defaultFruits ) * 100 ) } %                       
                </ButtonStyled>

                <ButtonStyled subSummaryedAlt>
                    veggies 🍆🥦🍅
                </ButtonStyled>

                <ButtonStyled goalAlt>
                    goal: { myServings.veggies } / { myServings.defaultVeggies }                        
                </ButtonStyled>

                <ButtonStyled progressAlt>
                    🌡️ progress: { Math.trunc( ( myServings.veggies  /  myServings.defaultVeggies ) * 100 ) } %                       
                </ButtonStyled>

                <ButtonStyled subSummaryed>
                    carbs 🍞🍝🥯
                </ButtonStyled>
                
                <ButtonStyled goal>
                    goal: { myServings.carbohydrates } / { myServings.defaultCarbohydrates }                        
                </ButtonStyled>

                <ButtonStyled progress>
                    🌡️ progress: { Math.trunc( ( myServings.carbohydrates  /  myServings.defaultCarbohydrates ) * 100 ) } %                       
                </ButtonStyled>

                <ButtonStyled subSummaryedAlt>
                    proteins 🍤🥚🧀
                </ButtonStyled>

                <ButtonStyled goalAlt>
                    goal: { myServings.proteins } / { myServings.defaultProteins }                        
                </ButtonStyled>

                <ButtonStyled progressAlt>
                    🌡️ progress: { Math.trunc( ( myServings.proteins  /  myServings.defaultProteins ) * 100 ) } %                       
                </ButtonStyled>

                <ButtonStyled subSummaryed>
                    mental 🛑💤🔇
                </ButtonStyled>
                
                <ButtonStyled goal>
                    goal: { myServings.takeBreaks } / { myServings.defaultTakeBreaks }                        
                </ButtonStyled>

                <ButtonStyled progress>
                    🌡️ progress: { Math.trunc( ( myServings.takeBreaks  /  myServings.defaultTakeBreaks ) * 100 ) } %                       
                </ButtonStyled>

                <ButtonStyled subSummaryedAlt>
                    spiritual 🔥💬🩹
                </ButtonStyled>

                <ButtonStyled goalAlt>
                    goal: { myServings.presentLivings } / { myServings.defaultPresentLivings }                        
                </ButtonStyled>

                <ButtonStyled progressAlt>
                    🌡️ progress: { Math.trunc( ( myServings.presentLivings  /  myServings.defaultPresentLivings ) * 100 ) } %                       
                </ButtonStyled>
            </DividerStyled>

        </>
    )
}
export default Summary;