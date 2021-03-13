

import styled, { css } from 'styled-components';


const DividerStyled = styled.div`

${props => props.parallel && css`
    display: flex;
    padding: 0rem 0rem 0rem 3.8rem;
`}
`
export default DividerStyled;