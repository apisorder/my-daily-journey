

import React, { useState, useEffect } from 'react';
import DividerStyled from './DividerStyled';
import Header from './Header';

import {ReactComponent as HomeBuilding} from '../images/homeBuilding.svg';
import ParagraphStyled from './ParagraphStyled';

// the state used in Home is not saved in App component because no other component needs to access them
// for example, servings is accessed by Fruit, Veggies, Protein, Carbohydrate, MentalHealth, SpiritualHealth, and Summary
const Home = () => {
    const [ tasks, setTasks ] = useState([]);

    // to stop useEffect from being triggered on every render
    useEffect( () => {
        loadTasksFromLocalStorage()
    }, []);

    // create a new one and add to the existing pile, but its value will be initialized later, except for the priority
    const addEmptyTask = ( status ) => {
        const lastTask = tasks[ tasks.length - 1];

        let newTaskId = (lastTask === undefined) ? 1 : lastTask.id + 1;

        setTasks( ( tasks ) => [
            ...tasks,
            {
                id: newTaskId,
                title: "",
                description: "",
                urgency: "",
                status: status,
            },
        ])
    }

    // find all those which are not the one to be added, as to remove the duplicate entry
    // then merge them with the one to be added
    // save the result locally
    const addTask = ( taskToAdd ) => {
        let filteredTasks = tasks.filter( ( task ) => {
            return task.id !== taskToAdd.id
        })

        let newTaskList = [ ...filteredTasks, taskToAdd ];

        setTasks( newTaskList );

        saveTasksToLocalStorage( newTaskList );
    }

    // find all those which are not the one to be deleted
    // save the result locally
    const deleteTask = ( taskId ) => {
        let filteredTasks = tasks.filter( ( task ) => {
            return task.id !== taskId
        })

        setTasks( filteredTasks );

        saveTasksToLocalStorage( filteredTasks );
    }

    // find the one to change priority
    // then find the rest
    // save the results locally
    const moveTask = ( id, newStatus ) => {
        let task = tasks.filter( ( task ) => {
            return task.id === id
        })[ 0 ]

        let filteredTasks = tasks.filter( ( task ) => {
            return task.id !== id
        })
        
        task.status = newStatus;

        let newTaskList = [ ...filteredTasks, task ];

        setTasks( newTaskList );

        saveTasksToLocalStorage( newTaskList );
    }

    // local storage can only accepts string values and therefore transformation is needed
    const saveTasksToLocalStorage = ( tasks ) => {
        localStorage.setItem( "task", JSON.stringify( tasks ));
    }

    // transform string values back to objects
    const loadTasksFromLocalStorage = () => {
        let loadedTasks = localStorage.getItem( "tasks" );

        let tasks = JSON.parse( loadedTasks );

        if ( tasks ){
            setTasks( tasks );
        }
    }

    return (
        <div>
            <h1>
                Task Management
            </h1>

            <StatusLine
                myTasks={ tasks }
                myAddEmptyTask={ addEmptyTask }
                myAddTask={ addTask }
                myDeleteTask={ deleteTask }
                myMoveTask={ moveTask }
                myStatus={ "Backlog" }
            />

            <StatusLine
                myTasks={ tasks }
                myAddEmptyTask={ addEmptyTask }
                myAddTask={ addTask }
                myDeleteTask={ deleteTask }
                myMoveTask={ moveTask }
                myStatus={ "In Progress" }
            />

            <StatusLine
                myTasks={ tasks }
                myAddEmptyTask={ addEmptyTask }
                myAddTask={ addTask }
                myDeleteTask={ deleteTask }
                myMoveTask={ moveTask }
                myStatus={ "Done" }
            />
        </div>
    )
}
export default Home;

// filter the entire pile and display only those with matching status
const StatusLine = ({ myTasks, myAddEmptyTask, myAddTask, myDeleteTask, myMoveTask, myStatus }) => {

    let taskList;
    let tasksForStatus;

    const handleAddEmpty = () => {
        myAddEmptyTask( myStatus );
    }

    if ( myTasks ){
        tasksForStatus = myTasks.filter( ( myTask ) => {
            return myTask.status === myStatus 
        })
    }

    if ( tasksForStatus ) {
        taskList = tasksForStatus.map( ( task ) => {
            return (
                <Task
                    myAddTask={ ( task ) => myAddTask( task )}
                    myDeleteTask={ ( id ) => myDeleteTask( id ) }
                    myMoveTask={ ( id, status ) => myMoveTask( id, status )}
                    myKey={ task.id }
                    myTask={ task }
                />
            )
        })
    }

    return (
        <div>
            <h3>
                { myStatus }
            </h3>
            { taskList }
            <button onClick={ handleAddEmpty }>
                +
            </button>
        </div>
    )
}

const Task = ({ myAddTask, myDeleteTask, myMoveTask, myKey, myTask }) => {
    const [ urgencyLevel, setUrgencyLevel ] = useState( myTask.urgency );
    const [ collapsed, setCollasped ] = useState( myTask.isCollasped );
    const [ formAction, setFormAction ] = useState("");

    const setUrgency = ( event ) => {
        setUrgencyLevel( event.target.attributes.urgency.value );
    }

    const handleSubmit = ( event ) => {
        event.preventDefault();

        if ( formAction === "save" ){
            if ( collapsed ){
                setCollasped( false );
            } else {
                let newTask = {
                    id: myTask.id,
                    title: event.target.elements.title.value,
                    description: event.target.elements.description.value,
                    urgency: urgencyLevel,
                    status: myTask.status,
                    isCollasped: true,
                }

                myAddTask( newTask );
                setCollasped( true );
            }
        }

        if ( formAction === "delete" ){
            myDeleteTask( myTask.id );
        }
    }

    const handleMoveLeft = () => {
        let newStatus = "";

        if ( myTask.status === "In Progress" ){
            newStatus = "Backlog";
        } else if ( myTask.status === "Done" ){
            newStatus = "In Progress";
        }

        if ( newStatus !== "" ){
            myMoveTask( myTask.id, newStatus );
        }
    }

    const handleMoveRight = () => {
        let newStatus = "";

        if ( myTask.status === "Backlog" ){
            newStatus = "In Progress";
        } else if ( myTask.status === "In Progress" ){
            newStatus = "Done";
        }

        if (newStatus !== ""){
            myMoveTask( myTask.id, newStatus);
        }
    }

    return (
        <div>
            <button onClick={ handleMoveLeft }>
                &#171;
            </button>
            <form onSubmit={ handleSubmit }>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter Title"
                    disabled={ collapsed }
                    defaultValue={ myTask.title }
                />

                <textarea 
                    rows="2"
                    name="description"
                    placeholder="Enter Description"
                    defaultValue={ myTask.description }
                />

                <div>
                    <label>
                        <input 
                            urgency="low"
                            onChange={ setUrgency }
                            type="radio"
                            name="urgency"
                        />
                        low
                    </label>
                    <label>
                        <input 
                            urgency="medium"
                            onChange={ setUrgency }
                            type="radio"
                            name="urgency"
                        />
                        medium
                    </label>
                    <label>
                        <input 
                            urgency="high"
                            onChange={ setUrgency }
                            type="radio"
                            name="urgency"
                        />
                        high
                    </label>
                </div>

                <button onClick={ () => { setFormAction( "save" )}}>
                    { collapsed ? "Edit" : "Save" }
                </button>

                {
                    collapsed && (
                        <button onClick={ () => { setFormAction( "delete" )}}>
                            X
                        </button>
                    )
                }
            </form>

            <button onClick={ handleMoveRight }>
                &#187;
            </button>
        </div>
    )
}