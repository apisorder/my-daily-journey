

import styled, { css } from 'styled-components';

const ButtonStyled = styled.a`
  font-size: 29px;
  display: inline-block;
  border-radius: 3px;
  
  margin: 0rem 7rem;
  border: 7px solid white;
  color: MidnightBlue;
  background: Thistle;

  ${props => props.narrow && css`
    font-size: 29px;
    display: inline-block;
    border-radius: 3px;
  
    margin: 2rem 2rem;
    border: 7px solid white;
    color: MidnightBlue;
    background: Lavender;
  `}

  ${props => props.narrow2 && css`
    font-size: 29px;
    display: inline-block;
    border-radius: 3px;
  
    margin: 2rem 2rem;
    border: 7px solid white;
    color: MidnightBlue;
    background: Plum;
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