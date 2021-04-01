

import styled, { css } from 'styled-components';

const Header = styled.h1`
color: Purple;
margin: 0rem 16rem;

${props => props.main && css`
    text-align: center;
    border: indigo 25px dotted;
    margin: 7rem 7rem;
`}

${props => props.mainBorder && css`
    text-align: center;
    border: BurlyWood 10px solid;
    margin: 0rem 0rem;
    text-transform: uppercase;
`}

${props => props.secondary && css`
    font-size: 29px;
    text-align: center;
    border: BurlyWood 10px solid; 
    margin: 1rem 0rem; 
    text-transform: uppercase;
    transform: skewX(20deg);
`}
`
export default Header;