

import React from 'react';
import ItalicStyled from './ItalicStyled';

const Exampler = ({ children }) => {
    return (
        <>
            <ItalicStyled>
                { children }
            </ItalicStyled>
        </>
    )
}
export default Exampler;