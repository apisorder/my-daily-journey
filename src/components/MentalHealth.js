

import React from 'react';
import DividerStyled from './DividerStyled';
import ParagraphStyled from './ParagraphStyled';
import Header from './Header';
import Subheader from './Subheader';
import Footer from './Footer';
import ImageStyled from './ImageStyled';

import Exampler from './Exampler';

import { Link } from 'react-router-dom';

const MentalHealth = () => {
    return (
        <>
            <DividerStyled>
                {/* page title */}
                <Header title>
                    Mental Health
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
                    <Link to='/cooked-food'>&lArr; Cooked Food</Link>
                </Footer>

                <Footer>
                    <Link to='/spiritual-health'>Spiritual Health &rArr;</Link>
                </Footer>
            </DividerStyled>
        </>
    )
}
export default MentalHealth;