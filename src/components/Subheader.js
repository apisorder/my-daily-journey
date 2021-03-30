

import styled, { css } from 'styled-components';

const Subheader = styled.h2`
color: Purple;

${props => props.title && css`
    text-align: center;
`}
`
export default Subheader;