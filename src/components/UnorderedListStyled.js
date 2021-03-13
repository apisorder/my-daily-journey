

import styled, { css } from 'styled-components';

const UnorderedListStyled = styled.ul`

${props => props.sidebar && css`
    padding: 0.5rem;
`}

`
export default UnorderedListStyled;