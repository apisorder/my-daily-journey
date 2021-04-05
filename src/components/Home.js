

import React from 'react';
import DividerStyled from './DividerStyled';
import Header from './Header';

import {ReactComponent as HomeBuilding} from '../images/homeBuilding.svg';
import ParagraphStyled from './ParagraphStyled';

class Home extends React.Component {
    constructor(){
        super();

        this.state = {

        }
    }
    render(){
        return (
        <h2>
            Pomodoro Clock
        </h2>
        )
    }
}
export default Home;