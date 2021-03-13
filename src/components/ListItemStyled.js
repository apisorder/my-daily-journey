

import styled, { css } from 'styled-components';

const ListItemStyled = styled.ul`
padding: 0.29rem 0rem;   

${props => props.popout && css`
    padding: 0.29rem 2rem;   
`}
`
export default ListItemStyled;