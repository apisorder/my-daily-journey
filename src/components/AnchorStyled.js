

import styled, { css } from 'styled-components';

const AnchorStyled = styled.a`
  font-size: 29px;
  display: inline-block;
  border-radius: 3px;
  
  margin: 0rem 7rem;
  border: 7px solid white;
  color: MidnightBlue;
  background: Thistle;

  ${props => props.categoryed && css`
    font-size: 40px;
    margin: 0rem 1rem;  
    text-transform: uppercase;
    background: LightBlue;
    `}

  ${props => props.defaulted && css`
    font-size: 32px;  
    margin: 0rem 5rem;
    background: LightSalmon;
    `}

  ${props => props.consumed && css`
    font-size: 32px;  
    margin: 0rem 5rem;
    background: LightSalmon;
    `}

  ${props => props.remained && css`
    font-size: 35px;  
    margin: 0rem 2rem;
    background: LightSalmon;
  `}

  ${props => props.added && css`
    font-size: 38px;  
    margin: 2rem 7rem;
    background: yellowgreen;
  `}

  ${props => props.addition && css`
  font-size: 38px;  
  margin: 2rem 7rem;
  background: yellowgreen;
  text-align: center;
`}

  ${props => props.summaryed && css`
    font-size: 40px;
    margin: 0rem 40rem;  
    text-transform: uppercase;
    background: LightBlue;
  `}

  ${props => props.subSummaryed && css`
    font-size: 40px;
    margin: 1rem 1rem;  
    text-transform: uppercase;
    background: lightGreen;
`}

  ${props => props.subSummaryedAlt && css`
    font-size: 40px;
    margin: 1rem 1rem;  
    text-transform: uppercase;
    background: yellowGreen;
`}

  ${props => props.goal && css`
    font-size: 33px;
    margin: 1rem 19rem;
    background: MintCream;
  `}

  ${props => props.goalAlt && css`
    font-size: 33px;
    margin: 1rem 19rem;
    background: LemonChiffon;
  `}

  ${props => props.progress && css`
    font-size: 35px;
    margin: 1rem 2rem;
    background: lightBlue;
  `}

  ${props => props.progressAlt && css`
    font-size: 35px;
    margin: 1rem 2rem;
    background: lightSkyBlue;
  `}

  ${props => props.silver && css`
    margin: 0rem 2rem;
    background: Silver;
  `}

  ${props => props.edit && css`
  margin: 0rem 2rem;
  background: lightsalmon;
`}

${props => props.save && css`
margin: 0rem 2rem;
background: lightSalmon;
`}

${props => props.delete && css`
margin: 0rem 2rem;
background: silver;
`}

${props => props.up && css`
margin: 0rem 2rem;
font-size: 30px;
background: Moccasin;
`}

${props => props.down && css`
margin: 0rem 2rem;
font-size: 30px;
background: Lavender;
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
export default AnchorStyled;