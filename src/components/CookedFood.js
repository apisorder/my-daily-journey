

import React from 'react';
import DividerStyled from './DividerStyled';
import ButtonStyled from './ButtonStyled';
import ImageStyled from './ImageStyled';

import One from '../images/One.png';
import Two from '../images/Two.png';
import Three from '../images/Three.png';
import 'pure-react-carousel/dist/react-carousel.es.css';


import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

const CookedFood = ({ 
    myServings, 
    myAddFruitServing1, 
    myAddFruitServing2, 
    myResetFruitServing, 
    myAddVeggieServing1, 
    myAddVeggieServing2, 
    myResetVeggieServing, 
    myRandomizeDefaultFruitServing,
    myRandomizeDefaultVeggieServing
}) => {
    return (
        <>
            <DividerStyled>
                    <ButtonStyled category>
                        fruits
                    </ButtonStyled>

                    <ButtonStyled secondary>
                        Default: { myServings.defaultFruits }                        
                    </ButtonStyled>

                    <ButtonStyled secondary>
                        Intake: { myServings.fruits }                        
                    </ButtonStyled>

                    <ButtonStyled 
                        secondary>
                        {/* if already met the requirement, display 0 */}
                        Remain: { 
                            (myServings.defaultFruits - myServings.fruits) < 0 
                            ? 0 
                            : (myServings.defaultFruits - myServings.fruits) 
                            }

                    </ButtonStyled>

                    <ButtonStyled 
                        primary
                        onClick={ myAddFruitServing1 }
                    >
                        Intake +1        
                    </ButtonStyled>

                    <ButtonStyled 
                        primary
                        onClick={ myAddFruitServing2 }
                    >
                        Intake +2
                    </ButtonStyled>

                    <ButtonStyled 
                        emergency
                        onClick={ myResetFruitServing }
                    >
                        Intake Reset
                    </ButtonStyled>

                    <ButtonStyled 
                        onClick={ myRandomizeDefaultFruitServing }
                    >
                        Random Default
                    </ButtonStyled>

            </DividerStyled>

            <DividerStyled>
                    <ButtonStyled category>
                        veggies
                    </ButtonStyled>

                    <ButtonStyled secondary>
                        Default: { myServings.defaultVeggies }
                    </ButtonStyled>

                    <ButtonStyled secondary>
                        Intake: { myServings.veggies }                        
                    </ButtonStyled>

                    <ButtonStyled 
                        secondary>
                        {/* if already met the requirement, display 0 */}
                        Remain: { 
                            (myServings.defaultVeggies - myServings.veggies) < 0 
                            ? 0 
                            : myServings.defaultVeggies - myServings.veggies }
                    </ButtonStyled>

                    <ButtonStyled 
                        primary
                        onClick={ myAddVeggieServing1 }
                    >
                        Intake +1        
                    </ButtonStyled>

                    <ButtonStyled 
                        primary
                        onClick={ myAddVeggieServing2 }
                    >
                        Intake +2
                    </ButtonStyled>

                    <ButtonStyled 
                        emergency
                        onClick={ myResetVeggieServing }
                    >
                        Intake Reset
                    </ButtonStyled>

                    <ButtonStyled 
                        onClick={ myRandomizeDefaultVeggieServing }
                    >
                        Random Default
                    </ButtonStyled>

            </DividerStyled>

            <DividerStyled>

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

            </DividerStyled>
        </>
    )
}
export default CookedFood;