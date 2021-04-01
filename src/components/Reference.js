

import React from 'react';
import DividerStyled from './DividerStyled';
import ParagraphStyled from './ParagraphStyled';
import Header from './Header';
import Footer from './Footer';

import { Link } from 'react-router-dom';

const Reference = () => {
    return (
        <>
            <DividerStyled>
                {/* page title */}
                <Header title>
                    Reference
                </Header>
            </DividerStyled>            

            <DividerStyled footer>
                <Footer>
                    <Link to='/spiritual-health'>&lArr; Spiritual Health</Link>
                </Footer>

                <Footer>
                    <Link to='/summary'>Summary &rArr;</Link>
                </Footer>
            </DividerStyled>
        </>
    )
}
export default Reference;