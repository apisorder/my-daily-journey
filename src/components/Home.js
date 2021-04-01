

import React from 'react';
import DividerStyled from './DividerStyled';
import Header from './Header';

import {ReactComponent as HomeBuilding} from '../images/homeBuilding.svg';

const Home = () => {

    return (
        <>
            {/* home building */}
            <DividerStyled mainImage>
                <HomeBuilding />
            </DividerStyled>
            {/* home building */}

            {/* main content */}
            <DividerStyled>
                
                {/* page title */}
                <Header main>
                    Home
                </Header>
                {/* page title */}

            </DividerStyled>
            {/* main content */}
        </>
    )
}
export default Home;