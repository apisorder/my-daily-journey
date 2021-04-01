

import styled, { css } from 'styled-components';

const Header = styled.h1`
color: Purple;
margin: 0rem 16rem;

${props => props.main && css`
    text-align: center;
`}

${props => props.secondary && css`
    font-size: 25px;
    text-align: center;
    color: Purple;
`}
`
export default Header;