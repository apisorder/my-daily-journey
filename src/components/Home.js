

import React, { useState } from 'react';
import DividerStyled from './DividerStyled';
import Header from './Header';

import {ReactComponent as HomeBuilding} from '../images/homeBuilding.svg';
import ParagraphStyled from './ParagraphStyled';

const Home = () => {
    const [ breakLength, setBreakLength ] = useState( 5 );
    const [ sessionLength, setSessionLength ] = useState( 25 );
    const [ isSession, setIsSession ] = useState( true );
    const [ timerMinute, setTimerMinute ] = useState( 25 );
    const [ timerSecond, setTimerSecond ] = useState( 0 );

    return (
        <main>
            <h2>
                Pomodoro Clock
            </h2>
            <BreakInterval 
                myBreakLength={ breakLength }
            />
            <SessionInterval 
                mySessionLength={ sessionLength }
            />
            <Timer
                myIsSession={ isSession }
                myTimerMinute={ timerMinute }
                myTimerSecond={ timerSecond }
            />
        </main>
        )
}
export default Home;

const BreakInterval = ({ myBreakLength }) => {
    return (
        <>
            <section>
                <button>
                    Down
                </button>
                
                My break length: { myBreakLength }
                
                <button>
                    Up
                </button>
            </section>
        </>
        )
}

const SessionInterval = ({ mySessionLength }) => {
    return (
        <>
            <section>
            <p>
                <button>
                    Down
                </button>
                
                My session length: { mySessionLength }                

                <button>
                    Up
                </button>
            </p>
            </section>
        </>
        )
}

const Timer = ({ myIsSession, myTimerMinute, myTimerSecond }) => {
    return (
        <section>
            <section>
                <h4>
                    { myIsSession === true ? "Session" : "Break"}
                </h4>
                <span>
                    my timer minute { myTimerMinute }
                </span>
                <span>
                    :
                </span>
                <span>
                    my timer second { 
                    myTimerSecond === 0 
                    ? '00' 
                    : myTimerSecond < 10 
                    ? '0' + myTimerSecond
                    : myTimerSecond
                    }
                </span>
            </section>
        </section>
    )
}
