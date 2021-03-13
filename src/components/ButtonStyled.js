

import styled, { css } from 'styled-components';

const ButtonStyled = styled.a`
  font-size: 29px;
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 9rem;
  border: 2px solid white;
  text-align: center;
  background: Thistle;
  color: MidnightBlue;

  ${props => props.popout && css`
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