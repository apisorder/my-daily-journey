

import React from 'react';
import DividerStyled from './DividerStyled';
import ButtonStyled from './ButtonStyled';
import ImageStyled from './ImageStyled';

import One from '../images/One.png';
import Two from '../images/Two.png';
import Three from '../images/Three.png';
import 'pure-react-carousel/dist/react-carousel.es.css';


import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

const Carbohydrate = ({ 
    myServings, 
    myAddCarbohydrateServing1, 
    myAddCarbohydrateServing2, 
    myResetCarbohydrateServing, 
    myRandomizeDefaultCarbohydrateServing,    
}) => {
    return (
        <>
            <DividerStyled>
                    <ButtonStyled category>
                        carbs
                    </ButtonStyled>

                    <ButtonStyled secondary>
                        Default: { myServings.defaultCarbohydrates }                        
                    </ButtonStyled>

                    <ButtonStyled secondary>
                        Intake: { myServings.carbohydrates }                        
                    </ButtonStyled>

                    <ButtonStyled 
                        secondary>
                        {/* if already met the requirement, display 0 */}
                        Remain: { 
                            (myServings.defaultCarbohydrates - myServings.carbohydrates) < 0 
                            ? 0 
                            : (myServings.defaultCarbohydrates - myServings.carbohydrates) 
                            }

                    </ButtonStyled>

                    <ButtonStyled 
                        primary
                        onClick={ myAddCarbohydrateServing1 }
                    >
                        Intake +1        
                    </ButtonStyled>

                    <ButtonStyled 
                        primary
                        onClick={ myAddCarbohydrateServing2 }
                    >
                        Intake +2
                    </ButtonStyled>

                    <ButtonStyled 
                        emergency
                        onClick={ myResetCarbohydrateServing }
                    >
                        Intake Reset
                    </ButtonStyled>

                    <ButtonStyled 
                        onClick={ myRandomizeDefaultCarbohydrateServing }
                    >
                        Random Default
                    </ButtonStyled>
            </DividerStyled>

            {/* react carousel library */}
            <CarouselProvider
                naturalSlideWidth={ 600 }
                naturalSlideHeight={ 700 }
                totalSlides={3}
                isPlaying={ true }
                infinite={ true }
            >

            <Slider>
                <Slide index={0}>
                    <DividerStyled>
                        <ImageStyled src={One} alt='whatever'/>
                    </DividerStyled>
                </Slide>

                <Slide index={1}>
                    <DividerStyled>
                        <ImageStyled src={Two} alt='whatever'/>
                    </DividerStyled>
                </Slide>

                <Slide index={2}>
                    <DividerStyled>
                        <ImageStyled src={Three} alt='whatever'/>
                    </DividerStyled>
                </Slide>
            </Slider>
        </CarouselProvider>
        {/* react carousel library */}                
    </>
    )
}
export default Carbohydrate;