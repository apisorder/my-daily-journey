

import React from 'react';
import DividerStyled from './DividerStyled';
import ParagraphStyled from './ParagraphStyled';
import Header from './Header';
import Footer from './Footer';

import { Link } from 'react-router-dom';

const Summary = ({ myServings }) => {
    return (
        <>
            <DividerStyled>
                {/* page title */}
                <Header title>
                    Summary
                </Header>
                {/* page title */}
            </DividerStyled>

                <DividerStyled>
                    <ParagraphStyled>
                        current fruit servings: { myServings.fruits }
                    </ParagraphStyled>
                </DividerStyled>

            <DividerStyled footer>
                <Footer>
                    <Link to='/reference'>&lArr; Reference</Link>
                </Footer>

                <Footer>
                    <Link to='/'>Home &rArr;</Link>
                </Footer>
            </DividerStyled>
        </>
    )
}
export default Summary;