

import React from 'react';
import DividerStyled from './DividerStyled';
import ParagraphStyled from './ParagraphStyled';
import Header from './Header';
import Subheader from './Subheader';
import Footer from './Footer';
import ImageStyled from './ImageStyled';

import Exampler from './Exampler';

import browser from '../images/browser.png';

import { Link } from 'react-router-dom';

const Snapple = () => {
    return (
        <>
            <DividerStyled>
                {/* page title */}
                <Header title>
                    PAGE TITLE
                </Header>
                {/* page title */}

                {/* paragraph 1 */}
                <ParagraphStyled paragraph>
                    PARAGRAPH 1
                </ParagraphStyled>
                {/* paragraph 1 */}

                {/* paragraph 2 */}
                <ParagraphStyled paragraph>
                    PARAGRAPH 2
                </ParagraphStyled>               
                {/* paragraph 2 */}

                {/* page subtitle 1 */}
                <Subheader title>
                    SUB HEADER 1
                </Subheader>
                {/* page subtitle 1 */}

                {/* paragraph 3 */}            
                <ParagraphStyled paragraph>
                    PARAGRAPH 3
                </ParagraphStyled>               
                {/* paragraph 3 */}
            </DividerStyled>

            <DividerStyled parallel>
                <DividerStyled>
                    <ImageStyled 
                        src={ browser } 
                        alt='image of a browser'
                    />
                </DividerStyled>

                <DividerStyled>
                    <ImageStyled 
                        src={ browser } 
                        alt='image of a browser'
                    />
                </DividerStyled>
            </DividerStyled>

            <DividerStyled>
                {/* paragraph 4 */}
                <ParagraphStyled paragraph>
                    PARAGRAPH 4
                </ParagraphStyled>
                {/* paragraph 4 */}

                {/* page subtitle 2 */}
                <Subheader title>
                    SUB HEADER 2
                </Subheader>
                {/* page subtitle 2 */}

                {/* paragraph 5 */}
                <ParagraphStyled paragraph>
                    PARAGRAPH 5
                </ParagraphStyled>               
                {/* paragraph 5 */}

                {/* paragraph 6 */}
                <ParagraphStyled paragraph>
                    PARAGRAPH 6
                </ParagraphStyled>               
                {/* paragraph 6 */}
            </DividerStyled>            

            <DividerStyled parallel>
                <DividerStyled>
                    <ImageStyled 
                        src={ browser } 
                        alt='image of a browser'
                    />
                </DividerStyled>

                <DividerStyled>
                    <ImageStyled 
                        src={ browser } 
                        alt='image of a browser'
                    />
                </DividerStyled>
            </DividerStyled>

            <DividerStyled>       
                {/* paragraph 7 */}
                <ParagraphStyled paragraph>
                    PARAGRAPH 7
                </ParagraphStyled>               
                {/* paragraph 7 */}
            </DividerStyled>            

            <DividerStyled>
                {/* page subtitle 3 */}
                <Subheader title>
                    SUB HEADER 3
                </Subheader>
                {/* page subtitle 3 */}

                {/* paragraph 8 */}
                <ParagraphStyled paragraph>
                    PARAGRAPH 8
                </ParagraphStyled>               
                {/* paragraph 8 */}

                {/* paragraph 9 */}
                <ParagraphStyled paragraph>
                    PARAGRAPH 9
                </ParagraphStyled>               
                {/* paragraph 9 */}
            </DividerStyled>            

            <DividerStyled parallel>
                <DividerStyled>
                    <ImageStyled 
                        src={ browser } 
                        alt='image of a browser'
                    />
                </DividerStyled>

                <DividerStyled>
                    <ImageStyled 
                        src={ browser } 
                        alt='image of a browser'
                    />
                </DividerStyled>
                </DividerStyled>

                <DividerStyled>       
                    {/* paragraph 10 */}
                    <ParagraphStyled paragraph>
                        PARAGRAPH 10
                    </ParagraphStyled>               
                    {/* paragraph 10 */}
                </DividerStyled>            

                <DividerStyled footer>
                    <Footer>
                        <Link to='/'>&lArr; PREVIOUS</Link>
                    </Footer>

                    <Footer>
                        <Link to='/hello-world'>NEXT &rArr;</Link>
                    </Footer>
            </DividerStyled>
        </>
    )
}
export default Snapple;