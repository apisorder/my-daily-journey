

import styled, { css } from 'styled-components';

const DividerStyled = styled.div`

${props => props.parallel && css`
    display: flex;
    padding: 2rem 10rem 2rem 10rem;
`}

${props => props.parallel2 && css`
    display: flex;
    padding: 3rem 0rem 3rem 0rem;
`}

${props => props.footer && css`
    display: flex;
    padding: 0rem 10rem 0rem 30rem;
    text-align: center;
`}

${props => props.svg && css`
    height: 400px;
    width: 500px;
    display: block;
    margin: auto;
`}
`
export default DividerStyled;