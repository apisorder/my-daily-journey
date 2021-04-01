

import React from 'react';
import DividerStyled from './DividerStyled';
import Header from './Header';

import {ReactComponent as HomeBuilding} from '../images/homeBuilding.svg';
import ParagraphStyled from './ParagraphStyled';

const Home = () => {

    return (
        <>
            <DividerStyled>
                
                <DividerStyled>
                    <DividerStyled comparison>

                        <DividerStyled>
                            <Header main>
                                Home
                            </Header>
                        </DividerStyled>

                        {/* home building */}
                        <DividerStyled mainImage>
                            <HomeBuilding />
                        </DividerStyled>
                        {/* home building */}

                        <DividerStyled>               
                            <Header main>
                                Home
                            </Header>
                        </DividerStyled>

                    </DividerStyled>
                </DividerStyled>
                {/* Top triad */}

                {/* Under triad */}
                <DividerStyled>
                    <ParagraphStyled>
                        Information Goes Here fa;ljkdf dsjfks;ld fjkdl;fa sdfdklf sjdfkl; dajfk;d fj;fja dsfkd fkal;sdf j; jfskld;fj daskfl;ds jfklasd fjkdl;sjk fl; 
                    </ParagraphStyled>
                </DividerStyled>
                {/* Under triad */}                

            </DividerStyled>
        </>
    )
}
export default Home;