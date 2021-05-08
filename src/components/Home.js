

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
    // stickies are Post-It stickers
    const [ stickies, setStickies ] = useState([]);

    // to stop useEffect from being triggered on every render
    useEffect( () => {
        getStickiesLocalStorage()
    }, []);

    // create a new one and add to the existing sticky pad, but its value will be initialized later
    const addEmptySticky = ( status ) => {
        const lastSticky = stickies[ stickies.length - 1];

        let newStickyId = (lastSticky === undefined) ? 1 : lastSticky.id + 1;

        // keep existing ones, and add a new one with null content
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

        let newStickyPad = [ ...filteredStickies, stickyToAdd ];

        // replace the empty/existing array with these
        setStickies( newStickyPad );

        setStickiesLocalStorage( newStickyPad );
    }

    // find all stickies which are not the one to be deleted
    // save the result locally
    const deleteSticky = ( stickyId ) => {
        let filteredStickies = stickies.filter( ( sticky ) => {
            return sticky.id !== stickyId
        })

        // replace the empty/existing array with these
        setStickies( filteredStickies );

        setStickiesLocalStorage( filteredStickies );
    }

    // find the one sticky to change status, i.e. now/later/no deadline
    // then find the rest
    // save the results locally
    const moveSticky = ( id, newStatus ) => {
        // find the sticky with the targeted id, change its status, and merge it back
        let sticky = stickies.filter( ( sticky ) => {
            return sticky.id === id
        })[ 0 ]

        sticky.status = newStatus;

        let filteredStickies = stickies.filter( ( sticky ) => {
            return sticky.id !== id
        })

        let newStickyList = [ ...filteredStickies, sticky ];

        // replace the empty/existing array with these
        setStickies( newStickyList );

        setStickiesLocalStorage( newStickyList );
    }

    // local storage can only accept string values and therefore format transformation is needed
    const setStickiesLocalStorage = ( stickies) => {
        localStorage.setItem( "stickies", JSON.stringify( stickies ));
    }

    // transform string values back to objects
    const getStickiesLocalStorage = () => {
        let receivedStickies = localStorage.getItem( "stickies" );

        let stickies = JSON.parse( receivedStickies );

        if ( stickies ){
            setStickies( stickies );
        }
    }

    // each pad represents stickies with the given status
    return (
        <div>
            <Header main>
                My Stickies
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
// stickiesSameStatus are stickies in the sticky pad with matching status
// stickyPad are the actual stickies to display
const StickPad = ({ myStickies, myAddEmptySticky, myAddSticky, myDeleteSticky, myMoveSticky, myStatus }) => {

    let stickyPad;
    let stickiesSameStatus;

    const handleAddEmpty = () => {
        myAddEmptySticky( myStatus );
    }

    // filter pads with the same status
    if ( myStickies ){
        stickiesSameStatus = myStickies.filter( ( mySticky ) => {
            return mySticky.status === myStatus 
        })
    }

    // prepare stickies for display
    if ( stickiesSameStatus ) {
        stickyPad = stickiesSameStatus.map( ( sticky ) => {
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
            { stickyPad }

            <AnchorStyled
                onClick={ handleAddEmpty }>
                ADD
            </AnchorStyled>
        </div>
    )
}

// individual sticky note
const Sticky = ({ myAddSticky, myDeleteSticky, myMoveSticky, myKey, mySticky }) => {
    const [ toggled, setToggled ] = useState( mySticky.isToggled );
    const [ formAction, setFormAction ] = useState("");

    // to prevent browser default action
    const handleSubmit = ( event ) => {
        event.preventDefault();

        // saving or editing the sticky
        if ( formAction === "save" ){
            if ( toggled ){
                setToggled( false );
            } else {
                // while editing, toggled the unnecessary functionalities, but when done adding it, bring them back
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

    // changing sticky status between now <-> later <-> no deadline
    const handleMoveUp = () => {
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

    const handleMoveDown = () => {
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

    // the default functionality is to add a sticky
    // if the sticky has been saved, some functionalities can be toggled, i.e. save
    // similarly, if a sticky has already been saved, some functionalites are appropriate, i.e. edit, delete, changing to a differnt pad
    return (
        <div>
            { 
                toggled ?
                <button onClick={ handleMoveUp }> 
                    <AnchorStyled up>
                        &#171;
                    </AnchorStyled> 
                </button> : ""
            }
 
            { 
                toggled ?
                <button onClick={ handleMoveDown }>
                    <AnchorStyled down>
                        &#187;
                    </AnchorStyled>
                </button> : ""
            }

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