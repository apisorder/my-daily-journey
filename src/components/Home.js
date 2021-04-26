

// idea inspired by tutorial on this site:
// https://aleksandarpopovic.com/Building-a-Task-Management-App-in-React/
// code modified from the tutorial, which was missing parts required to yield correct results or producing errors
import React, { useState, useEffect } from 'react';
import Header from './Header';

// localized css styles for components
import InputStyled from './InputStyled';
import TextAreaStyled from './TextAreaStyled';
import ButtonStyled from './ButtonStyled';

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
                title: "",
                // description: "",
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
                myStatus={ "Backlog" }
            />
            <StickPad
                myStickies={ stickies }
                myAddEmptySticky={ addEmptySticky }
                myAddSticky={ addSticky }
                myDeleteSticky={ deleteSticky }
                myMoveSticky={ moveSticky }
                myStatus={ "In Progress" }
            />
            <StickPad
                myStickies={ stickies }
                myAddEmptySticky={ addEmptySticky }
                myAddSticky={ addSticky }
                myDeleteSticky={ deleteSticky }
                myMoveSticky={ moveSticky }
                myStatus={ "Done" }
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

            <ButtonStyled 
                added2
                onClick={ handleAddEmpty }>
                ADD
            </ButtonStyled>
        </div>
    )
}

const Sticky = ({ myAddSticky, myDeleteSticky, myMoveSticky, myKey, mySticky }) => {
    const [ collapsed, setCollasped ] = useState( mySticky.isCollasped );
    const [ formAction, setFormAction ] = useState("");

    const handleSubmit = ( event ) => {
        event.preventDefault();

        if ( formAction === "save" ){
            if ( collapsed ){
                setCollasped( false );
            } else {
                let newSticky = {
                    id: mySticky.id,
                    title: event.target.elements.title.value,
                    // description: event.target.elements.description.value,
                    status: mySticky.status,
                    isCollasped: true,
                }

                myAddSticky( newSticky );
                setCollasped( true );
            }
        }

        if ( formAction === "delete" ){
            myDeleteSticky( mySticky.id );
        }
    }

    const handleMoveLeft = () => {
        let newStatus = "";

        if ( mySticky.status === "In Progress" ){
            newStatus = "Backlog";
        } else if ( mySticky.status === "Done" ){
            newStatus = "In Progress";
        }

        if ( newStatus !== "" ){
            myMoveSticky( mySticky.id, newStatus );
        }
    }

    const handleMoveRight = () => {
        let newStatus = "";

        if ( mySticky.status === "Backlog" ){
            newStatus = "In Progress";
        } else if ( mySticky.status === "In Progress" ){
            newStatus = "Done";
        }

        if (newStatus !== ""){
            myMoveSticky( mySticky.id, newStatus);
        }
    }

    return (
        <div>
                <button onClick={ handleMoveLeft }> 
                    <ButtonStyled left>
                        &#171;
                    </ButtonStyled> 
                </button>

            <form onSubmit={ handleSubmit }>
                <InputStyled
                    type="text"
                    name="title"
                    placeholder="Enter Sticky Content"
                    disabled={ collapsed }
                    defaultValue={ mySticky.title }
                />

                {/* <TextAreaStyled 
                    rows="2"
                    name="description"
                    placeholder="Enter Description"
                    defaultValue={ mySticky.description }
                /> */}

                <ButtonStyled added2>
                    <button onClick={ () => { setFormAction( "save" )}}>
                        { collapsed ?                    
                            <ButtonStyled edit>EDIT</ButtonStyled>
                            : <ButtonStyled save>SAVE</ButtonStyled>}
                        
                    </button>
                </ButtonStyled>

                {
                    collapsed && (
                        <button onClick={ () => { setFormAction( "delete" )}}>
                            <ButtonStyled delete>
                                DELETE
                            </ButtonStyled>
                        </button>
                    )
                }
            </form>

            <button onClick={ handleMoveRight }>
                <ButtonStyled right>
                    &#187;
                </ButtonStyled>
            </button>
        </div>
    )
}