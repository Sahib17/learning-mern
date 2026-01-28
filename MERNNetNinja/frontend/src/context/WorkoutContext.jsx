// importing createContext, useReducer
import React, { createContext, useReducer } from 'react'

// creating a Context object 
export const WorkoutDataContext = createContext();

// defines reducer function
export const workoutsReducer = (state, action) => {

    // look at what type of action was dispatched
    switch(action.type){
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter((w) => w._id !== action.payload._id)
            }
        // if some random action is dispatched, do nothing
        default:
                return state
    }
}

// Provider Component - wraps app, injects global state into component tree
const WorkoutContext = ({children}) => {

    // Creates state using reducer, 
    // initial state is {workouts: []}, gives: 
    // state -> current state object, 
    // dispatch-> function to send actions
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: []
    })

  return (
    <div>
        {/* says: all components inside me can access this data */}
        <WorkoutDataContext.Provider value={{...state, dispatch}}>
            {/* whatever is wrapped in main.jsx */}
            {children}
        </WorkoutDataContext.Provider>
    </div>
  )
}

export default WorkoutContext