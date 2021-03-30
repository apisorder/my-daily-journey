

import React from 'react';
import DividerStyled from './DividerStyled';
import ParagraphStyled from './ParagraphStyled';
import Header from './Header';

import {ReactComponent as HomeBuilding} from '../images/homeBuilding.svg';

const Home = () => {

    return (
        <>
            {/* home building */}
            <DividerStyled svg>
                <HomeBuilding />
            </DividerStyled>
            {/* home building */}

            {/* main content */}
            <DividerStyled>
                
                {/* page title */}
                <Header title>
                    Home
                </Header>
                {/* page title */}

                {/* paragraph 1 */}
                <ParagraphStyled>
                    Similar to the Java programming language, JavaScript enables the programmer to
                    develop software for both the server and the client. Despite this dual support, 
                    PHP is instead often the language of choice on the server side, and is found 
                    on 79.1% of sites surveyed by W3Techs, a website analyzer. That is, almost 4 
                    out of every 5 web sites will choose PHP for server-side scripting.
                </ParagraphStyled>
                {/* paragraph 1 */}

                {/* paragraph 2 */}
                <ParagraphStyled>
                    As dominant as PHP is, PHP cannot be used on the client side. This is where 
                    JavaScript becomes important: JavaScript is found on 97.1% of web sites, 
                    according to W3Techs. This means if you are a developer who works with the 
                    front end, you are extremely likely to encounter JavaScript.
                </ParagraphStyled>               
                {/* paragraph 2 */}

                {/* paragraph 3 */}
                <ParagraphStyled>
                    This educational tool provides an introduction to the JavaScript language.
                    Begin learning JavaScript by choosing from the list of topics to the left of 
                    this page.
                {/* paragraph 3 */}
                </ParagraphStyled>

            </DividerStyled>
            {/* main content */}
        </>
    )
}
export default Home;