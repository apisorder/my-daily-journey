

import styled, { css } from 'styled-components';

const ParagraphStyled = styled.p`
    line-height: 1.8;
    font-size: 25px;
    font-weight: 900;

    margin-left: 10rem;
    margin-right: 10rem;
    margin-bottom: 47px;

    text-align: justify;

    ${props => props.paragraph && css`
    margin-right: 10rem;
  `}
    
`
export default ParagraphStyled;