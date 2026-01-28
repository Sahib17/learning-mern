import { useContext } from "react";

// importing the actual Context object
import {WorkoutDataContext} from "../context/WorkoutContext";

// custom hook
// hides useContext boilerplate
// enforces correct usage
const useWorkoutsContext = () => {

    // looks up component tree
    // finds nearest <WorkoutDataContext.Provider>
    // Returns its value
    // returns undefined if nothing found
    const context = useContext(WorkoutDataContext)

    // checking if we found a provider
    if (!context) {
        throw Error('useWorkoutsContext must be used inside an WorkoutContextProvider')
    }
    
  return context
}

export default useWorkoutsContext