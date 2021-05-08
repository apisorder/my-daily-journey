

// idea inspired by tutorial on this site:
// https://aleksandarpopovic.com/Building-a-Task-Management-App-in-React/
// code modified from the tutorial, which was missing parts required to yield correct results or producing errors
import React, { useState, useEffect } from 'react';
import Header from './Header';

// localized css styles for components
import InputStyled from './InputStyled';
import AnchorStyled from './AnchorStyled';

// the state used in Home is not saved in App component because no other components need to access it
// for example, servings is accessed by Fruit, Veggies, Protein, Carbohydrate, MentalHealth, SpiritualHealth, and Summary
const Home = () => {
    const [ stickies, setStickies ] = useState([]);

    // to stop useEffect from being triggered on every render
    useEffect( () => {
        loadStickiesFromLocalStorage()
    }, []);

    // create a new one and add to the existing sticky pad, but its value will be initialized later
    const addEmptySticky = ( status ) => {
        const lastSticky = stickies[ stickies.length - 1];

        let newStickyId = (lastSticky === undefined) ? 1 : lastSticky.id + 1;

        setStickies( ( stickies ) => [
            ...stickies,
            {
                id: newStickyId,
                content: "",
                status: status,
            },
        ])
    }

    // find all stickies which are not the one to be added, as to remove the duplicate sticky
    // then merge them with the new sticky to be added
    // save the result locally
    const addSticky = ( stickyToAdd ) => {
        let filteredStickies = stickies.filter( ( sticky ) => {
            return sticky.id !== stickyToAdd.id
        })

        let newStickyList = [ ...filteredStickies, stickyToAdd ];

        setStickies( newStickyList );

        saveStickiesToLocalStorage( newStickyList );
    }

    // find all stickies which are not the one to be deleted
    // save the result locally
    const deleteSticky = ( stickyId ) => {
        let filteredStickies = stickies.filter( ( sticky ) => {
            return sticky.id !== stickyId
        })

        setStickies( filteredStickies );

        saveStickiesToLocalStorage( filteredStickies );
    }

    // find the one sticky to change priority
    // then find the rest
    // save the results locally
    const moveSticky = ( id, newStatus ) => {
        let sticky = stickies.filter( ( sticky ) => {
            return sticky.id === id
        })[ 0 ]

        let filteredStickies = stickies.filter( ( sticky ) => {
            return sticky.id !== id
        })
        
        sticky.status = newStatus;

        let newStickyList = [ ...filteredStickies, sticky ];

        setStickies( newStickyList );

        saveStickiesToLocalStorage( newStickyList );
    }

    // local storage can only accepts string values and therefore transformation is needed
    const saveStickiesToLocalStorage = ( stickies) => {
        localStorage.setItem( "sticky", JSON.stringify( stickies ));
    }

    // transform string values back to objects
    const loadStickiesFromLocalStorage = () => {
        let loadedStickies = localStorage.getItem( "stickies" );

        let stickies = JSON.parse( loadedStickies );

        if ( stickies ){
            setStickies( stickies );
        }
    }

    // each pad represents "stuff" with given status/priority
    return (
        <div>
            <Header main>
                Sticky Pads
            </Header>

            <StickPad
                myStickies={ stickies }
                myAddEmptySticky={ addEmptySticky }
                myAddSticky={ addSticky }
                myDeleteSticky={ deleteSticky }
                myMoveSticky={ moveSticky }
                myStatus={ "Now" }
            />

            <StickPad
                myStickies={ stickies }
                myAddEmptySticky={ addEmptySticky }
                myAddSticky={ addSticky }
                myDeleteSticky={ deleteSticky }
                myMoveSticky={ moveSticky }
                myStatus={ "Later" }
            />

            <StickPad
                myStickies={ stickies }
                myAddEmptySticky={ addEmptySticky }
                myAddSticky={ addSticky }
                myDeleteSticky={ deleteSticky }
                myMoveSticky={ moveSticky }
                myStatus={ "No Deadline" }
            />
        </div>
    )
}
export default Home;

// filter the entire pad and display only those with matching status
const StickPad = ({ myStickies, myAddEmptySticky, myAddSticky, myDeleteSticky, myMoveSticky, myStatus }) => {

    let stickyList;
    let stickiesHaveStatus;

    const handleAddEmpty = () => {
        myAddEmptySticky( myStatus );
    }

    // filter pads with the same status
    if ( myStickies ){
        stickiesHaveStatus = myStickies.filter( ( mySticky ) => {
            return mySticky.status === myStatus 
        })
    }

    // prepare stickies for display
    if ( stickiesHaveStatus ) {
        stickyList = stickiesHaveStatus.map( ( sticky ) => {
            return (
                <Sticky
                    myAddSticky={ ( sticky ) => myAddSticky( sticky )}
                    myDeleteSticky={ ( id ) => myDeleteSticky( id ) }
                    myMoveSticky={ ( id, status ) => myMoveSticky( id, status )}
                    myKey={ sticky.id }
                    mySticky={ sticky }
                />
            )
        })
    }

    return (
        <div>
            <Header secondary>
                { myStatus }
            </Header>

            {/* actually display them here */}
            { stickyList }

            <AnchorStyled 
                added2
                onClick={ handleAddEmpty }>
                ADD
            </AnchorStyled>
        </div>
    )
}

const Sticky = ({ myAddSticky, myDeleteSticky, myMoveSticky, myKey, mySticky }) => {
    const [ toggled, setToggled ] = useState( mySticky.isToggled );
    const [ formAction, setFormAction ] = useState("");

    const handleSubmit = ( event ) => {
        event.preventDefault();

        if ( formAction === "save" ){
            if ( toggled ){
                setToggled( false );
            } else {
                let newSticky = {
                    id: mySticky.id,
                    content: event.target.elements.content.value,
                    status: mySticky.status,
                    isToggled: true,
                }

                myAddSticky( newSticky );
                setToggled( true );
            }
        }

        if ( formAction === "delete" ){
            myDeleteSticky( mySticky.id );
        }
    }

    const handleMoveLeft = () => {
        let newStatus = "";

        if ( mySticky.status === "Later" ){
            newStatus = "Now";
        } else if ( mySticky.status === "No Deadline" ){
            newStatus = "Later";
        }

        if ( newStatus !== "" ){
            myMoveSticky( mySticky.id, newStatus );
        }
    }

    const handleMoveRight = () => {
        let newStatus = "";

        if ( mySticky.status === "Now" ){
            newStatus = "Later";
        } else if ( mySticky.status === "Later" ){
            newStatus = "No Deadline";
        }

        if (newStatus !== ""){
            myMoveSticky( mySticky.id, newStatus);
        }
    }

    return (
        <div>
            <button onClick={ handleMoveLeft }> 
                <AnchorStyled left>
                    &#171;
                </AnchorStyled> 
            </button>
            <button onClick={ handleMoveRight }>
                <AnchorStyled right>
                    &#187;
                </AnchorStyled>
            </button>

            <form onSubmit={ handleSubmit }>
                <InputStyled
                    type="text"
                    name="content"
                    placeholder="Enter Sticky Content"
                    disabled={ toggled }
                    defaultValue={ mySticky.content }
                />


                <button onClick={ () => { setFormAction( "save" )}}>
                    { 
                        toggled ?                    
                        <AnchorStyled edit>EDIT</AnchorStyled>
                        : <AnchorStyled save>SAVE</AnchorStyled>
                    }
                </button>

                {
                    toggled && (
                        <button onClick={ () => { setFormAction( "delete" )}}>
                            <AnchorStyled delete>
                                DELETE
                            </AnchorStyled>
                        </button>
                    )
                }
            </form>
        </div>
    )
}