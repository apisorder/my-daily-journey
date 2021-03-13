

import React from 'react';
import { Link } from 'react-router-dom';


const Setup = () => {
    return (
        <>
            <p>
                Setup very top
                <hr/>
                some
                <hr/>
                stuff
                <hr/>
                here
                <hr/>
                Route1
            </p>
                <p>
                Route1 middle top
                <hr/>
                some
                <hr/>
                stuff
                <hr/>
                here
                <hr/>
                Route1
            </p>            
            <p>
                Route1 lower top
                <hr/>
                some
                <hr/>
                stuff
                <hr/>
                here
                <hr/>
                Route1
            </p>            
            <Link to='/home'>Home</Link>
        </>
    )
}
export default Setup;