

import React from 'react';
import DividerStyled from './DividerStyled';
import ParagraphStyled from './ParagraphStyled';
import Header from './Header';
import Footer from './Footer';

import { Link } from 'react-router-dom';

const CookedFood = () => {
    return (
        <>
            <DividerStyled>
                {/* page title */}
                <Header title>
                    Cooked Food
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

                {/* paragraph 4 */}            
                <ParagraphStyled paragraph>
                    Carbohydrates entries
                </ParagraphStyled>               
                {/* paragraph 4 */}
            </DividerStyled>

            <DividerStyled>
                {/* page subtitle 2 */}
                {/* page subtitle 2 */}

                {/* paragraph 6 */}
                <ParagraphStyled paragraph>
                    Protein Entries
                </ParagraphStyled>               
                {/* paragraph 6 */}
            </DividerStyled>            

            <DividerStyled footer>
                <Footer>
                    <Link to='/raw-food'>&lArr; Raw Food</Link>
                </Footer>

                <Footer>
                    <Link to='/mental-health'>Mental Health &rArr;</Link>
                </Footer>
            </DividerStyled>
        </>
    )
}
export default CookedFood;