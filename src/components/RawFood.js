

import React from 'react';
import DividerStyled from './DividerStyled';
import ParagraphStyled from './ParagraphStyled';
import Header from './Header';
import Subheader from './Subheader';
import Footer from './Footer';
import ImageStyled from './ImageStyled';
import ButtonStyled from './ButtonStyled';

import Exampler from './Exampler';

import { Link } from 'react-router-dom';

const RawFood = ({ myServings, myAddFruitServing1, myAddFruitServing2, myResetFruitServing }) => {
    return (
        <>
            <DividerStyled>
                {/* page title */}
                <Header title>
                    Raw Food
                </Header>
                {/* page title */}

                {/* paragraph 1 */}
                <ParagraphStyled paragraph>
                    caousel here?
                </ParagraphStyled>
                {/* paragraph 1 */}

                {/* paragraph 2 */}
                <ParagraphStyled paragraph>
                    caousel here also?
                </ParagraphStyled>               
                {/* paragraph 2 */}


                {/* page subtitle 1 */}
                <Subheader title>
                    Fruit
                </Subheader>
                {/* page subtitle 1 */}

                {/* paragraph 4 */}            
                <ParagraphStyled paragraph>
                    Fruit entries
                </ParagraphStyled>               
                {/* paragraph 4 */}
            </DividerStyled>

            <DividerStyled parallel2>
                {/* <DividerStyled> */}
                    <ButtonStyled narrow>
                        Satisfied:
                    </ButtonStyled>
                    <ButtonStyled narrow>
                        { myServings.fruits }
                    </ButtonStyled>
                {/* </DividerStyled> */}
                {/* <DividerStyled> */}
                    <ButtonStyled 
                        narrow2
                        onClick={ myAddFruitServing1 }>
                        serving +1        
                    </ButtonStyled>
                {/* </DividerStyled> */}
                {/* <DividerStyled> */}
                    <ButtonStyled 
                        narrow2
                        onClick={ myAddFruitServing2 }>
                        serving +2
                    </ButtonStyled>

                    <ButtonStyled 
                        narrow
                        onClick={ myResetFruitServing }>
                        reset
                    </ButtonStyled>
                {/* </DividerStyled> */}
            </DividerStyled>

            <DividerStyled>
                {/* page subtitle 2 */}
                <Subheader title>
                    Veggie
                </Subheader>
                {/* page subtitle 2 */}

                {/* paragraph 6 */}
                <ParagraphStyled paragraph>
                    Veggie Entries
                </ParagraphStyled>               
                {/* paragraph 6 */}
            </DividerStyled>            

            <DividerStyled footer>
                <Footer>
                    <Link to='/'>&lArr; Home</Link>
                </Footer>

                <Footer>
                    <Link to='/cooked-food'>CookedFood &rArr;</Link>
                </Footer>
            </DividerStyled>
        </>
    )
}
export default RawFood;