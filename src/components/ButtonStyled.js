

import styled, { css } from 'styled-components';

const ButtonStyled = styled.a`
  font-size: 29px;
  display: inline-block;
  border-radius: 3px;
  
  margin: 0rem 7rem;
  border: 7px solid white;
  color: MidnightBlue;
  background: Thistle;

  ${props => props.category && css`
    font-size: 40px;  
    text-transform: uppercase;
    background: LightBlue;
    `}

  ${props => props.primary && css`
    font-size: 32px;  
    margin: 0rem 2rem;
    background: Plum;
    `}

  ${props => props.secondary && css`
    font-size: 35px;  
    margin: 0rem 2rem;
    background: LightGrey;
  `}

  ${props => props.emergency && css`
    font-size: 25px; 
    margin: 0rem 2rem;
    background: Lavender;
    text-transform: uppercase;
    `}

  ${props => props.silver && css`
    background: Silver;
  `}

  :hover {
    border-color: green;
  }
  
  @media (min-width: 768px) { 
    padding: 1rem 2rem;
    width: 11rem;
  }
  
  @media (min-width: 1024px) { 
    padding: 1.5rem 2.5rem;
    width: 13rem;
  }
`
export default ButtonStyled;